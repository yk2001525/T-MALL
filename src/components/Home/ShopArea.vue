<template>
  <div class="root">
      <div class="top">
          {{name}}
      </div>
      <div class="body">
          <div :style="{'background-color':color}" class="left">
              <div class="words">
                  <div><span>其他食用油</span></div>
                  <div><span>调味汁/油</span></div>
                  <div><span>调味料</span></div>
                  <div><span>大米</span></div>
                  <div><span>橄榄油</span></div>
                  <div><span>调味酱</span></div>
                  <div><span>烘焙原料</span></div>
                  <div><span>谷物冲饮</span></div>
                  <div><span>咖啡</span></div>
              </div>
          </div>
          <div class="center">
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
              <div class="goods">
                    <img src="https://img.alicdn.com/imgextra/i2/TB1XkStLpXXXXXpXXXXXXXXXXXX_!!0-item_pic.jpg_160x160q90.jpg" alt="">
                    <h3>【原装进口，淡淡果香】</h3>
                    <p>西班牙进口 哥伦初榨橄榄油...</p>
                    <i  class="iconfont icon-gouwuche2"></i>
                    <span>￥118</span>
              </div>
          </div>
          <div class="right">
              <img src="https://img.alicdn.com/tps/i4/TB14fMEIFXXXXc8XFXXzAd2FVXX-150-39.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    name:String,
    color:String
  },
}
</script>

<style lang="scss" scoped>
    .root{
        position: relative;
        width: 1190px;
        margin: 0 auto;
        margin-top: 60px;
        .top{

            color: #2f2f2f;
            font-size: 20px;
            width: 1180px;
            /* float: left; */
            font-weight: 700;
            /* box-sizing: border-box; */
            padding: 5px;
            border-bottom: 2px solid black;
        }
        .body{
            position: relative;
            width: 100%;
            .left{
                position: absolute;
                display: inline-block;
                width: 240px;
                height: 260px;
                background: #b373fb;
                .words{
                    height: 200px;
                    padding: 30px 0 30px 20px;
                    display: flex;
                    flex-wrap: wrap;
                    div{
                        width: 59px;
                        height: 59px;
                        background-color: #fff;
                        border-radius: 50%;
                        margin: 0 10px 10px 0;
                        span{
                            display: inline-block;
                            font-weight: 400;
                            font-size: 12px;
                            color: #2f2f2f;
                            width: 40px;
                            text-align: center;
                            position: relative;
                            left: 9px;
                            top: 18px;


                        }
                    }
                }
            }
            .center{
                position: relative;
                left: 240px;
                display: inline-block;
                width: 800px;
                .goods{
                    display: inline-block;
                    width: 160px;
                    height: 251px;
                    margin: 20px;
                    /* border-right: 1px solid #e7e7e7; */
                    img{
                        margin-bottom: 10px;
                    }
                    h3{
                        font-size: 12px;
                        font-weight: 700;
                    }
                    i{
                        font-size:40px;float:right;color:#e9394e;
                    }
                    p{
                        font-size: 12px;
                        color: #666;
                        margin-top: 7px;
                        margin-bottom: 5px;
                    }
                    span{
                        position: relative;
                        top: 20px;
                        font-size: 18px;
                        font-weight: 700;
                        
                    }
                }
            }
            .right{
                position: absolute;
                left: 1040px;
                top: 0;
            }
        }
    }
</style>