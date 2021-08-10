<template>
  <div class="home">
    <Top></Top>
    <Search></Search>
    <center-top></center-top>
    <Center></Center>
    <shop-area color="#a66bf4" name="进口酒饮粮油"></shop-area>
    <shop-area color="#76c9fc" name="酒水饮料"></shop-area>
    <shop-area color="#ffb22b" name="米面杂粮"></shop-area>
    <shop-area color="#f3885a" name="油品调味"></shop-area>
    <shop-area color ="#fe8694" name="美容护肤"></shop-area>
    <nav-bottom></nav-bottom>
    <Bottom></Bottom>

  </div>
</template>

<script>
import {get} from '../network/request'
// @ is an alias to /src
import Top from '../components/Home/Top.vue'
import Search from '../components/Home/Search.vue'
import CenterTop from '../components/Home/CenterTop.vue'
import Center from '../components/Home/Center.vue'
import ShopArea from '../components/Home/ShopArea.vue'
import NavBottom from '../components/Home/NavBottom.vue'
import Bottom from '../components/Home/Bottom.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Search,
    CenterTop,
    Center,
    ShopArea,
    NavBottom,
    Bottom,

  },
  created(){
    let that =this
    var token = localStorage.getItem('accessToken')
    if(token === null){
      console.log('未登录')
    }else{
      console.log('已登录')
      get('/users').then((res)=>{
          const {userId,userPassword} = res.data
          that.$store.commit('saveUserInfo',{
            user_id:userId,
            user_password:userPassword
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
