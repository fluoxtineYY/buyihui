Page({

  /**
   * 页面的初始数据
   */
  data: {
    headSelect: [{
      name: "工作邀约",
      value: "0",
      newNum: 3
    }, {
      name: "聊一聊",
      value: "1",
      newNum: 3
    }, {
      name: "系统消息",
      value: "2",
      newNum: 3
    }],
    messageContent: [{
        type: "系统通知",
        date: "6月20日",
        text: "疫情紧张，平台祝愿您做好防护工作",
        num: 0,
      },
      {
        type: "系统通知",
        date: "6月20日",
        text: "疫情紧张，平台祝愿您做好防护工作",
        num: 567
      }
    ],
    head_num: 2,
    login_type: Number,
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
        console.log("我的拿到了吗", this.data.login_type)
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

  //切换头部
  changeHead(e) {
    this.setData({
      head_num: e.currentTarget.dataset.select
    })
  },

  //跳转消息详情
  checkMoreMessage(e) {
    wx.navigateTo({
      url: '/pages/message/messageDetail/index'
    })
  }
})