<template>
  <div class="root">
    <left-nav></left-nav>
    <div class="center">
      <div class="swiper">
        <el-carousel height="291px">
          <el-carousel-item v-for="item in List" :key="item">
                <img :src="item" alt="">
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
    return {
        "List":["https://img.alicdn.com/imgextra/i3/O1CN01DOj1UK1HeeohTrg5x_!!6000000000783-0-tps-750-291.jpg_Q90.jpg",
        "https://img.alicdn.com/imgextra/i1/O1CN01vVcobb1ZR49B0QOf2_!!6000000003190-0-tps-750-291.jpg_Q90.jpg",
        "https://img.alicdn.com/imgextra/i3/O1CN01ATamvd1Oppn8b38Qf_!!6000000001755-0-tps-750-291.jpg_Q90.jpg",
        "https://img.alicdn.com/imgextra/i3/2200633062791/O1CN01V8N0Jp1WUK7BVrsHX_!!2200633062791-0-scmitem6000.jpg_Q90.jpg",
        "https://img.alicdn.com/imgextra/i3/699634751/O1CN01K7vuWA1ky0KL6bGE8_!!699634751.jpg_Q90.jpg",
        "https://gw.alicdn.com/imgextra/i3/O1CN01466TET1QKLnQskm7p_!!6000000001957-0-tps-750-291.jpg_Q90.jpg"]
    };
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
/* .el-carousel__item h3 {
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
} */
</style>
