<template>
  <div class="root">
      <div class="top">
          <div class="top-left">
              <span> <i class="iconfont icon-fangzi01"></i> 天猫首页</span>
              <span>喵，欢迎来到天猫</span>
              <span @click="tologinin">请登录</span>
              <span>免费注册</span>
          </div>
          <div class="top-right">
              <span>我的淘宝</span>
              <span> <i class="iconfont icon-gouwuche"></i> 购物车</span>
              <span>收藏夹</span>
              <span>|</span>
              <span> <i class="iconfont icon-shouji"></i> 手机版</span>
              <span>淘宝网</span>
              <span>商家支持</span>
              <span> <i class="iconfont icon-guidang"></i> 网站导航</span>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        tologinin(){
            this.$router.replace('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
    .iconfont{
        color: #FF0036;
    }
    .root{
        background-color: #f2f2f2;
        height: 26px;
        widows: 100vw;
        border-bottom: 1px solid #e5e5e5;
        .top{
            width: 1190px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            color: #999;
            line-height: 26px;
            font-size: 12px;
            .top-left{
                span{
                    margin-right: 20px;
                }
            }
            .top-right{
                span{
                    margin-left: 20px;
                }
            }
        }
    }
</style>