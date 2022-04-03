// app.js
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    //获取系统信息
    wx.getSystemInfo({
      success: res => {
        this.globalData.screenHeight = res.screenHeight,
        this.globalData.statusBarHeight = res.statusBarHeight
        console.log("ddd",this.globalData)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  globalData: {
    userInfo: null,
    screenHeight:0,
    statusBarHeight:0,
  }
})
