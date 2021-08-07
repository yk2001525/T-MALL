<template>
  <div class="root">
    <div class="top">
      <div class="top-left">
        <span> <i class="iconfont icon-fangzi01"></i> 天猫首页</span>
        <span v-show="!islogin">喵，欢迎来到天猫</span>
        <span v-show="!islogin" @click="tologinin">请登录</span>
        <span v-show="islogin">Hi,{{userInfo.user_id}}</span>
        <span v-show="!islogin">免费注册</span>
        <span @click="logout" v-show="islogin">退出</span>
      </div>
      <div class="top-right">
        <span
        :style="besaled ? 'background-color:#fff' : ''"
          @mouseenter="besaled = true"
          @mouseleave="besaled = false"
          style="padding:0 5px 0;position:relative"
          ><div v-show="besaled" style="width:96px" class="favorite">
            <div>已买到的宝贝</div>
            <div>已卖出的宝贝</div>
          </div>
          我的淘宝</span
        >
        <span> <i class="iconfont icon-gouwuche"></i> 购物车</span>
        <span
          :style="favorite ? 'background-color:#fff' : ''"
          @mouseenter="favorite = true"
          @mouseleave="favorite = false"
          style="padding:0 5px 0;position:relative"
          ><div v-show="favorite" class="favorite">
            <div>收藏的宝贝</div>
            <div>收藏的店铺</div>
          </div>
          收藏夹</span
        >
        <span>|</span>
        <span
          @mouseenter="phone = true"
          @mouseleave="phone = false"
          style="position:relative"
        >
          <div v-show="phone" class="phone"></div>
          <i class="iconfont icon-shouji"></i> 手机版</span
        >
        <span>淘宝网</span>
        <span
          :style="bussiness ? 'background-color:#fff' : ''"
          @mouseenter="bussiness = true"
          @mouseleave="bussiness = false"
          style="position:relative;padding:0 5px 0"
          >商家支持
          <!-- 商家支持 -->
          <div style="cursor:auto" v-show="bussiness" class="bussiness-support">
            <div class="support-title">商家:</div>
            <div class="support-detail">
              <span style="height:22px">商家中心</span>
              <span>商家中心</span>
              <span>商家中心</span>
              <span>商家中心</span>
              <span>商家中心</span>
              <span>商家中心</span>
              <span>商家中心</span>
              <span>商家中心</span>
            </div>
            <div style="border-top:1px dotted black" class="support-title">
              帮助:
            </div>
            <div class="support-detail">
              商家帮助大厅
            </div>
            <div
              style="border-bottom:1px dotted black;width:120px"
              class="support-detail"
            >
              问商友
            </div>
          </div>
        </span>
        <span
          :style="navshow ? 'background-color:#fff' : ''"
          style="height:27px;padding:0 5px 0"
          @mouseenter="navshow = true"
          @mouseleave="navshow = false"
        >
          <i class="iconfont icon-guidang"></i> 网站导航</span
        >
      </div>

      <!-- 网站导航框 -->
      <div
        @mouseenter="navshow = true"
        @mouseleave="navshow = false"
        v-show="navshow"
        class="net-nav"
      >
        <div class="big-part">
          <div class="nav-title">
            {{ List1.title }}
          </div>
          <div class="nav-detail">
            <span v-for="it in List1.item">{{ it }}</span>
          </div>
        </div>
        <div class="big-part">
          <div style="color:#2263d4" class="nav-title">
            {{ List2.title }}
          </div>
          <div class="nav-detail">
            <span v-for="it in List2.item">{{ it }}</span>
          </div>
        </div>
        <div class="small-part">
          <div class="nav-title">
            {{ List3.title }}
          </div>
          <div class="nav-detail">
            <span v-for="it in List3.item">{{ it }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    var token = localStorage.getItem('accessToken')
    var userinfo = JSON.parse(localStorage.getItem('userInfo')) 
    if(token){
      this.islogin = true
      this.userInfo = userinfo
      this.$store.commit('saveLogin',true)
      this.$store.commit('saveUserInfo',userinfo)
    }
  },
  data() {
    return {
      userInfo:[],
      islogin:false,
      navshow: false,
      bussiness: false,
      phone: false,
      favorite: false,
      besaled: false,
      List1: {
        title: "热点推荐 Hot",
        item: [
          "天猫超市",
          "喵鲜生",
          "科技新品",
          "女装新品",
          "酷玩街",
          "内衣新品",
          "试美妆",
          "运动新品",
          "时尚先生",
          "精明妈咪",
          "吃乐会",
          "企业采购",
          "会员积分",
          "天猫国际",
          "品质频道",
        ],
      },
      List2: {
        title: "行业市场 Market",
        item: [
          "美妆",
          "电器",
          "女装",
          "男装",
          "女鞋",
          "男鞋",
          "内衣",
          "箱包",
          "运动",
          "母婴",
          "家装",
          "医药",
          "食品",
          "配饰",
          "汽车",
        ],
      },
      List3: {
        title: "服务中心 Help",
        item: ["帮助中心", "品质保障", "特色服务", "7天退换货"],
      },
    };
  },
  methods: {
    tologinin() {
      this.$router.replace("/login");
    },
    // 注销
    logout(){
      console.log('注销')
      localStorage.clear()
      this.$store.commit('saveLogin',false)
      this.$store.commit('saveUserInfo',[])
      this.$router.replace("/login");
    }
  },
};
</script>

