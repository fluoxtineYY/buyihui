// pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login_type:Number,
    headMessage:[
      {
        headImg:'https://img0.baidu.com/it/u=2766548306,2653040935&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        name:'吴映洁',
        status:'已认证',
        role:'工人',
        experise:'3年工作经验',
        good:["四线","裁床","尾部"]
      }
    ],
    meSelect:[{
      icon:'/pages/image/me-icon-work-1.png',
      content:'编辑简历',
      path:''
    },
    {
      icon:'/pages/image/me-icon-work-2.png',
      content:'应聘记录',
      path:''
    },{
      icon:'/pages/image/me-icon-work-3.png',
      content:'意见反馈',
      path:''
    }],
    BossMessage:[
      {
        headImg:'https://img0.baidu.com/it/u=3131688491,1017079386&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
        name:'吴世杰',
        status:'已认证',
        role:'企业主',
        experise:'潜江制衣厂',
        good:'广州市海珠区鹭江 新村425号54室内'
      }
    ],
    BossSelect:[{
      icon:'/pages/image/me-icon-boss-1.png',
      content:'招聘职位管理',
      path:''
    },
    {
      icon:'/pages/image/me-icon-boss-2.png',
      content:'应聘者管理',
      path:''
    },{
      icon:'/pages/image/me-icon-work-3.png',
      content:'意见反馈',
      path:''
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key:'index',
      success:(res)=>{
        let index = res.data;
        that.setData({
          login_type:index
        })
        console.log("我的拿到了吗",this.data.login_type)
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})