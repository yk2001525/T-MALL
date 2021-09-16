<template>
  <div style="position:relative" class="root">
    <div class="logo">
      <img
        src="https://gw.alicdn.com/tfs/TB1OpaTmUz1gK0jSZLeXXb9kVXa-666-243.png"
        alt=""
      />
    </div>
    <div style="width:75px;height:1px"></div>
    <span style="position:absolute;left:240px">
    <Position color='false'></Position>
    </span>
    <div class="search">
      <input style="transition:.3s" :style="warnning?'background-color:rgb(253,189,120)':''" @keyup.enter="tosearch" v-model="keyword" placeholder="搜索天猫超市商品" type="text" />
      <div @click="tosearch" style="display:inline-block;cursor:pointer">搜索</div>
    </div>
    <div class="mark">
      <span
        ><i style="color:#30b30e;font-size:14px" class="iconfont icon-quan1"></i
        >一站式购齐</span
      >
      <span
        ><i style="color:#30b30e" class="iconfont icon-man88yuanbaoyou"></i
        >满88包邮</span
      >
      <span>
        <img
          src="https://img.alicdn.com/tps/i1/TB1L25iFFXXXXXcbpXXgBrbGpXX-36-36.png"
          alt=""
        />
      </span>
      <span>
        <img
          src="https://img.alicdn.com/tfs/TB1fc6SdKuSBuNjy1XcXXcYjFXa-36-36.png"
          alt=""
        />
      </span>
    </div>
  </div>
</template>

<script>
import {post} from '../../network/request'
import Position from '../Position.vue'
export default {
    components:{
      Position
    },
    data(){
        return{
          keyword:'',
          warnning:false
        }
    },
    methods:{
      tosearch(){
        if(this.keyword != ''){
       let that = this
            this.$store.commit('saveSearchKeyword',this.keyword)
            post('/product/search',{
                keyword:this.keyword
            }).then((res)=>{
                that.$store.commit('saveSearchResult',res.data.data)
        this.$router.replace('/search')

            })
        }else{
          this.warnning = true
          setTimeout(() => {
            this.warnning = false
          }, 300);
        }
      
      }
    }
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  align-items: center;
  width: 1190px;
  height: 88px;
  margin: 0 auto;
  margin-bottom: 5px;
  .logo {
    display: inline-block;
    padding-top: 16px;
    width: 240px;
    height: 72px;
    img {
      width: 130px;
      padding-left: 40px;
      padding-top: 10px;
    }
  }
  .search {
    width: 540px;
    margin-left: 77px;
    input {
      width: 447px;
      height: 36px;
      box-sizing: border-box;
      padding: 5px 3px 5px 5px;
      border: 3px solid #30b30e;
    }
    div {
      width: 90px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background-color: #30b30e;
      position: relative;
      top: 2px;
      color: #fff;
    }
  }
  .mark {
    font-size: 12px;
    line-height: 38px;
    font-weight: bolder;
    color: #666;
    span {
      margin-left: 10px;
    }
  }
}
</style>
