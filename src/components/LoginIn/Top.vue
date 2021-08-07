<template>
  <div class="root">
      <img @click="toindex" src="https://img.alicdn.com/tfs/TB1_Gn8RXXXXXXqaFXXXXXXXXXX-380-54.png" alt="">
  </div>
</template>

<script>
export default {
    methods:{
        toindex(){
            this.$router.replace('/')
        }
    }
}
</script>

<style lang="scss" scoped>
    .root{
        width: 1190px;
        height: 44px;
        padding: 22px 0;
        margin: 0 auto;
        img{
            width: 190px;
            margin-top: 8px;
            cursor: pointer;
        }
        
    }
</style>