<template>
      <div class="position">
      <div @mouseenter="cityshow=true"  @mouseleave="cityshow=false" :style="{color:color}" class="detail">
        <div v-show="cityshow" class="cityselect">
          <div style="position:absolute;width:72px;background-color:#fff;top:-2px;height:10px"></div>
          <div class="top">
            热门城市:
            <div class="top-detail">
              <span>北京</span><span>上海</span><span>杭州</span
              ><span>广州</span><span>天津</span><span>苏州</span>
              <span>成都</span>
              <span>深圳</span>
              <span>南京</span>
              <span>重庆</span>
              <span>南昌</span>
              <span>武汉</span>
            </div>
            <div class="select-area">
                <div @mouseenter="activeIndex = 0" :class="activeIndex == 0 ?  'select-active':''">ABCDE  <div class="g"></div></div>
                <div  @mouseenter="activeIndex = 1" :class="activeIndex == 1 ?  'select-active':''" >FGHJ<div class="g"></div></div>
                <div  @mouseenter="activeIndex = 2" :class="activeIndex == 2 ?  'select-active':''" >KLMNP<div class="g"></div></div>
                <div  @mouseenter="activeIndex = 3" :class="activeIndex == 3 ?  'select-active':''" >QRSTW<div class="g"></div></div>
                <div   @mouseenter="activeIndex = 4" :class="activeIndex == 4 ?  'select-active':''" >XYZ<div class="g"></div></div>
            </div>
            <div style="height:20px;width:2px"></div>
            <Area @updatecity="updatecity" v-show="activeIndex == 0" :cityList="cityList1"></Area>
            <Area @updatecity="updatecity" v-show="activeIndex == 1" :cityList="cityList2"></Area>
            <Area @updatecity="updatecity" v-show="activeIndex == 2" :cityList="cityList3"></Area>
            <Area @updatecity="updatecity" v-show="activeIndex == 3" :cityList="cityList4"></Area>
            <Area @updatecity="updatecity" v-show="activeIndex == 4" :cityList="cityList5"></Area>

    

          </div>
          <div class="center"></div>
        </div>
        <span style="cursor:pointer">
          {{selectedcity}}<i class="iconfont icon-xiasanjiao"></i>
        </span>
        
      </div>
    </div>
</template>

