<template>
  <div class="area">
    <div v-for="(item,index) in cityList" class="area-detail">
      <div class="title">{{item.title}}</div>
      <div class="name">
        <div class="name-deep">
          <div style="cursor:pointer" @click="updatecity(index,k)" v-for="(city,k) in item.list">{{city}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cityList: {
      type: Array,
      default: [],
    },
  },
  methods:{
      updatecity(index,k){
          let cityname
          console.log(this.cityList[index].list[k])
          cityname = this.cityList[index].list[k]
          this.$emit('updatecity',cityname)
      }
  }
};
</script>

<style lang="scss" scoped>
.area {
  margin: 10px 0 10px;
  position: relative;
  left: -12px;
  .area-detail {
      margin: 15px 0 15px ;
    .title {
      display: inline-block;
      font-size: 14px;
      color: #dd2727;
      text-align: center;
      width: 60px;
    }
    .name {
      display: inline-block;
      font-size: 14px;
      color: #333;
      width: 408px;
      .name-deep {
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
        div {
          width: 68px;
          margin-bottom: 12px;
          height: 21px;
          line-height: 21px;
        }
        div:hover{
            color: #e22a40;
        }
      }
    }
  }
}
</style>
