// pages/areadetail/areadetail.js
var app = getApp();
Page({
  data: {
    projectList: [],
    buildingList: [],
    floorList: [],
    houseList: [],
    buildArea: '',
    showfocus: false,
    selectedText: [],
    selectedId: [],
    nowSelected: 0,
  },
  btnSubmit() {
    var pages = getCurrentPages()
    var prevPage = pages[pages.length - 2];
    var address = "submitForm.address";
    var acreage = "submitForm.acreage"
    prevPage.setData({
      [address]: this.data.selectedText.join(""),
      [acreage]: this.data.buildArea
    });
    wx.navigateBack({
      delta: 1
    })
  },
  btnClear() {
    this.setData({
      selectedText: [],
      nowSelected: 0,
      isHaveText: false,
      inputVal: ""
    })
  },
  inputChange(e) {
    if (e.detail.value === "" || e.detail.value === null) {
      this.setData({
        isHaveText: false
      })
    } else {
      this.setData({
        isHaveText: true
      })
    }
    console.log(e)
  },
  selectedTextClick(e) {
    this.setData({
      inputVal: "",
      nowSelected: parseInt(e.target.dataset.selected) - 1
    })
    console.log(e.target.dataset.selected) // 改为自定义的标签上的data数据
    console.log(e)
  },
  // 选中列表的一系列点击事件
  projectClick(e) {
    if (this.data.nowSelected <= 4) {
      var arr = this.data.selectedText
      var arrIndex = this.data.selectedId
      arr[0] = e.currentTarget.dataset.projectname;
      arrIndex[0] = e.currentTarget.dataset.projectid
      this.setData({
        selectedText: arr,
        selectedId: arrIndex
      })
      this.setData({
        nowSelected: 1
      })
    }
  },
  buildingClick(e) {
    if (this.data.nowSelected <= 4) {
      var arr = this.data.selectedText
      var arrIndex = this.data.selectedId
      arr[1] = e.currentTarget.dataset.buildingname;
      arrIndex[1] = e.currentTarget.dataset.buildingid
      this.setData({
        selectedText: arr,
        selectedId: arrIndex
      })
      this.setData({
        nowSelected: 2
      })
    }
  },
  floorClick(e) {
    if (this.data.nowSelected <= 4) {
      var arr = this.data.selectedText
      var arrIndex = this.data.selectedId
      arr[2] = e.currentTarget.dataset.floor + "层";
      arrIndex[2] = e.currentTarget.dataset.floor
      this.setData({
        selectedText: arr,
        selectedId: arrIndex
      })
      this.setData({
        nowSelected: 3
      })
    }
  },
  houseClick(e) {
    if (this.data.nowSelected <= 4) {
      var arr = this.data.selectedText
      var arrIndex = this.data.selectedId
      var buildArea = e.currentTarget.dataset.buildarea
      arr[3] = e.currentTarget.dataset.housename;
      arrIndex[23] = e.currentTarget.dataset.houseid
      this.setData({
        selectedText: arr,
        selectedId: arrIndex,
        buildArea: buildArea
      })
      this.setData({
        nowSelected: 4
      })
    }
    console.log(e.currentTarget.dataset.buildarea)
  },
  // showFocus
  showFocus() {
    this.setData({
      showfocus: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var data = app.globalData
    this.setData({
      projectList: data.projectList,
      buildingList: data.buildingList,
      floorList: data.floorList,
      houseList: data.houseList
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