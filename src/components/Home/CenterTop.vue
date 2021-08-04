<template>
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
    <div class="right-part">
      <span class="money">
        ￥0.00
        <span style="font-size:12px">元</span>
      </span>
      
      <span class="weight">
        0kg
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  justify-content: space-between;
  width: 1190px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid black;
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

    .money{
        font-size: 22px;
        font-weight: bolder;
        color: #fcff00;
    }
    .weight{
        font-size: 12px;
        color: #fff;
        margin-right: 80px;
    }
  }
}
</style>
