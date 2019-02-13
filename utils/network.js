const BASE_URL = 'http://47.94.209.108:7002/';

var app = getApp();


// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
const requestLoading = (url, params, message = ' ', success, fail)=> {

  //未登录accessInfo
  const TOKEN = app.globalData.accessToken;
  let accessToken = '' ;
  if (TOKEN!=null){
    accessToken = TOKEN ;
  }
  if (message != "") {
    wx.showLoading({
      title: message,
      mask: true
    })
  }
  wx.request({
      url: BASE_URL + url,
      data: params,
      header: {
        'Content-Type': 'application/json',
        'accessToken': accessToken
      },
      method: 'post',
      success: function(res) {
        if (message != "") {
          wx.hideLoading()
        }

        console.log('success ',res);
        if (res.statusCode == 200) {
          success(res.data)
        } else {
          wx.showToast({
            title: res.data.message,
          })
          fail && fail(res)
        }
    },
    fail: function(res) {
      if (message != "") {
        wx.hideLoading()
      }
      fail && fail(res);
    },
    complete: function(res) {}
  })
}

const request = (url, params, success, fail)=> {
  requestLoading(url, params, "", success, fail)
}

module.exports = {
  request: request,
  BASE_URL: BASE_URL
}