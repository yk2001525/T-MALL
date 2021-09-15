<template>
  <div class="root">
    <div style="width:240px;height:5px"></div>
    <div style="margin-top:13px"><Position color="#e22a40"></Position></div>
    <div class="search">
      <input
        style="transition:.3s"
        :style="warnning ? 'background-color:rgb(253,189,120)' : ''"
        @keyup.enter="tosearch"
        v-model="keyword"
        placeholder="搜索天猫超市商品"
        type="text"
      />
      <div @click="tosearch" style="display:inline-block;cursor:pointer">搜索</div>
    </div>
  </div>
</template>

<script>
import { post } from "../../network/request";

import Position from "../Position";
export default {
  components: {
    Position,
  },
  data() {
    return {
      keyword: "",
      warnning: false,
    };
  },
  computed: {},
  methods: {
    // tosearch(){
    //     let that = this
    //     this.$store.commit('saveSearchKeyword',this.keyword)
    //     post('/product/search',{
    //         keyword:this.keyword
    //     }).then((res)=>{
    //         that.$store.commit('saveSearchResult',res.data.data)
    //     })
    // }
    tosearch() {
      if (this.keyword != "") {
        let that = this;
        this.$store.commit("saveSearchKeyword", this.keyword);
        post("/product/search", {
          keyword: this.keyword,
        }).then((res) => {
          that.$store.commit("saveSearchResult", res.data.data);
        });
      } else {
        this.warnning = true;
        setTimeout(() => {
          this.warnning = false;
        }, 300);
      }
    },
  },
  created() {
    if (this.$store.state.searchKeyword)
      this.keyword = this.$store.state.searchKeyword;
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 990px;
  margin: 0 auto;
  display: flex;
  .search {
    width: 387px;
    margin-left: 25px;
    margin-top: 20px;
    input {
      width: 297px;
      height: 36px;
      box-sizing: border-box;
      padding: 5px 3px 5px 5px;
      border: 3px solid #ff0036;
    }
    div {
      width: 90px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background-color: #ff0036;
      position: relative;
      top: 2px;
      color: #fff;
    }
  }
}
</style>
