<template>
      <div class="position">
      <div @mouseenter="cityshow=true" @mouseleave="cityshow=false" :style="{color:color}" class="detail">
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
</template>

<script>
export default {
    props:{
        color:{
            type:String,
            default:'#30b30e'
        }
    },
    data(){
        return {
            cityshow:false
        }
    }

}
</script>

<style lang="scss" scoped>
 .position {
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
  }
</style>