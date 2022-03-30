// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

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
