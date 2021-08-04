<template>
  <div class="root">
    <img  v-show="isshow" src="../../assets/nav-item.png" alt="" />
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
    <div style="z-index:1" @mouseenter="mouseenter" @mouseleave="mouseleave" v-show="isshow" class="banner-detail">
        <div class="detail-item">1</div>
        <div class="detail-item">2</div>
        <div class="detail-item">3</div>
        <div class="brand">4</div>

    </div>


  </div>
</template>

<script>

export default {
    components:{

    },
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
    .detail-item{
        padding: 15px 20px;
        box-sizing: border-box;
        display: inline-block;
        width: 248px;
        height: 100%;
        border-right: 1px dotted #d3d3d3;
        background-color: #fff;
    }
    .brand{
        display: inline-block;
        box-sizing: border-box;
        padding: 15px 20px;
        height: 100%;
        width: 197px;
        background-color: #f7f7f7;

    }
  }
}
</style>
