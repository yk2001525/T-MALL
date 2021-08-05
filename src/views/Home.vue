<template>
  <div class="home">
    <Top></Top>
    <Search></Search>
    <center-top></center-top>
    <Center></Center>
    <shop-area></shop-area>
    <shop-area></shop-area>
    <shop-area></shop-area>
    <shop-area></shop-area>
    <shop-area></shop-area>
    <nav-bottom></nav-bottom>
    <Bottom></Bottom>
  </div>
</template>

<script>
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
    Bottom
  }
}
</script>

<style lang="scss" scoped>
  
</style>
