//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    wx.showLoading({
      title: 'Logining',
      mask: true
    })
    var token = wx.getStorageSync('token')
    console.log(token)
    if (token && token.length != 0) {
      wx.hideLoading()
      wx.redirectTo({
        url: './pages/valuation/valuation',
      })
    } else {
      wx.hideLoading()
      wx.showToast({
        title: '登录失效',
        icon: 'loading',
        duration: 1000
      })
      wx.redirectTo({
        url: '/pages/index/index',
      })
    }
  },
  globalData: {
    token: wx.getStorageSync("token") || '',
    userInfo: null,
    baseUrl: 'localhost:8080/index',
    region: [{
        value: '110000',
        label: '柯桥区',
        level: 1,
        children: [{
          value: '110001',
          label: '柯桥街道',
          level: 2
        }, {
          value: '110002',
          label: '柯岩',
          level: 2
        }, {
          value: '110003',
          label: '东升',
          level: 2
        }]
      },
      {
        value: '500000',
        label: '越城区',
        level: 1,
        children: [{
          value: '500001',
          label: '第二街道',
          level: 2
        }, {
          value: '500002',
          label: '城南大道',
          level: 2
        }, {
          value: '500003',
          label: '人名路',
          level: 2
        }, {
          value: '500004',
          label: '红都大道',
          level: 2
        }, {
          value: '500005',
          label: '向阳北路',
          level: 2
        }]
      }
    ],
    projectList: [{
      address: "福田中航路",
      areaId: 71,
      areaName: "福田区",
      areaZipCode: "440304",
      deliveryDate: "2002-08-28 00:00:00",
      otherName: "都会100",
      projectId: "196286201618792508",
      projectName: "都会100大厦"
    }, {
      address: "上合路178号",
      areaId: 75,
      areaName: "宝安区",
      areaZipCode: "440306",
      deliveryDate: "1991-01-01 00:00:00",
      otherName: "",
      projectId: "139508652066799384",
      projectName: "31区农贸市场"
    }, {
      address: "深沙路13号",
      areaId: 73,
      areaName: "盐田区",
      areaZipCode: "440308",
      deliveryDate: "1995-01-01 00:00:00",
      otherName: "",
      projectId: "150607661659587283",
      projectName: "深沙路13号免税公司宿舍"
    }, {
      address: "洪湖二街",
      areaId: 70,
      areaName: "罗湖区",
      areaZipCode: "440303",
      deliveryDate: "1989-10-01 00:00:00",
      otherName: "洪湖二街田贝西17号大院",
      projectId: "149809561884603036",
      projectName: "洪湖二街17号大院",
    }, {
      address: "罗湖东门新园路19号",
      areaId: 70,
      areaName: "罗湖区",
      areaZipCode: "440303",
      deliveryDate: "",
      otherName: "",
      projectId: "140181729557731707",
      projectName: "新园路19号大院"
    }, {
      address: "宝岗路91号（笋岗小学对面）",
      areaId: 70,
      areaName: "罗湖区",
      areaZipCode: "440303",
      deliveryDate: "2018-01-01 00:00:00",
      otherName: "禧悦公寓",
      projectId: "196395229912207698",
      projectName: "MR.91公馆"
    }, {
      address: "上川路136号",
      areaId: 75,
      areaName: "宝安区",
      areaZipCode: "440306",
      deliveryDate: "1994-01-01 00:00:00",
      otherName: "",
      projectId: "120883321005929360",
      projectName: "宝安31区住宅楼"
    }, {
      address: "文锦中路1010号",
      areaId: 70,
      areaName: "罗湖区",
      areaZipCode: "440303",
      deliveryDate: "2003-01-01 00:00:00",
      otherName: "",
      projectId: "106297491397398336",
      projectName: "罗湖1号"
    }, {
      address: "滨河大道和皇岗路交界处",
      areaId: 71,
      areaName: "福田区",
      areaZipCode: "440304",
      deliveryDate: "1997-10-28 00:00:00",
      otherName: "",
      projectId: "182872551688716050",
      projectName: "110KV变电站住宅综合楼"
    }, {
      address: "宝安107国道东侧，前进路西侧（桃源居公交站附近）",
      areaId: 75,
      areaName: "宝安区",
      areaZipCode: "440306",
      deliveryDate: "2003-03-01 00:00:00",
      otherName: "",
      projectId: "191771721914437979",
      projectName: "桃源居13区"
    }],
    buildingList: [{
      buildingId: "194521971707468476",
      buildingName: "金都",
      totalFloor: 31
    }, {
      buildingId: "159149875638842815",
      buildingName: "银都",
      totalFloor: 31
    }],
    floorList: [{
        floor: 6
      }, {
        floor: 7
      }, {
        floor: 8
      }, {
        floor: 9
      }, {
        floor: 10
      }, {
        floor: 11
      }, {
        floor: 12
      }, {
        floor: 13
      },
      {
        floor: 14
      }, {
        floor: 15
      }, {
        floor: 16
      }, {
        floor: 17
      }, {
        floor: 18
      }, {
        floor: 19
      }, {
        floor: 20
      }
    ],
    houseList: [{
      buildArea: 87.52,
      floor: 6,
      houseId: "120336937893417255",
      houseName: "6A",
      housePurposeType: 1002001,
    }, {
      buildArea: 170.33,
      floor: 6,
      houseId: "121487921123624064",
      houseName: "6I",
      housePurposeType: 1002001
    }, {
      buildArea: 87.4,
      floor: 6,
      houseId: "142667202025557275",
      houseName: "6F",
      housePurposeType: 1002001
    }, {
      buildArea: 86.87,
      floor: 6,
      houseId: "147043875997871669",
      houseName: "6C",
      housePurposeType: 1002001
    }, {
      buildArea: 87,
      floor: 6,
      houseId: "163498531387059703",
      houseName: "6D",
      housePurposeType: 1002001
    }, {
      buildArea: 80.36,
      floor: 6,
      houseId: "164697551326751782",
      houseName: "6J",
      housePurposeType: 1002001
    }, {
      buildArea: 121.33,
      floor: 6,
      houseId: "167494629735416490",
      houseName: "6B",
      housePurposeType: 1002001
    }, {
      buildArea: 170.33,
      floor: 6,
      houseId: "183085858368209826",
      houseName: "6H",
      housePurposeType: 1002001
    }]
  }
})