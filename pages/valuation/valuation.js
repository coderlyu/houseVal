import request from '../../utils/network.js'
import util from '../../utils/util.js'
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showError: false,
    submitForm: {
      regoin: '', // 地区
      address: '', //详细地址
      acreage: '' // 面积
    },
    isHaveText: false,
    origin: [12, 231, 542342, 62345],
    regionIndex: [0, 0],
    onlyArray: [
      [],
      []
    ],
    region: [],
  },
  bindMultiPickerChange: function(e) {
    console.log(
      this.data.region[e.detail.value[0]],
      this.data.region[e.detail.value[0]].children[e.detail.value[1]]
    );
    this.setData({
      regionIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function(e) {
    var region = this.data.region;
    var regionIndex = this.data.regionIndex;
    var onlyArray = this.data.onlyArray;
    regionIndex[e.detail.column] = e.detail.value;
    var searchColumn = () => {
      for (var i = 0; i < region.length; i++) {
        var arr1 = [];
        var arr2 = [];
        if (i == regionIndex[0]) {
          for (var j = 0; j < region[i].children.length; j++) {
            arr1.push(region[i].children[j].label);
          }
          onlyArray[1] = arr1;
        }
      };
    }
    switch (e.detail.column) {
      case 0:
        regionIndex[1] = 0;
        searchColumn();
        break;
    }
    this.setData({
      onlyArray: onlyArray,
      regionIndex: regionIndex
    });
  },
  handleClick() {
    wx.navigateTo({
      url: '/pages/areadetail/areadetail',
    })
  },
  regoinChange(val1, val2) {
    var regoin = "submitForm.regoin"
    this.setData({
      [regoin]: val1 + "," + val2
    })
  },
  // 面积变化监听
  showErr() {
    this.setData({
      showError: true
    })
  },
  changeAcreage(e) {
    var num = e.detail.value
    // 数据验证
    if (num[0] === '.') {
      this.showErr()
    } else {
      console.log(util.strCharPosition(num, '.'))
      if (util.strCharPosition(num, '.') > 1) {
        this.showErr()
      } else {
        this.setData({
          showError: false
        })
      }
    }
    var acreage = "submitForm.acreage"
    this.setData({
      [acreage]: e.detail.value
    })
    console.log(this.data.submitForm)
  },
  // 提交评估
  assessment() {
    wx.navigateTo({
      url: '/pages/results/results',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var regions = app.globalData.region;
    var index = this.data.regionIndex;
    this.data.region = app.globalData.region
    var data = {
      region: app.globalData.region,
      regionIndex: this.data.regionIndex,
      onlyArray: this.data.onlyArray,
    };
    for (var i = 0; i < data.region.length; i++) {
      data.onlyArray[0].push(data.region[i].label);
    }
    for (var j = 0; j < data.region[data.regionIndex[0]].children.length; j++) {
      data.onlyArray[1].push(data.region[data.regionIndex[0]].children[j].label);
    }
    this.setData(data)
    // 手动修改 submitForm 的值
    console.log(regions[index[0]].value, regions[index[0]].children[index[1]].value)
    var regoin = "submitForm.regoin"
    this.setData({
      [regoin]: regions[index[0]].value + "," + regions[index[0]].children[index[1]].value
    })
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

  }
})