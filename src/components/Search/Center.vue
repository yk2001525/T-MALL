<template>
  <div class="root">
    <div class="left">
      <div class="left-top">
        所有类目
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        “{{searchKeyword}}”
      </div>
      <div class="right-title">
        商品列表
      </div>
      <div class="right-center">
        <ProductItem :searchResult="searchResult"></ProductItem>


      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../Search/ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
    computed:{
        searchResult(){
            return this.$store.state.searchResult
        },
        searchKeyword(){
            return this.$store.state.searchKeyword
        }
    },
    // watch:{
    //     searchResult(val,oval){
    //     }
    // },
    created(){
    }
};
</script>

<style lang="scss" scoped>
.root {
  width: 990px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 190px;
    height: 35px;
    border: 1px solid #e4e4e4;
    .left-top {
      box-sizing: border-box;
      padding: 3px 5px;
      background-color: #f2f2f2;
      font-size: 12px;
      color: #2953a6;
      height: 27px;
      line-height: 24px;
      border-bottom: 1px solid #e4e4e4;
    }
  }
  .right {
    font-size: 12px;
    color: #2953a6;
    width: 790px;
    .right-top {
      height: 27px;
      line-height: 27px;
      border: 1px solid #e1e7f5;
      background-color: #f7faff;
      padding-left: 10px;
      margin-bottom: 10px;
    }
    .right-title {
      height: 27px;
      line-height: 27px;
      background-color: #a6a6a6;
      color: #fff;
      font-size: 12px;
      padding-left: 10px;
    }
    .right-center {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
