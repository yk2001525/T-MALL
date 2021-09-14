<template>
  <div class="root">
    <div
      @mouseenter="changeindex(index)"
      class="shop-item"
      v-for="(item, index) in productList"
      :style="
        item.checked ? 'background-color:#fff8e1' : 'background-color:#fff'
      "
      style="display: flex !important; flex-wrap: wrap"
    >
      <div style="height: 16px; width: 990px"></div>
      <div style="width: 48px; text-align: center">
        <input
          @change="checkbox(index)"
          v-model="item.checked"
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <div style="width: 302px; display: flex">
        <div style="display: inline-block">
          <img style="width: 80px" :src="item.product_img" alt="" />
        </div>
        <div
          style="
            display: inline-block;
            font-size: 12px;
            color: #3c3c3c;
            width: 186px;
            margin-left: 5px;
          "
        >
          {{ item.product_name }}
        </div>
      </div>
      <div style="width: 175px"></div>
      <div
        style="width: 110px; color: #3c3c3c; font-size: 12px; font-weight: 700"
      >
        ￥{{ item.product_price.toFixed(2) }}
      </div>
      <div style="width: 120px; color: #3c3c3c">
        <el-input-number
          v-model="item.num"
          @change="handleChange"
          :min="1"
          :max="9999"
          label="描述文字"
          size="mini"
          style="width: 90px"
        ></el-input-number>
      </div>
      <div style="width: 105px; margin-left: 10px; margin-right: 20px">
        <div style="color: #ff4400; height: 16px">
          ￥{{ (item.product_price * item.num).toFixed(2) }}
        </div>
        <div style="color: #9c9c9c">({{ item.product_weight }}kg)</div>
      </div>
      <div style="width: 99px; font-size: 12px; color: #3c3c3c">
        <div style="height: 16px; width: 100%">移入收藏夹</div>
        <div style="cursor: pointer" @click="deleteproduct(index)">删除</div>
      </div>
      <div style="height: 16px; width: 990px"></div>
    </div>
  </div>
</template>

<script>
import { post } from "../../network/request";
export default {
  props: {
    goodsList: {},
  },
  data() {
    return {
      productList: this.goodsList,
      allcheck: true,
      checkarr: [],
      arrs: [],
      currentindex: 0,
    };
  },
  watch: {
    goodsList: function(val) {
      this.productList = val;
      this.productList.map((item) => {
        item.checked = item.checked == 1 ? true : false;
      });
      for (var i = 0; i < this.productList.length; i++) {
        if (this.productList[i].checked === false) {
          this.allcheck = false;
        }
      }
      if (this.productList.length == 0) {
        this.$emit("allcheck", false);
      } else this.$emit("allcheck", this.allcheck);
    },
    checkList() {},
  },
  created() {
    console.log(this.productList);
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    changeindex(index) {
      this.currentindex = index;
    },
    handleChange(currentValue, oldValue) {
      console.log("handleChange");
      console.log(this.currentindex);
      console.log(currentValue, oldValue);
      if (currentValue > oldValue) {
        console.log("+");
        post("/product/addshopcartnum", {
          user_id: this.userInfo.user_id,
          product_id: this.goodsList[this.currentindex].product_id,
        }).then((res) => {
          console.log(res.data);
          this.totalPrice();
        });
      } else if (oldValue > currentValue) {
        console.log("-");
        post("/product/cutshopcartnum", {
          user_id: this.userInfo.user_id,
          product_id: this.goodsList[this.currentindex].product_id,
        }).then((res) => {
          console.log(res.data);
          this.totalPrice();
        });
      }
    },
    totalPrice() {
      let price = 0;
      this.productList.map((item) => {
        price += (item.product_price * item.num).toFixed(2) - 0;
      });
      console.log(price.toFixed(2));
      this.$store.commit("saveTotalPrice", price);
    },
    deleteproduct(index) {
      let that = this;
      post("/product/deleteshopcart", {
        user_id: this.userInfo.user_id,
        product_id: this.goodsList[index].product_id,
      }).then((res) => {
        console.log(res.data);
        that.productList = res.data.data;
        that.$router.go(0);
      });
    },
    checks() {
      console.log(this.productList);
      this.productList.map((k) => {
        if (k.checked == 0) {
          this.checkarr.push(false);
        } else {
          this.checkarr.push(true);
        }
      });
      console.log(this.checkarr);
    },
    checkbox(index) {
      let pricesum = 0;
      let sum = 0;
      for (var i = 0; i < this.goodsList.length; i++) {
        if (this.goodsList[i].checked === true) {
          pricesum =
            pricesum + this.goodsList[i].product_price * this.goodsList[i].num;
          sum = sum + 1;
        }
      }
      this.$store.commit("saveTotalSum", sum);
      this.$store.commit("saveTotalPrice", pricesum);
      let that = this;
      post("/product/checkproduct", {
        user_id: this.userInfo.user_id,
        product_id: this.goodsList[index].product_id,
      }).then((res) => {
        const elementsAreEqual = (array) =>
          array.every((el) => el.checked === true);
        const allcheck = elementsAreEqual(that.productList);
        that.$emit("allcheck", allcheck);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 990px;
  height: 130px;
  /* background-color: green; */
  // padding: 16px 0;
  box-sizing: border-box;
  // border-bottom: 1px solid #ccc;
  /* display: flex !important; */
  .shop-item {
    border-bottom: 1px solid #ccc;
  }
  div {
    display: inline-block;
    height: 100%;
  }
}
</style>
