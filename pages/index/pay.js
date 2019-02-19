// pages/index/pay.js
var event = require('../../utils/event.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // web_url:'http://kuaimayoupin.com:8800/'
    // web_url:'http://h52.tuexing.com'
    web_url: '',
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    console.log("weburl", this.data.web_url)
    event.on('DataChanged', this, function(data) {
      this.setData({
        web_url: data
      });
    })
  },
  onUnload: function() {
    event.remove('DataChanged', this);
  },
  afterPaySuccess: function(orderId) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  receivePayMessage: function(e) {
    console.log('EventHandler qrcodeTips', e);
  },
})