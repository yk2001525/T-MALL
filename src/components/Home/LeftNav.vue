<template>
  <div class="root">
      <span>
      <span v-for="(item,index) in MenuList">
     <left-nav-item>
         <template v-slot:title>
            <i style="margin-right:13px;" class="iconfont red" :class="item.icon"></i><span>{{item.title}}</span>
         </template>
         <template v-slot:item><span style="margin-right:13px;cursor: pointer;" v-for="i in item.item">{{i}}</span></template>
     </left-nav-item>
     </span>
     </span>
  </div>
</template>


<script>
import LeftNavItem from './LeftNavItem.vue'
export default {
    components:{
        LeftNavItem
    },
    data(){
        return{
            MenuList:[
                {
                    "title":"进口食品",
                    "item":["牛奶","零食","饼干","方便面","粮油"],
                    "icon":"icon-jinkoushangpin-copy"
                },
                {
                    "title":"食品饮料",
                    "item":["牛奶","坚果","饼干","方便面","粮油"],
                    "icon":"icon-yinliao-copy"
                },
                {
                    "title":"粮油副食",
                    "item":["油","大米","调料","方便面","火腿肠"],
                    "icon":"icon-liangyoufushi-copy"
                },
                {
                    "title":"美容洗护",
                    "item":["洗发","沐浴","牙膏","洁面","卫生巾"],
                    "icon":"icon-meirongxihu-copy"
                },
                {
                    "title":"家居家电",
                    "item":["毛巾","家电","玻璃杯","衣架","锅"],
                    "icon":"icon-mianxingjiandaotubiao-copy"
                },
                {
                    "title":"家庭清洁",
                    "item":["纸","洗衣","洗洁精","垃圾袋","洁厕"],
                    "icon":"icon-juanzhi-copy"
                },
                {
                    "title":"母婴用品",
                    "item":["纸尿裤","奶粉","湿巾","洗护","玩具"],
                    "icon":"icon-muying-copy"
                },
                {
                    "title":"生活服务",
                    "item":["信用卡还款","转账","充话费","点券"],
                    "icon":"icon-chongzhi-copy"
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .root{
        /* display: inline-block; */
        /* width: 240px; */
        .red{
            /* color: red; */
        }
        
    }
</style>