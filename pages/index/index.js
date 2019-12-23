import WxValidate from '../../utils/WxValidate.js'
import request from '../../utils/network.js'
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      userName: '',
      passWord: ''
    }
  },
  submitLogin: function() {
    var token = "this_is_a_token"
    wx.showLoading({
      title: 'Logining',
      mask: true
    })
    wx.hideLoading()
    if (!this.WxValidate.checkForm(this.data.userInfo)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    if (this.data.userInfo.userName && this.data.userInfo.passWord) {
      app.globalData.token = "this_is_a_token";
      wx.setStorageSync('token', token)
      wx.redirectTo({
        url: '/pages/valuation/valuation',
      })
    }
  },
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  userNameChange: function(e) {
    this.data.userInfo.userName = e.detail.value
  },
  passWordChange: function(e) {
    this.data.userInfo.passWord = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initValidate() //验证规则函数
  },
  /**
   * 表单验证字段
   */
  initValidate() {
    const rules = {
      userName: {
        required: true
      },
      passWord: {
        required: true,
      }
    }
    const messages = {
      userName: {
        required: '请输入登录账号'
      },
      passWord: {
        required: '请输入密码',
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
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
  onShareAppMessage: function(options) {
    return {
      title: '最好用的查询工具，房产估值...',
      path: "/pages/index/index",
    }
  }
})