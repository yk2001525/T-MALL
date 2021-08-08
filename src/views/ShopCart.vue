<template>
  <div class="root">
      <Top></Top>
  <Search></Search>
  <Center></Center>
  <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '../components/ShopCart/Top.vue'
import Search from '../components/ShopCart/Search.vue'
import Center from '../components/ShopCart/Center.vue'
import Bottom from '../components/Home/Bottom.vue'
export default {
  components:{
    Top,
    Search,
    Center,
    Bottom
  }
}
</script>

<style>

</style>