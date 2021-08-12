<template>
  <div class="root">
    <div @click="toindex" class="logo">
      <img
        src="https://img.alicdn.com/tps/i2/TB17zkaIpXXXXceXFXXTmwoSVXX-456-80.png"
        alt=""
      />
    </div>
    <div class="position">
      <div @mouseenter="cityshow=true" @mouseleave="cityshow=false" class="detail">
        <div v-show="cityshow" class="cityselect">
          <div class="top">
            热门城市:
            <div class="top-detail">
              <span>北京</span><span>北京</span><span>北京</span
              ><span>北京</span><span>北京</span><span>北京</span>
              <span>成都</span>
              <span>成都</span>
              <span>成都</span>
              <span>成都</span>
              <span>成都</span>
              <span>成都</span>
            </div>
          </div>
          <div class="center"></div>
        </div>
        郑州<i class="iconfont icon-xiasanjiao"></i>
      </div>
    </div>
    <div class="search">
      <input v-model="keyword" placeholder="搜索天猫超市商品" type="text" />
      <div @click="tosearch" style="display:inline-block">搜索</div>
    </div>
    <div class="mark">
      <span
        ><i style="color:#ff0036;font-size:14px" class="iconfont icon-quan1"></i
        >一站式购齐</span
      >
      <span
        ><i style="color:#ff0036" class="iconfont icon-man88yuanbaoyou"></i
        >满88包邮</span
      >
      <span style="display:inline-block;position:relative;top:12px">
        <img
          src="https://img.alicdn.com/tps/i1/TB1L25iFFXXXXXcbpXXgBrbGpXX-36-36.png"
          alt=""
        />
      </span>

    </div>
  </div>
</template>

<script>
import { post } from "../../network/request";

export default {
    data(){
        return{
            cityshow:false,
            keyword:''
        }
    },
    methods:{
      toindex(){
        this.$router.replace('/')
      },
        tosearch(){
        // this.$store.commit('saveSearchKeyword',this.keyword)
             let that = this
            this.$store.commit('saveSearchKeyword',this.keyword)
            post('/product/search',{
                keyword:this.keyword
            }).then((res)=>{
                that.$store.commit('saveSearchResult',res.data.data)
        this.$router.replace('/search')

            })
      }
    }
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  width: 990px;
  height: 88px;
  margin: 0 auto;
  margin-bottom: 5px;
  .logo {
    display: inline-block;
    cursor: pointer;
    /* padding-top: 16px; */
    width: 240px;
    height: 72px;
    img {
      /* width: 130px; */
      /* padding-left: 40px; */
      /* padding-top: 10px; */
      width: 228px;
      margin-top: 20px;
    }
  }
  .position {
    display: inline-block;
    margin-top: 10px;

    .detail {
      border: 1px solid #e5e5e5;
      font-size: 16px;
      font-weight: 400;
      color: #e22a40;
      padding: 8px 12px;
      border-radius: 3px;
      position: relative;
      .cityselect {
        width: 482px;
        height: 795px;
        background-color: #fff;
        position: absolute;
        z-index: 11;
        top: 32px;
        left: -1px;
        border: 1px solid #e5e5e5;
        .top {
          height: 107px;
          padding-top: 20px;
          width: 480px;
          /* background-color: red; */
          font-size: 14px;
          color: #999;
          padding-left: 12px;
          .top-detail {
            height: 66px;
            margin-top: 20px;
            width: 480px;
            /* background-color: red; */

            span {
              font-size: 14px;
              padding-left: 25px;
              margin-bottom: 12px;
              color: #333;
              width: 48px;
              display: inline-block;
            }
          }
        }
      }

      /* margin-top: 15px; */
    }
  }
  .search {
    width: 390px;
    margin-left: 25px;
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
  .mark {
    font-size: 12px;
    line-height: 38px;
    font-weight: bolder;
    color: #666;
    span {
      margin-left: 25px;
    }
  }
}
</style>
