// pages/findIndex/findCustom/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login_type: Number,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      login_type: options.index, //index=2:找客户；=3:找加工
    })
    console.log("oo", options)
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


})