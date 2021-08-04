<template>
  <div class="home">
    <Top></Top>
    <Search></Search>
    <center-top></center-top>
    <Center></Center>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '../components/Home/Top.vue'
import Search from '../components/Home/Search.vue'
import CenterTop from '../components/Home/CenterTop.vue'

import Center from '../components/Home/Center.vue'
export default {
  name: 'Home',
  components: {
    Top,
    Search,
    CenterTop,
    Center
  }
}
</script>

<style lang="scss" scoped>
  
</style>
