// pages/me/feedBack/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [{
        type: '反馈流程',
        value: 0,
        isClick: false
      },
      {
        type: '招聘流程',
        value: 1,
        isClick: false
      }, {
        type: '产品BUG',
        value: 2,
        isClick: false
      }, {
        type: '使用建议',
        value: 3,
        isClick: false
      }, {
        type: '其他问题',
        value: 4,
        isClick: false
      }
    ],
    feedPramas: {
      feedType: [],
      feedMessage: "",
      feedContact: ""
    },
    feedTip: {
      feedType: "请选择反馈类型",
      feedMessage: "请填写您的意见和建议",
      feedContact: "请留下您的联系方式"

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  //选择反馈类型
  selectType(e) {
    let typeIndex = e.currentTarget.dataset.index
    for (let list in this.data.typeList) {
      if (typeIndex == this.data.typeList[list].value) {
        this.data.typeList[list].isClick = !this.data.typeList[list].isClick
        //如果选中,将参数数组push对应的值;如果取消,就删除对应的
        if (this.data.typeList[list].isClick) {
          this.data.feedPramas.feedType.push(...this.data.typeList[list].value.toString())
          console.log("加入哪个？", this.data.feedPramas.feedType)
          this.setData({
            feedPramas: this.data.feedPramas
          })
        } else {
          for (let type in this.data.feedPramas.feedType) {
            if (typeIndex == this.data.feedPramas.feedType[type]) {
              this.data.feedPramas.feedType.splice(type, 1)
              console.log("删除哪个？", this.data.feedPramas.feedType)
              this.setData({
                feedPramas: this.data.feedPramas
              })
            }
          }
        }
        this.setData({
          typeList: this.data.typeList,
          feedPramas: this.data.feedPramas
        })
      }
    }
  },

  //填写意见
  writeRecommend(e) {
    this.data.feedPramas.feedMessage = e.detail.value
    this.setData({
      feedPramas: this.data.feedPramas
    })
  },

  //填写联系
  writeContact(e) {
    this.data.feedPramas.feedContact = e.detail.value
    this.setData({
      feedPramas: this.data.feedPramas
    })
  },

  //提交意见
  sumitRecommend() {
    for (let name in this.data.feedTip) {
      console.log("list", this.data.feedPramas[name])
      if (!this.data.feedPramas[name] || !this.data.feedPramas[name].length) {
        wx.showToast({
          title: this.data.feedTip[name],
          icon: 'none',
          duration: 2000
        })
        return
      }
    }
    console.log("提交了什么", this.data.feedPramas)
  }
})