<template>
  <div class="root">
    <img v-show="isshow" src="../../assets/nav-item.png" alt="" />
    <div
      @mouseleave="mouseleave"
      @mouseenter="mouseenter"
      :class="isshow ? 'detail-active' : 'detail'"
    >
      <div class="title">
        <slot name="title"></slot>
        <span style="float:right">></span>
      </div>
      <div class="item">
        <slot name="item"></slot>
      </div>
    </div>
    <div
      style="z-index:1"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      v-show="isshow"
      class="banner-detail"
    >
      <div class="detail-item">
        <span>
            <div class="detail-item-title-top">进口牛奶</div>
            <div class="item-row">
              <div class="detail-item-message">进口纯牛奶</div>
              <div class="detail-item-message">进口酸奶</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口成人奶粉</div>
              <div class="detail-item-message">进口含乳饮料</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口有机牛奶</div>
              <div class="detail-item-message">进口酸奶粉</div>
            </div>
   
            <div class="detail-item-title">进口粮油/速食/调料</div>
            <div class="item-row">
              <div class="detail-item-message">进口橄榄油</div>
              <div class="detail-item-message">进口其他油</div>
              <div class="detail-item-message">进口大米</div>

            </div>
            <div class="item-row">
              <div class="detail-item-message">进口方便面</div>
              <div class="detail-item-message">进口意面</div>
              <div class="detail-item-message">其他速食</div>

            </div>
            <div class="item-row">
              <div class="detail-item-message">进口罐头</div>
              <div class="detail-item-message">进口调味料</div>
              <div class="detail-item-message">进口调味酱</div>

            </div>
    
            <div class="detail-item-title">进口厨房用品</div>
            <div class="item-row">
              <div class="detail-item-message">进口餐具/水杯</div>
              <div class="detail-item-message">进口厨具/锅具</div>
            </div>
            <div class="item-row">
                <div class="detail-item-message">进口一次性用品</div>

            </div>
        
        </span>
      </div>
      <div class="detail-item">
            <span>
            <div class="detail-item-title-top">进口零食</div>
            <div class="item-row">
              <div class="detail-item-message">进口蜜饯果干</div>
              <div class="detail-item-message">进口薯片/膨化</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口坚果</div>
              <div class="detail-item-message">进口糖果</div>
              <div class="detail-item-message">进口果冻布丁</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口海产品</div>
              <div class="detail-item-message">进口肉干</div>
              <div class="detail-item-message">进口巧克力</div>
            </div>
            <div class="detail-item-title">进口母婴用品</div>
            <div class="item-row">
              <div class="detail-item-message">进口纸尿裤</div>
              <div class="detail-item-message">进口母婴洗护</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口婴儿奶粉</div>
              <div class="detail-item-message">进口辅食</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口幼婴儿营养品</div>
            </div>
            <div class="detail-item-title">进口饼干/糕点</div>
            <div class="item-row">
              <div class="detail-item-message">进口饼干</div>
              <div class="detail-item-message">进口糕点</div>
              <div class="detail-item-message">进口面包干</div>

            </div>
            <div class="item-row">
              <div class="detail-item-message">进口威化</div>
              <div class="detail-item-message">进口苏打饼干</div>
              <div class="detail-item-message">进口曲奇</div>
            </div>
        </span>
      </div>
      <div class="detail-item">
            <span>
            <div class="detail-item-title-top">进口酒饮</div>
            <div class="item-row">
              <div class="detail-item-message">进口葡萄酒</div>
              <div class="detail-item-message">进口啤酒</div>
              <div class="detail-item-message">进口起泡酒</div>

            </div>
            <div class="item-row">
              <div class="detail-item-message">进口洋酒</div>
              <div class="detail-item-message">进口果汁</div>
              <div class="detail-item-message">进口水</div>

            </div>
            <div class="item-row">
              <div class="detail-item-message">进口咖啡饮料</div>
              <div class="detail-item-message">进口碳酸饮料</div>
            </div>
   
            <div class="detail-item-title">进口冲调保健</div>
            <div class="item-row">
              <div class="detail-item-message">进口咖啡</div>
              <div class="detail-item-message">进口茶/蜂蜜</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口谷物冲饮</div>
              <div class="detail-item-message">进口奶茶</div>
              <div class="detail-item-message">进口茶叶</div>

            </div>
            <div class="item-row">
              <div class="detail-item-message">进口保健品</div>
              <div class="detail-item-message">进口维生素</div>
            </div>
    
            <div class="detail-item-title">进口个人护理</div>
            <div class="item-row">
              <div class="detail-item-message">进口洗发水</div>
              <div class="detail-item-message">进口护发</div>
              <div class="detail-item-message">进口沐浴</div>

            </div>
            <div class="item-row">
              <div class="detail-item-message">进口私处洗液</div>
              <div class="detail-item-message">进口牙膏</div>
              <div class="detail-item-message">进口牙刷</div>
              
            </div>
            <div class="item-row">
              <div class="detail-item-message">进口漱口水</div>
              <div class="detail-item-message">进口面部护理</div>
            </div>
        </span>
      </div>
      <div class="brand detail-item">
            <span>
              
            <div class="detail-item-title-top">品牌</div>
            <div class="item-row">
              <div class="detail-item-message">安佳牛奶</div>
              <div class="detail-item-message">中原G7</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">家乐氏</div>
              <div class="detail-item-message">巴黎水</div>
            </div>
            <div class="item-row">
              <div class="detail-item-message">汤姆农场</div>
              <div class="detail-item-message">小老板</div>
            </div>
   
            <div style="color:#E22a40" class="detail-item-title">品牌活动</div>
            <div class="item-row">
              <div class="detail-item-message">德亚牛奶</div>
              <div class="detail-item-message">进口谷物冲饮</div>
            </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isshow: false,
    };
  },
  methods: {
    mouseenter() {
      this.isshow = true;
    },
    mouseleave() {
      this.isshow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  /* display: block; */
  /* margin: 0 auto; */
  /* width: 1190px; */
  margin-top: 1px;
  margin-bottom: 1px;
  box-sizing: border-box;
  border-left: 1px solid #e7e7e7;
  position: relative;

  img {
    height: 80px;
    position: absolute;
    left: -9px;
  }
  .detail {
    display: inline-block;
    height: 73px;
    width: 240px;
    box-sizing: border-box;
    padding: 19px;
    .title {
      transition: all 0.1s;
      color: #515151;
      font-size: 14px;
      span {
        color: #515151 !important;
      }
    }
    .item {
      transition: all 0.1s;

      width: 240px;
      color: #999;
      font-size: 12px;
      margin-top: 10px;
      margin-left: 30px;
    }
  }
  .detail-active {
    display: inline-block;
    height: 73px;
    width: 240px;
    box-sizing: border-box;
    padding: 19px;
    background-color: #e00024;

    .title {
      transition: all 0.1s;

      color: #fff !important;
      font-size: 14px;
    }
    .item {
      transition: all 0.1s;

      width: 240px;
      font-size: 12px;
      margin-top: 10px;
      margin-left: 30px;
      color: #f1abb1 !important;
    }
  }
  .banner-detail {
    position: absolute;
    display: inline-block;
    width: 950px;
    height: 363px;
    box-sizing: border-box;
    border: 3px solid #e22a40;
    /* display: flex; */
    overflow: hidden;
    .detail-item {
      padding: 15px 20px;
      box-sizing: border-box;
      display: inline-block;
      width: 248px;
      height: 100%;
      border-right: 1px dotted #d3d3d3;
      background-color: #fff;
      overflow: hidden;
      .detail-item-title {
        font-size: 12px;
        font-weight: 700;
        margin-top: 20px;
      }
      .detail-item-title-top {
        font-size: 12px;
        font-weight: 700;
        margin-top: 0px;
      }
      .item-row {
        width: 225px;
        .detail-item-message:first-child {
          border-left: 0;
        }
        .detail-item-message:hover{
          cursor: pointer;
          color: #e22a40;
          text-decoration: underline;
        }
        .detail-item-message {
          
          font-size: 12px;
          margin-top: 15px;
          color: #666;
          border-left: 1px solid #e7e7e7;
          display: inline-block;
          padding-left: 9px;
          margin-left: -10px;
          margin-right: 18px;
        }
      }
    }
    .brand {
      display: inline-block;
      box-sizing: border-box;
      padding: 15px 20px;
      height: 100%;
      width: 197px;
      background-color: #f7f7f7;
      overflow: hidden;
    }
  }
}
</style>
