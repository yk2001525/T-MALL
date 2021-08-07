<template>
  <div :class="{ 'fix-nav': navBarFixed }" class="roots">
    <div class="root">
      <div class="left-part">
        <div class="nav-top">
          所有产品分类
        </div>
        <div class="nav-item">
          <div>首页</div>
          <div style="font-size:12px;color:#d4d4d4;">|</div>
          <div>企业采购</div>
        </div>
      </div>
      <div
        @mouseenter="isshow = true"
        @mouseleave="isshow = false"
        class="right-part"
      >
      <el-collapse-transition>
      <div v-show="reelshow" class="reel">
          <div class="reel-item">
            <span>商品</span>
            <span>数量</span>
            <span>价格</span>
            <span>删除</span>
          </div>
          <div v-show="!isLogin" class="reel-detail">如果您还未登录，可能导致购物车为空，请马上登录</div>
          <div v-show="isLogin" class="reel-detail">当前购物车为空</div>

      </div>
        </el-collapse-transition>
        <i
          style="font-size:36px;color:#333;background-color:#fff"
          class="iconfont icon-gouwuche2 cart"
        ></i>
        <span class="money">
          ￥0.00
          <span style="font-size:12px">元</span>
        </span>

        <span :class="cartshow ? 'weight-active' : 'weight'">
          0kg
        </span>
      </div>
        <transition name="el-zoom-in-center">
      <div  v-show="FloatNavShow" class="floatnav">
        <div @click="enter('1')" :class="scrollnum<1160?'floatnav-item-active':'floatnav-item'">进口酒饮></div>
        <div @click="enter('2')" :class="scrollnum<1840&&scrollnum>1160?'floatnav-item-active':'floatnav-item'">酒水饮料></div>
        <div @click="enter('3')"  :class="scrollnum<2520&&scrollnum>1840?'floatnav-item-active':'floatnav-item'">米面杂粮></div>
        <div  @click="enter('4')" :class="scrollnum<3200&&scrollnum>2520?'floatnav-item-active':'floatnav-item'">油品调味></div>
        <div  @click="enter('5')" :class="scrollnum>3200?'floatnav-item-active':'floatnav-item'">美容护肤></div>
   
        <div style="    background-color: #fff;width:81px;padding:5px;box-sizing:border-box; border: 1px solid #e7e7e7;border-bottom:none"><img style="width:63px;border:2px solid #000;padding:1px" src="https://img.alicdn.com/tps/i1/T1dC1wFIVcXXcI6BY_-280-280.png" alt=""></div>
        <div style="border-bottom:1px solid #e7e7e7" class="floatnav-item">在线咨询></div>





      </div>
       </transition>
    </div>
  </div>
</template>

<script>
export default {

  components: {},
  data() {
    return {
      isshow: false,
      navBarFixed: false,
      FloatNavShow:false,
      reelshow:false,
      cartshow:false,
      scrollnum:0
      
    };
  },
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    },
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  watch:{
     isshow(val, oldVal){//普通的watch监听
          if(val === true){
            this.cartshow = true
            setTimeout(() => {
              this.reelshow = true
            }, 250);
          }else{
            this.reelshow = false
            setTimeout(() => {
              this.cartshow = false
            }, 250);
          }
     }
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },

  destroyed() {
    // 移除事件监听
    window.removeEventListener("scroll", this.watchScroll);
  },
  methods: {
    enter(key) {
        switch(key){
          case '1':
            document.documentElement.scrollTop = 680
            break;
          case '2':
            document.documentElement.scrollTop = 1180
            break;
             case '3':
            document.documentElement.scrollTop = 1880
            break;
             case '4':
            document.documentElement.scrollTop = 2560
            break;
             case '5':
            document.documentElement.scrollTop = 3280
            break;

        }
    },
    watchScroll() {
      // 滚动的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        this.scrollnum = scrollTop
        // console.log(scrollTop)
//1160 1840 2520 3200
      // 容器的高度
      // var offsetTop = document.querySelector("#nav").offsetHeight;

      // console.log("scrollTop=>", scrollTop, "  offsetTop=>", offsetTop);

      //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
      if (scrollTop > "120") {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
      if(scrollTop> "600"){
        this.FloatNavShow = true
      } else{
        this.FloatNavShow = false
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.floatnav {
  width: 79px;
  height: 223px;
  /* background-color: red; */
  position: absolute;
  left: -82px;
  top: 50px;
  z-index:2;
  transition: .3s;
  /* border: 1px solid #e4e4e4; */
  .floatnav-item{
    width: 100%;
    height: 22px;
    line-height: 22px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    font-size: 12px;
    text-align: center;
    border-bottom: none;
    color: #666;
    cursor: pointer;
    &:hover{
    background-color: #e5374d;
    color: #fff;

    }
   
  }
  .floatnav-item-active{
    width: 100%;
    height: 22px;
    line-height: 22px;
    background-color: #e5374d;
    border: 1px solid #e7e7e7;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    border-bottom: none;
    color: #fff;
   
  }

  
}

.roots {
  width: 100vw;
  position: relative;
}
/* 固定导航 */
.fix-nav {
  position: fixed;
  top: 0;
  z-index: 999;
}
.cart {
  position: relative;
  right: 10px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.root {
  display: flex;
  justify-content: space-between;
  width: 1190px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid black;
  z-index: 3;
  background-color: #fff;
  position: relative;
  .left-part {
    display: inline-block;
    
    div {
      display: inline-block;
    }
    .nav-top {
      width: 240px;
      background-color: #2f2f2f;
      color: #fff;

      line-height: 36px;
      text-align: center;
    }
    .nav-item {
      div {
        padding-left: 25px;
      }
    }
  }
  .right-part {
    display: inline-block;
    background-color: #bf0000;
    height: 33px;
    line-height: 33px;
    position: relative;
    .reel{
      width: 240px;
      height: 364px;
      background-color: #fff;
      position: absolute;
      right: 0;
      top: 33px;
      box-sizing: border-box;
      border: 4px solid #bf0000;
      border-top: none;
      .reel-item{
        width: 232px;
        height: 30px;
        background-color: #f4f4f4;
        span{
          width: 58px;
          height: 30px;
          display: inline-block;
          box-sizing: border-box;
          color: #666;
          font-size: 12px;
          font-weight: 400;
          text-align: center;

        }
      }
      .reel-detail{
        text-align: center;
        padding: 30px 10px 0px;
        font-size: 12px;
        font-weight: 400;

      }
    }

    .money {
      font-size: 22px;
      font-weight: bolder;
      color: #fcff00;
    }
    .weight {
      font-size: 12px;
      color: #fff;
      margin-right: 60px;
      transition: 0.3s;
    }
    .weight-active {
      font-size: 12px;
      color: #fff;
      margin-right: 104px;
      transition: 0.3s;
    }
  }
}
</style>
