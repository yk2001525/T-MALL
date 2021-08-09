<template>
  <div class="root">
    <div class="top">
      <img v-if="!imgsrc"
        src="https://gw.alicdn.com/tfs/TB1wr5SmUY1gK0jSZFMXXaWcVXa-336-120.png"
        alt=""
      />
      <img v-else src="	https://img.alicdn.com/tps/i2/TB1ijJ1HFXXXXayXVXXFq5g_FXX-112-40.png" alt="">
      <div v-for="item in List" class="top-item">
        <span class="top-item-title">{{ item.title }}</span>
        <div class="top-item-detail">
          <div v-for="i in item.item">
            {{ i }}
          </div>
        </div>
      </div>
      <div class="qrcode">
        <div class="qrcode-title">随时随地逛</div>
        <div class="img">
          <img
            src="https://gtms03.alicdn.com/tps/i3/T1zuSAFRJbXXaSJVsE-115-115.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="copyright">
        <img class="tianmao" src="../../assets/tianmao.png" alt="" />

        <div class="copyright-top">
          关于天猫 商家服务大厅 开放平台 诚聘英才 联系我们 网站合作 法律声明
          隐私权政策 知识产权 廉正举报 不当竞争举报
        </div>
        <div class="copyright-top">
          阿里巴巴集团| 淘宝网 | 天猫 | 聚划算 | 全球速卖通 |
          阿里巴巴国际交易市场| 1688 | 阿里妈妈 | 飞猪 | 阿里云计算 | AliOS |
          阿里通信 | 万网 | 高德 | UC | 友盟 | 虾米 | 钉钉 | 支付宝 | 阿里安全
        </div>
        <div class="copyright-middle">
          <span>增值电信业务经营许可证：浙B2-20110446</span>
          <span> 市场名称登记证：工商网市字3301004119号</span>
          <span>
            出版物网络交易平台服务经营备案证： 新出发浙备字第2019002号</span
          >
        </div>
        <div class="copyright-middle">
          <span
            >互联网违法和不良信息举报电话：0571-81683755
            blxxjb@alibaba-inc.com</span
          >
          <span>互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005</span>
          <span>浙公网安备 33010002000120号</span>
        </div>
        <div class="copyright-middle">
          <span
            >医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span
          >
        </div>
        <div class="copyright-middle">
          <span>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span>
          <span>12318举报</span>
          <span>浙B2-20110446-1</span>
        </div>
        <div class="copyright-bottom">
          © 2003-现在 TMALL.COM 版权所有
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    imgsrc:{type:Boolean,
    default:false}
  },
  data() {
    return {
      List: [
        {
          title: "购物指南",
          item: [
            "购物流程",
            "配送时效说明",
            "配送区域及费用",
            "购买生鲜须知",
            "发票流程",
            "商品限购说明",
          ],
        },
        {
          title: "购物指南",
          item: [
            "购物流程",
            "配送时效说明",
            "配送区域及费用",
            "购买生鲜须知",
            "发票流程",
            "商品限购说明",
          ],
        },
        {
          title: "购物指南",
          item: [
            "购物流程",
            "配送时效说明",
            "配送区域及费用",
            "购买生鲜须知",
            "发票流程",
            "商品限购说明",
          ],
        },
        {
          title: "购物指南",
          item: [
            "购物流程",
            "配送时效说明",
            "配送区域及费用",
            "购买生鲜须知",
            "发票流程",
            "商品限购说明",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  margin-top: 10px;
  width: 100vw;
  border-top: 2px solid #ededed;
  .top {
    display: flex;
    width: 1190px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 20px;
    img {
      width: 112px;
      height: 40px;
    }
    .top-item {
      display: inline-block;
      padding-left: 120px;

      .top-item-title {
        color: #646464;
        font-size: 16px;
        font-weight: 700;
      }
      .top-item-detail {
        margin-top: 15px;
        div {
          font-size: 12px;
          color: #8b8b8b;
          height: 20px;
          line-height: 20px;
        }
      }
    }
    .qrcode {
      display: inline-block;
      margin-left: 100px;
      .qrcode-title {
        color: #646464;
        font-size: 16px;
        font-weight: 700;
        height: 30px;
        line-height: 1.231;
      }
      .img {
        img {
          width: 105px;
          height: 105px;
        }
      }
    }
  }

  .bottom {
    position: relative;
    width: 100%;
    height: 175px;
    background-color: #c40000;
    border-top: 2px solid #ff0036;
    margin-top: 40px;

    .copyright {
      position: relative;
      width: 1190px;
      margin: 0 auto;
      .tianmao {
        width: 68px;
        position: absolute;
        top: -25px;
      }
      .copyright-top {
        color: #fff;
        line-height: 25px;
        padding: 5px 0;
        font-size: 12px;
      }
      .copyright-middle {
        font-size: 12px;
        color: #a4a4a4;
        line-height: 20px;
        span {
          margin-right: 65px;
        }
      }
      .copyright-bottom {
        font-size: 12px;
        color: #686868;
      }
    }
  }
}
</style>
