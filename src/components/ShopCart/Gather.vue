<template>
  <div class="root">
      <div class="left">
          <span>
              <input type="checkbox" name="" id="">
              全选
          </span>
          <span>
              删除
          </span>
          <span>移入收藏夹</span>
      </div>
      <div class="right">
          <span>已选商品</span>
          <span style="font-size:18px;color:#f40;margin-left:5px;font-weight:700">0</span>
          <span style="margin-left:5px">件</span>
          <span>合计（不含运费）：</span>
          <span style="color:#f40;font-size:22px;font-weight:700">0.00</span>
          <span style="font-size:20px;display:inline-block;background-color:#b0b0b0;padding:0 40px;color:#fff">结 算</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .root{
        width: 990px;
        height: 50px;
        line-height: 50px;
        background-color: #e5e5e5;
        margin: 0 auto;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .left{
            font-size: 12px;
            span{
                margin-right: 20px;
            }
        }
        .right{
            font-size: 12px;
            display: flex;
            span{
                margin-left:20px
            }
        }
    }
</style>