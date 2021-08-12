<template>
  <div class="root">
    <div class="top">
      <div class="top-left">
        全部商品 {{totalsum}}
      </div>
      <div class="top-right">
        <div>已选商品（不含运费）</div>
        <div style="font-weight:700;color:#FF4400">{{totalprice.toFixed(2)}}</div>
        <div :style="totalsum?'background-color:#f40;':'background-color:#b0b0b0;'" style="width:55px;height:25px;">结算</div>
      </div>
    </div>
    <div class="cart-top">
      <div class="cart-top-left">
        <span
          ><input @change="allchecks" v-model="allchecked" type="checkbox" />
          全选</span
        >
        <span>商品信息</span>
      </div>
      <div class="cart-top-right">
        <span>单价</span>
        <span>数量</span>
        <span>金额</span>
        <span>操作</span>
      </div>
    </div>
    <div class="shop-label">
      <!-- <input type="checkbox" /> -->
      <img
        style="position:relative;top:4px;"
        src="https://img.alicdn.com/tfs/TB18_6NaEuF3KVjSZK9XXbVtXXa-24-20.png"
        alt=""
      />
      店铺：天猫超市
    </div>
    <div class="shop-detail">
      <div class="shop-detail-top">
        <div>超值换购活动</div>
        满88
      </div>
      <div class="shop-item">
        <GoodsItem @allcheck="allcheck" :goodsList="goodsList"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
import { post } from "../../network/request";

export default {
  data() {
    return {
      goodsList: [],
      allchecked: false,
    };
  },
  components: {
    GoodsItem,
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
      totalsum(){
            return this.$store.state.totalSum
        },
         totalprice(){
            return this.$store.state.totalPrice
        }
  },
  created() {
    post("/product/getshopcart", {
      user_id: this.userInfo.user_id,
    }).then((res) => {
      console.log(res.data.data);
         var pricesum = 0;
          var sum = 0;
          for (var i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].checked == true) {
              pricesum = pricesum + res.data.data[i].product_price * res.data.data[i].num;
              sum = sum + 1;
            }
          }
          this.$store.commit("saveTotalSum", sum);
          this.$store.commit("saveTotalPrice", pricesum);
      this.goodsList = res.data.data;
    });
  },
  methods: {
    allcheck(data) {
      this.allchecked = data;
    },
    allchecks() {
      //全选与全不选
      let that = this;
      console.log(this.allchecked);
      if (this.allchecked === false) {
        post("/product/allnocheck", {
          user_id: this.userInfo.user_id,
        }).then((res) => {
          console.log(res);
          that.goodsList.map((item) => (item.checked = false));
          let pricesum = 0;
          let sum = 0;
          for (var i = 0; i < that.goodsList.length; i++) {
            if (that.goodsList[i].checked === true) {
              pricesum = pricesum + that.goodsList[i].product_price*that.goodsList[i].num;
              sum = sum + 1;
            }
          }
          that.$store.commit("saveTotalSum", sum);
          that.$store.commit("saveTotalPrice", pricesum);
        });
      } else {
        post("/product/allcheck", {
          user_id: this.userInfo.user_id,
        }).then((res) => {
          that.goodsList.map((item) => (item.checked = true));
          let pricesum = 0;
          let sum = 0;
          for (var i = 0; i < that.goodsList.length; i++) {
            if (that.goodsList[i].checked === true) {
              pricesum = pricesum + that.goodsList[i].product_price*that.goodsList[i].num;
              sum = sum + 1;
            }
          }
          that.$store.commit("saveTotalSum", sum);
          that.$store.commit("saveTotalPrice", pricesum);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 990px;
  margin: 0 auto;
  .top {
    width: 990px;
    height: 33px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e2e1e2;
    .top-left {
      width: 124px;
      height: 33px;
      color: #f40;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      border-bottom: 2px solid #f40;
    }
    .top-right {
      div {
        display: inline-block;
        font-size: 12px;
        margin-left: 15px;
        &:last-child {
          width: 55px;
          height: 25px;
          background-color: #aaa;
          text-align: center;
          line-height: 25px;
          color: #fff;
        }
      }
    }
  }
  .cart-top {
    width: 990px;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    .cart-top-left {
      width: 200px;
      height: 50px;
      display: flex;
      justify-content: space-around;
    }
    .cart-top-right {
      width: 500px;
      height: 50px;
      display: flex;
      justify-content: space-around;
      span {
        display: inline-block;
      }
    }
  }
  .shop-label {
    width: 990px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    color: #3c3c3c;
    padding-left: 20px;
  }
  .shop-detail {
    width: 990px;
    /* height: 200px; */
    border: 1px solid #ccc;
    .shop-detail-top {
      height: 37px;
      border-bottom: 1px solid #e8e8e8;
      line-height: 22px;
      font-size: 12px;
      padding-left: 30px;
      color: #6c6c6c;
      div {
        display: inline-block;
        height: 22px;
        background-color: #e7e7e7;
        margin-top: 8px;
        padding: 0 5px 0;
      }
    }
    .shop-item {
      width: 990px;
      /* height: 130px; */
      /* background-color: gray; */
      /* padding-top: 20px; */
      box-sizing: border-box;
      span {
        /* display: inline-block; */
        text-align: center;
      }
    }
  }
}
</style>
