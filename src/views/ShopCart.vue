<template>
  <div class="root">
      <Top></Top>
  <Search></Search>
  <Center></Center>
  <Gather></Gather>
  <Bottom imgsrc=true></Bottom>
  </div>
</template>

<script>
import Top from '../components/ShopCart/Top.vue'
import Search from '../components/ShopCart/Search.vue'
import Center from '../components/ShopCart/Center.vue'
import Gather from '../components/ShopCart/Gather.vue'
import Bottom from '../components/Home/Bottom.vue'
export default {
  components:{
    Top,
    Search,
    Center,
    Bottom,
    Gather
  }
}
</script>

<style>

</style>