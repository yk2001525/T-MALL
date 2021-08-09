<template>
  <div class="root">
      <div class="top">
        <div class="top-left">
            全部商品 0
        </div>
        <div class="top-right">
            <div>已选商品（不含运费）</div>
            <div style="font-weight:700;color:#FF4400">0.00</div>
            <div style="width:55px;height:25px;">结算</div>
        </div>
      </div>
      <div class="cart-top">
          <div class="cart-top-left">
            <span><input type="checkbox"> 全选</span>
            <span>商品信息</span>
          </div>
          <div class="cart-top-right">
             <span>单价</span>
             <span>数量</span>
             <span>金额</span>
             <span>操作</span>
          </div>
      </div>
      <div class="shop-label">
        <input type="checkbox">  <img style="position:relative;top:4px;" src="https://img.alicdn.com/tfs/TB18_6NaEuF3KVjSZK9XXbVtXXa-24-20.png" alt="">
          店铺：天猫超市
      </div>
      <div class="shop-detail">
          <div class="shop-detail-top">
              <div>超值换购活动</div> 满88
          </div>
          <div class="shop-item">
              <GoodsItem></GoodsItem>

            <!-- <span style="width:45px;height:82px"> <input type="checkbox"> </span>
            <span style="width:302px;height:110px;" class="goods-detail">
                <img style="width:80px;height:80px;z-index:3" src="https://img.alicdn.com/bao/uploaded/i4/6000000003397/O1CN01NYPjiv1axs8FoX3o3_!!6000000003397-0-picassoopen.jpg_80x80.jpg" alt="">
                <span>益达冰凉薄荷木糖醇无糖口香糖56g约40粒清新口气零食品糖果</span>
                
            </span>
            <span style="width:192px;height:110px;background-color:green"></span>
            <span style="width:120px;height:110px;background-color:blue"></span>
            <span style="width:120px;height:110px;background-color:pink"></span>
            <span style="width:105px;height:110px;background-color:yellow"></span>
            <span style="width:100px;height:110px;background-color:black"></span>
 -->

            
          </div>

      </div>

  </div>
</template>

<script>
import GoodsItem from  './GoodsItem.vue'

export default {
    components:{
        GoodsItem
    }

}
</script>

<style lang="scss" scoped>
    .root{
        width: 990px;
        margin: 0 auto;
        .top{
            width: 990px;
            height: 33px;
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #e2e1e2;
            .top-left{
                width: 124px;
                height: 33px;
                color: #f40;
                font-size: 16px;
                font-weight: 400;
                text-align: center;
                border-bottom   : 2px solid #f40;
            }
            .top-right{
                div{
                    display: inline-block;
                    font-size: 12px;
                    margin-left: 15px;
                    &:last-child{
                        width: 55px;
                        height: 25px;
                        background-color:#aaa;
                        text-align: center;
                        line-height: 25px;
                        color: #fff;
                    }
                }
                
            }   
        }
        .cart-top{
            width: 990px;
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            .cart-top-left{
                width:200px;
                height: 50px;
                 display: flex;
                justify-content: space-around;
                
            }
            .cart-top-right{
                width: 500px;
                height: 50px;
                display: flex;
                justify-content: space-around;
                span{
                    display: inline-block;
                }
            }
        }
        .shop-label{
            width: 990px;
            height: 38px;
            line-height: 38px;
            font-size: 12px;
            color: #3c3c3c;
            padding-left: 20px;
        }
        .shop-detail{
            width: 990px;
            /* height: 200px; */
            border: 1px solid #ccc;
            .shop-detail-top{
                height: 37px;
                border-bottom: 1px solid #e8e8e8;
                line-height: 22px;
                font-size: 12px;
                padding-left: 30px;
                color: #6c6c6c;
                div{
                    display: inline-block;
                    height: 22px;
                    background-color: #e7e7e7;
                    margin-top: 8px;
                    padding: 0 5px 0;

                }
            }
            .shop-item{
                width: 990px;
                height: 130px;
                /* background-color: gray; */
                /* padding-top: 20px; */
                box-sizing: border-box;
                span{
                    /* display: inline-block; */
                    text-align: center;
                }
            }
        }
    }
</style>