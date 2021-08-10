<template>
  <div class="root">
      <Top></Top>
      <Search></Search>
      <Center></Center>
  </div>
</template>

<script>
import Top from '../components/ShopCart/Top.vue'
import Search from '../components/Search/Search.vue'
import Center from '../components/Search/Center.vue'
export default {
    components:{
        Top,
        Search,
        Center
    }
    
}
</script>

<style>

</style>