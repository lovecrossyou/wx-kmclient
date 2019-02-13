const network = require('./network.js')

const wepay = (res,cb)=>{
  const {
    wexinSpec
  } = res;
  var params = {
    timeStamp: wexinSpec.timestamp,
    nonceStr: wexinSpec.noncestr,
    package: "prepay_id=" + wexinSpec.prepay_id,
    signType: 'MD5',
    paySign: wexinSpec.sign,
    complete: (e)=> {
      const { errMsg} = e ;
      if (errMsg === 'requestPayment:fail cancel'){
        wx.showToast({
          title: '取消支付',
        })
      }
      else{
        cb(e)
      }
      console.log('支付结果 :',e);
    }
  }
  wx.requestPayment(params)
}

// 店铺订单 确认支付
const orderCreate = (params,cb)=>{
  network.request('client/shopOrder/create', params, (res) => {
    cb(res);
  }, err => {
  })
}

// 创建店铺订单
const payConfirm = (params,cb)=>{
  network.request('client/keplerPay/confirm', params, (res) => {
    cb(res);
  },err=>{

  })
}

module.exports = {
  payConfirm,
  wepay,
  orderCreate
}

