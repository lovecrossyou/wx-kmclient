const {
  payConfirm,
  orderCreate,
  wepay
} = require('../../utils/pay.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    // web_url:'http://kuaimayoupin.com:8800/'
    web_url:'http://h52.tuexing.com'
    // web_url: 'http://127.0.0.1:8888/placeorder'
  },

  // 生成订单并支付
  payClick: function(params) {
    orderCreate(params, confirmRes => {

      let params2 = {
        openId: "oLtGG5N9Q6MudlWkU1O4fVavNQGg",
        payChannel: "WeixinMiniProgramPay",
        payOrderNo: confirmRes.orderNo
      }
      payConfirm(params2, res => {
        console.log('res', res)
        wepay(res.data, e => {})
      });
    });
  },
  receivePayMessageH: function (e) {
    let payInfo = e.detail.data[0];
    this.payClick(payInfo)
  },
  
})