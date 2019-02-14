const {
  payConfirm,
  orderCreate,
  wepay
} = require('../../utils/pay.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    web_url:'http://47.94.169.143:8800/'
  },
  
  // 生成订单并支付
  payClick: function() {
    const orderInfo = {
      "shopId": 13,
      "userId": 2,
      "deliverAddressId": 1,
      "products": [{
          "quantity": 2,
          "productId": 10
        },
        {
          "quantity": 7,
          "productId": 13
        },
        {
          "quantity": 1,
          "productId": 14
        }
      ]
    }
    orderCreate(orderInfo, res => {
      const params = {
        "openId": 'oLtGG5N9Q6MudlWkU1O4fVavNQGg',
        "payChannel": "WeixinMiniProgramPay",
        "payOrderNo": res.orderNo
      }
      payConfirm(params, res => {
        console.log('res',res)
        wepay(res.data, e => {
        })
      });
    });
  }
})