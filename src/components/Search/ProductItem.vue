<template>
  <div v-for="(item,index) in searchResult" class="product-item">
    <div class="product-img">
      <img
        :src="item.product_img"
        alt=""
      />
    </div>
    <div class="product-name">
      {{item.product_name}}
    </div>
    <div class="product-sum">
      <span style="color:#999">总销量:</span>
      {{item.product_salenum}}
    </div>
    <div class="product-price">
      ￥ {{item.product_price}}
      <i @click="addshopcart(index)"
        
        style="font-size:36px;position:absolute;right:0;top:-5px;cursor:pointer"
        class="iconfont icon-gouwuche2"
      ></i>
    </div>
  </div>
</template>

<script>
import {post} from '../../network/request'
import { ElMessage } from 'element-plus'

export default {
    data(){
        return{
            
        }
    },
    computed:{
        userInfo(){
            return this.$store.state.userInfo
        }
    },
    props:{
        searchResult:{
            
        }
    },
    methods:{
        addshopcart(index){  
            console.log(this.searchResult[index])
            console.log(this.userInfo)
            let that =this
       
            post('/product/checkshopcart',{
                user_id:this.userInfo.user_id,
                product_id:this.searchResult[index].product_id
            }).then((res)=>{
                // console.log(res)   
                if(res.data.data.length === 0){
                        post('/product/addshopcart',{
                        user_id:that.userInfo.user_id,
                        product_id:that.searchResult[index].product_id
                    }).then((res)=>{
                      ElMessage.success({
                        message:'添加成功',
                        type:'success'
                      })
                    })
                }else{
                    post('/product/addshopcartnum',{
                          user_id:that.userInfo.user_id,
                        product_id:that.searchResult[index].product_id
                    }).then((res)=>{
                        ElMessage.success({
                        message:'添加成功',
                        type:'success'
                      })
                    })
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.product-item {

  margin: 0 3px;
  width: 190px;
  height: 275px;
  box-sizing: border-box;
  padding: 10px 10px 0;
  .product-name {
    font-size: 12px;
    color: #666;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-sum {
    color: #ceaa00;
    height: 20px;
    line-height: 20px;
  }
  .product-price {
    color: #cc0000;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    position: relative;
  }
}
</style>
