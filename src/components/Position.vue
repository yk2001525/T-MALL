<template>
      <div class="position">
      <div @mouseenter="cityshow=true" @mouseleave="cityshow=false" :style="{color:color}" class="detail">
        <div v-show="cityshow" class="cityselect">
          <div style="position:absolute;width:72px;background-color:#fff;top:-2px;height:10px"></div>
          <div class="top">
            热门城市:
            <div class="top-detail">
              <span>北京</span><span>上海</span><span>杭州</span
              ><span>广州</span><span>天津</span><span>苏州</span>
              <span>成都</span>
              <span>深圳</span>
              <span>南京</span>
              <span>重庆</span>
              <span>南昌</span>
              <span>武汉</span>
            </div>
            <div class="select-area">
                <div @mouseenter="activeIndex = 0" :class="activeIndex == 0 ?  'select-active':''">ABCDE</div>
                <div  @mouseenter="activeIndex = 1" :class="activeIndex == 1 ?  'select-active':''" >FGHJ</div>
                <div  @mouseenter="activeIndex = 2" :class="activeIndex == 2 ?  'select-active':''" >KLMNP</div>
                <div  @mouseenter="activeIndex = 3" :class="activeIndex == 3 ?  'select-active':''" >QRSTW</div>
                <div  @mouseenter="activeIndex = 4" :class="activeIndex == 4 ?  'select-active':''" >XYZ</div>
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
            cityshow:false,
            activeIndex:0
        }
    }

}
</script>

<style lang="scss" scoped>
 .position {
    display: inline-block;
    margin-top: 10px;
    .detail:hover{
      /* border-bottom: 0; */
    }
    .detail {
      border: 1px solid #e5e5e5;
      font-size: 16px;
      font-weight: 400;
      color: #30b30e;
      padding: 8px 12px;
      border-radius: 3px;
      position: relative;
      box-sizing: border-box;
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
          .select-area{
            margin-top: 25px;
            display: flex;
            font-size: 14px;
            color: black;
            justify-content: space-around;
            border-bottom: 1px solid rgb(238, 238, 238);
            position: relative;
            left: -12px;
              box-sizing: border-box;

            div{
              height: 43px;
              line-height: 43px;
              box-sizing: border-box;
              padding: 0 10px 0;
            }
            .select-active{
              box-sizing: border-box;
              border: 1px solid #e5e5e5;
              border-bottom: 1px solid #fff;
            }
          }
        }
      }
    }
  }
</style>