<template>
  <div class="root">
      <Top></Top>
      <Center></Center>
      <Bottom></Bottom>
  </div>
</template>

<script>
import Top from '../components/LoginIn/Top.vue'
import Center from '../components/LoginIn/Center.vue'
import Bottom from '../components/LoginIn/Bottom.vue'
export default {
    components:{
        Top,
        Center,
        Bottom
    }
}
</script>

<style>

</style>