<template>
  <div class="root">
    <left-nav></left-nav>
    <div class="center">
      <div class="swiper">
        <el-carousel height="291px">
          <el-carousel-item v-for="item in 4" :key="item">
            <!-- <h3 class="small"></h3> -->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <img
          src="https://img.alicdn.com/imgextra/i1/2102356460/TB2YLVWX7fb_uJkHFNRXXc3vpXa_!!2102356460.jpg_Q90.jpg"
          alt=""
        />
        <img
          src="https://img.alicdn.com/imgextra/i1/2102356460/TB2YLVWX7fb_uJkHFNRXXc3vpXa_!!2102356460.jpg_Q90.jpg"
          alt=""
        />
        <img
          src="https://img.alicdn.com/imgextra/i1/2102356460/TB2YLVWX7fb_uJkHFNRXXc3vpXa_!!2102356460.jpg_Q90.jpg"
          alt=""
        />
      </div>

      <div>
        <img
          src="https://img.alicdn.com/imgextra/i1/2211772704484/O1CN01byvT0d1iziehMgbWu_!!2211772704484-0-alimamacc.jpg_Q90.jpg"
          alt=""
        />
        <img
          src="https://img.alicdn.com/imgextra/i1/2211772704484/O1CN01byvT0d1iziehMgbWu_!!2211772704484-0-alimamacc.jpg_Q90.jpg"
          alt=""
        />
        <img
          src="https://img.alicdn.com/imgextra/i1/2211772704484/O1CN01byvT0d1iziehMgbWu_!!2211772704484-0-alimamacc.jpg_Q90.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="right">
        <div><img src="https://img.alicdn.com/imgextra/i3/O1CN01P7b2dE1vYmMYCSxfU_!!6000000006185-0-tps-188-170.jpg_Q90.jpg" alt=""></div>
        <div><img src="https://img.alicdn.com/tfs/TB1ZmXFvebviK0jSZFNXXaApXXa-188-170.png_Q90.jpg" alt=""></div>
    </div>
  </div>
</template>

<script>
import LeftNav from "./LeftNav.vue";

export default {
  components: {
    LeftNav,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.root {
  width: 1190px;
  height: 583px;
  margin: 0 auto;
  position: relative;

  .center {
    position: absolute;
    left: 241px;
    top: -1px;
    display: inline-block;
    width: 750px;
    .swiper {
      /* display: inline-block; */
    }
  }
  .right{
      right: 0;
      top: 0;
      position: absolute;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