<script>
import Area from './Area.vue'
export default {
  components:{
    Area
  },
    props:{
        color:{
            type:String,
            default:'#30b30e'
        }
    },
    data(){
        return {
            cityshow:false,
            activeIndex:0,
            selectedcity:'郑州',
            cityList1:[
              {
                title:'A',
                list:['阿坝','安顺','安庆','阿拉尔','鞍山','阿克苏','阿拉善','阿勒泰','安康','阿里','安阳']
              },
              {
                title:'B',
                list:['百色','巴音郭楞','滨州','保定','北屯','蚌埠','白银','巴中','白沙','保亭','包头','毕节','白山','宝鸡','亳州','保山','本溪','巴彦淖尔','北京','博尔塔拉','白城','北海']
              },
              {
                title:'C',
                list:['常德','楚雄','常州','昌吉','长沙','长治','昌江','澄迈','重庆','朝阳','崇左','长春','承德','滁州','沧州','赤峰','池州','昌都','郴州','成都','潮州']
              },
              {
                title:'D',
                list:['大连','东营','德宏','定安','东方','儋州','东莞','大兴安岭','迪庆','德州','大理','丹东','大庆','德阳','达州','定西','大同']
              },
              {
                title:'E',
                list:['恩施','鄂尔多斯','鄂州']
              }
            ],
                cityList2:[
              {
                title:'F',
                list:['福州','抚顺','阜新','抚州','防城港','佛山','阜阳']
              },
              {
                title:'G',
                list:['广元','甘南','果洛','桂林','固原','贵阳','广州','贵港','广安','甘孜','赣州']
              },
              {
                title:'H',
                list:['海北','葫芦岛','衡水','海西','呼和浩特','菏泽','怀化','黄南','黄冈','淮南','汉中','海东','呼伦贝尔','红河','淮安','海南藏族','河池','衡阳','鹤壁','黄石','邯郸','海口','淮北','惠州','鹤岗','黄山','和田','贺州','杭州','合肥','河源','哈尔滨','黑河','哈密','湖州']
              },
              {
                title:'J',
                list:['金昌','焦作','锦州','吉安','嘉兴','景德镇','揭阳','九江','鸡西','酒泉','晋城','佳木斯','荆州','济南','金华','吉林','晋中','嘉峪关','济源','荆门','江门','济宁']
              }
            ],
                 cityList3:[
              {
                title:'K',
                list:['福州','抚顺','阜新','抚州','防城港','佛山','阜阳']
              },
              {
                title:'L',
                list:['广元','甘南','果洛','桂林','固原','贵阳','广州','贵港','广安','甘孜','赣州']
              },
              {
                title:'M',
                list:['常德','楚雄','常州','昌吉','长沙','长治','昌江','澄迈','重庆','朝阳','崇左','长春','承德','滁州','沧州','赤峰','池州','昌都','郴州','成都','潮州']

              },
              {
                title:'N',
                list:['金昌','焦作','锦州','吉安','酒泉','晋城','佳木斯','荆州','济南','金华','吉林','晋中','嘉峪关','济源','荆门','江门','济宁']
              },
              {
                title:'P',
                list:['金昌','焦作','锦州','吉安','嘉兴','景德镇','揭阳','九江','鸡西','酒泉','晋城','佳木斯','荆州','济南','金华','吉林','晋中','嘉峪关','济源','荆门','江门','济宁']
              }
            ],
     cityList4:[
              {
                title:'Q',
                list:['阿坝','安顺','安庆','阿拉尔','鞍山','阿克苏','阿拉善','阿勒泰','安康','阿里','安阳']
              },
              {
                title:'R',
                list:['百色','巴音郭楞','滨州','保定','北屯','蚌埠','白银','巴中','白沙','保亭','包头','毕节','白山','宝鸡','亳州','保山','本溪','巴彦淖尔','北京','博尔塔拉','白城','北海']
              },
              {
                title:'S',
                list:['常德','楚雄','常州','昌吉','长沙','长治','昌江','澄迈','重庆','朝阳','崇左','长春','承德','滁州','沧州','赤峰','池州','昌都','郴州','成都','潮州']
              },
              {
                title:'T',
                list:['大连','东营','德宏','定安','东方','儋州','东莞','大兴安岭','迪庆','德州','大理','丹东','大庆','德阳','达州','定西','大同']
              },
              {
                title:'W',
                list:['恩施','鄂尔多斯','鄂州']
              }
            ],
                 cityList5:[
              {
                title:'X',
                list:['福州','抚顺','阜新','抚州','防城港','佛山','阜阳']
              },
              {
                title:'Y',
                list:['广元','甘南','果洛','桂林','固原','贵阳','广州','贵港','广安','甘孜','赣州']
              },
              {
                title:'Z',
                list:['海北','葫芦岛','衡水','海西','呼和浩特','菏泽','怀化','黄南','黄冈','淮南','汉中','海东','呼伦贝尔','红河','淮安','海南藏族','河池','衡阳','鹤壁','黄石','邯郸','海口','淮北','惠州','鹤岗','黄山','和田','贺州','杭州','合肥','河源','哈尔滨','黑河','哈密','湖州']
              }
            ]
            
        }
    },
    methods:{
      updatecity(name){
        this.selectedcity = name
      }
    }

}
</script>

<style lang="scss" scoped>
 .position {
    display: inline-block;
    margin-top: 10px;
    .detail:hover{
      /* border-bottom: 0; */
    }
    .detail {
      border: 1px solid #e5e5e5;
      font-size: 16px;
      font-weight: 400;
      color: #30b30e;
      padding: 8px 12px;
      border-radius: 3px;
      position: relative;
      box-sizing: border-box;
      .cityselect {
        width: 482px;
        height: 795px;
        background-color: #fff;
        position: absolute;
        z-index: 11;
        top: 32px;
        left: -1px;
        border: 1px solid #e5e5e5;
        .top {
          height: 107px;
          padding-top: 20px;
          width: 480px;
          font-size: 14px;
          color: #999;
          padding-left: 12px;
          .top-detail {
            height: 66px;
            margin-top: 20px;
            width: 480px;
            span {
              font-size: 14px;
              padding-left: 25px;
              margin-bottom: 12px;
              color: #333;
              width: 48px;
              display: inline-block;
            }
          }
          .select-area{
            margin-top: 25px;
            display: flex;
            font-size: 14px;
            color: black;
            justify-content: space-around;
            border-bottom: 1px solid rgb(238, 238, 238);
            position: relative;
            left: -12px;
              box-sizing: border-box;

            div{
              height: 43px;
              line-height: 43px;
              box-sizing: border-box;
              padding: 0 10px 0;
              width: 70px;
              text-align: center;
            }
            .select-active{
              box-sizing: border-box;
              border: 1px solid #e5e5e5;
              border-bottom: 1px solid #fff;
              position: relative;
              cursor: pointer;
              .g{
                position: absolute;
                width: 68px;
                background-color: #fff;
                height: 10px;
                left: 0px;
                top: 40px;

              }
            }
          }
        }
      }
    }
  }
</style>