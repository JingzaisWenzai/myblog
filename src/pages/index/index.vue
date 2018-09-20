<template>
  <div class="index">
    <banner></banner>
    <article-list class="index-article-list"></article-list>
    <i-footer>
      <i-button type="primary" id="scanQRCode" @click="scanQRCode">调用微信扫一扫</i-button>

      <i-button type="primary" @click="openLocation">获取地理位置</i-button>
    </i-footer>
  </div>
</template>

<script type="text/javascript">
import api from '@/api'
import wx from 'weixin-js-sdk'
import Banner from './banner'
import ArticleList from '@/components/article-list'
export default {
  name: 'index',
  data () {
    return {
      location: {
        latitude: '',
        longitude: '',
        speed: '',
        accuracy: ''
      }
    }
  },
  created () {
    // console.log(wx)
    this.getAccessToken()
  },
  components: { Banner, ArticleList },
  methods: {
    getAccessToken () {
      let self = this
      let url = window.location.href
      api.getAccessToken(url).then(rsp => {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: rsp.data.data.appId, // 必填，公众号的唯一标识
          timestamp: rsp.data.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: rsp.data.data.nonceStr, // 必填，生成签名的随机串
          signature: rsp.data.data.signature, // 必填，签名
          jsApiList: rsp.data.data.jsApiList // 必填，需要使用的JS接口列表
        })
        wx.ready(function () {
          console.log('ready')
          wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: function (res) {
              console.log(res)
              self.location.latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
              self.location.longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
              self.location.speed = res.speed // 速度，以米/每秒计
              self.location.accuracy = res.accuracy // 位置精度
            }
          })
        })
        wx.error(function (res) {
          alert(res)
        })
      })
    },
    scanQRCode () {
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
          console.log(result)
        }
      })
    },
    openLocation () {
      let self = this
      wx.openLocation({
        latitude: self.location.latitude, // 纬度，浮点数，范围为90 ~ -90
        longitude: self.location.longitude, // 经度，浮点数，范围为180 ~ -180。
        name: '', // 位置名
        address: '', // 地址详情说明
        scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
      })
    }
  }
}
</script>