<style lang="scss" scoped>
.favorite {
  position: absolute;
  width: 84px;
  height: 57px;
  background-color: #fff;
  top: 27px;
  z-index: 10;
  padding: 8px 10px;
  box-sizing: border-box;
  cursor: auto;
  color: #666;
  border: 1px solid #e5e5e5;
  border-top: none;
  left: -1px;
  div {
    height: 20px;
  }
}
.phone {
  position: absolute;
  width: 174px;
  height: 223px;
  z-index: 10;
  top: 27px;
  cursor: auto;
  background: url("../../assets/nav-qrcode.png") no-repeat;
  background-size: 175px;
  border: 1px solid #e5e5e5;
  border-top: none;
  right: -60px;
}
.cursor {
  cursor: pointer;
}
.bussiness-support {
  width: 142px;
  height: 230px;
  background-color: #fff;
  position: absolute;
  top: 27px;
  right: 0px;
  z-index: 10;
  border: 1px solid #e5e5e5;
  border-top: none;
  padding: 8px 10px;
  box-sizing: border-box;
  font-size: 12px;
  color: #666;
  overflow: hidden;
  .support-title {
    font-weight: 700;
  }
  .support-detail {
    width: 144px;
    span {
      margin-left: 0 !important;
      margin-right: 20px;
      height: 18px !important;
      line-height: 18px !important;
    }
  }
}
.iconfont {
  color: #ff0036;
}
.root {
  background-color: #f2f2f2;
  position: relative;
  height: 26px;
  widows: 100vw;
  border-bottom: 1px solid #e5e5e5;
  .top {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: #999;
    line-height: 26px;
    font-size: 12px;
    .top-left {
      span {
        cursor: pointer;
        display: inline-block;
        margin-right: 20px;
      }
    }
    .top-right {
      span {
        display: inline-block;
        height: 27px;
        line-height: 27px;
        margin-left: 20px;
        cursor: pointer;
      }
    }

    .net-nav {
      position: absolute;
      width: 1160px;
      height: 110px;
      background-color: #fff;
      z-index: 10;
      top: 28px;
      border: 1px solid #e5e5e5;
      border-top: none;
      padding-top: 25px;
      padding-bottom: 25px;
      padding-left: 30px;

      .big-part {
        display: inline-block;
        .nav-title {
          width: 455px;
          font-size: 16px;
          color: #f56a00;
          padding-bottom: 8px;
        }
        .nav-detail {
          width: 490px;
          display: flex;
          flex-wrap: wrap;
          color: #666;

          span {
            width: 95px;
          }
        }
      }
      .small-part {
        display: inline-block;
        width: 170px;
        height: 110px;
        .nav-title {
          width: 186px;
          height: 30px;
          font-size: 16px;
          color: #666666;
          padding-bottom: 8px;
        }
        .nav-detail {
          width: 186px;
          display: flex;
          flex-wrap: wrap;
          color: #666;
          span {
            width: 93px;
          }
        }
      }
    }
  }
}
</style>
