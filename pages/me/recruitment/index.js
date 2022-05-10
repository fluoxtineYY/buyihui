Page({

  /**
   * 页面的初始数据
   */
  data: {
    login_type: Number,
    workerSelect: [{
        name: '全部信息',
        value: 1
      },
      {
        name: '招聘中',
        value: 2
      },
      {
        name: '已下架',
        value: 3
      }
    ],
    companySelect: [{
        name: '全部信息',
        value: 1
      },
      {
        name: '招聘中',
        value: 2
      },
      {
        name: '已下架',
        value: 3
      }
    ],
    selectNum: 0,
    companyNum: 0,
    workerRecord: [{
        jobName: '平车',
        jobFeature: '临工',
        jobNumber: '3',
        jobStatus: '已邀请',
        personName: '李生',
        companyName: '潜江制衣厂',
        time: '1小时前'
      },
      {
        jobName: '平车',
        jobFeature: '全职',
        jobNumber: '3',
        jobStatus: '邀约中',
        personName: '李生',
        companyName: '潜江制衣厂',
        time: '1小时前'
      }
    ],
    companyRecord: [{
      jobName: '平车',
      jobFeature: '临工',
      jobNumber: '3',
      jobPrice: '2.5',
      jobUnit: '件',
      time: '1小时前',
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      inviteTimes: '10',
      readTimes: '34'
    }, {
      jobName: '车间打版',
      jobFeature: '全职',
      jobNumber: '1',
      jobPrice: '3000',
      jobUnit: '月',
      time: '20分钟前',
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      inviteTimes: '10',
      readTimes: '34'
    },{
      jobName: '平车',
      jobFeature: '临工',
      jobNumber: '3',
      jobPrice: '2.5',
      jobUnit: '件',
      time: '1小时前',
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      inviteTimes: '10',
      readTimes: '34'
    }, {
      jobName: '车间打版',
      jobFeature: '全职',
      jobNumber: '1',
      jobPrice: '3000',
      jobUnit: '月',
      time: '20分钟前',
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      inviteTimes: '10',
      readTimes: '34'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: 'index',
      success: (res) => {
        let index = res.data;
        that.setData({
          login_type: index
        })
        console.log("我应聘啊的拿到了吗", this.data.login_type)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  changeSelectWorker(e) {
    this.data.selectNum = e.currentTarget.dataset.index
    this.setData({
      selectNum: this.data.selectNum
    })
  },

  changeSelect(e) {
    this.data.companyNum = e.currentTarget.dataset.index
    this.setData({
      companyNum: this.data.companyNum
    })
  }
})