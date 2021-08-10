<template>
  <div class="root">
    <div class="logo">
      <img
        src="https://gw.alicdn.com/tfs/TB1OpaTmUz1gK0jSZLeXXb9kVXa-666-243.png"
        alt=""
      />
    </div>
    <Position color='false'></Position>
    <!-- <div class="position">
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
    </div> -->
    <div class="search">
      <input placeholder="搜索天猫超市商品" type="text" />
      <div @click="tosearch" style="display:inline-block">搜索</div>
    </div>
    <div class="mark">
      <span
        ><i style="color:#30b30e;font-size:14px" class="iconfont icon-quan1"></i
        >一站式购齐</span
      >
      <span
        ><i style="color:#30b30e" class="iconfont icon-man88yuanbaoyou"></i
        >满88包邮</span
      >
      <span>
        <img
          src="https://img.alicdn.com/tps/i1/TB1L25iFFXXXXXcbpXXgBrbGpXX-36-36.png"
          alt=""
        />
      </span>
      <span>
        <img
          src="https://img.alicdn.com/tfs/TB1fc6SdKuSBuNjy1XcXXcYjFXa-36-36.png"
          alt=""
        />
      </span>
    </div>
  </div>
</template>

<script>
import Position from '../Position.vue'
export default {
    components:{
      Position
    },
    data(){
        return{
        }
    },
    methods:{
      tosearch(){
        this.$router.replace('/search')
      }
    }
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  width: 1190px;
  height: 88px;
  margin: 0 auto;
  margin-bottom: 5px;
  .logo {
    display: inline-block;
    padding-top: 16px;
    width: 240px;
    height: 72px;
    img {
      width: 130px;
      padding-left: 40px;
      padding-top: 10px;
    }
  }
  /* .position {
    display: inline-block;
    margin-top: 10px;

    .detail {
      border: 1px solid #e5e5e5;
      font-size: 16px;
      font-weight: 400;
      color: #30b30e;
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
          font-size: 14px;
          color: #999;
          padding-left: 12px;
          .top-detail {
            height: 66px;
            margin-top: 20px;
            width: 480px;
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
    }
  } */
  .search {
    width: 540px;
    margin-left: 77px;
    input {
      width: 447px;
      height: 36px;
      box-sizing: border-box;
      padding: 5px 3px 5px 5px;
      border: 3px solid #30b30e;
    }
    div {
      width: 90px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background-color: #30b30e;
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
      margin-left: 10px;
    }
  }
}
</style>
