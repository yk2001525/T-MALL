<template>
  <div class="root">
      <div class="top">
          <div class="left">
        <span style="cursor:pointer" @click="toindex">天猫首页</span>
          <span>Hi,你好</span>
          <span>退出</span>
          </div>
          <div class="right">
              <span>我的淘宝</span>
              <span>我关注的品牌</span>
              <span>购物车</span>
              <span>收藏夹</span>
              <span>|</span>
              <span>淘宝网</span>
              <span>企业购</span>
              <span>商家支持</span>


          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        toindex(){
            this.$router.replace('/')
        }
    }
}
</script>

<style lang="scss" scoped>
    .root{
        width: 100vw;
        height: 26px;
        background-color: #f2f2f2;
        .top{
            width: 990px;
            height: 26px;
            margin: 0 auto;
            font-size: 12px;
            color: #999;
            display: flex;
            justify-content: space-between;
            line-height: 26px;
            .left{
                span{
                    display: inline-block;
                margin-right: 20px;
                    
                }
            }
            .right{
                span{
                    display: inline-block;
                    margin-left: 20px;
                }
            }

        }
    }
</style>