const app = getApp()

Page({
  data: {
    role_arr: [{
        icon: "/pages/image/icon-worker.png",
        name: "找工作"
      },
      {
        icon: "/pages/image/icon-person.png",
        name: "找工人"
      },
      {
        icon: "/pages/image/icon-customer.png",
        name: "找客户"
      },
      {
        icon: "/pages/image/icon-addwork.png",
        name: "找加工"
      },
      {
        icon: "/pages/image/icon-transform.png",
        name: "找运输"
      },
    ],
  },

  onLoad() {},

  onShow() {},

  jumpIndex(e) {
    console.log("index", e.currentTarget.dataset.index)
    if (e.currentTarget.dataset.index == 0 || e.currentTarget.dataset.index == 1) {
      let index = e.currentTarget.dataset.index
      wx.setStorage({
        key: 'index',
        data: index,
        success: (result) => {
          wx.switchTab({
            url: '/pages/findIndex/index'
          })
        }
      })
    } else if (e.currentTarget.dataset.index == 2 || e.currentTarget.dataset.index == 3) {
      wx.navigateTo({
        url: '/pages/findIndex/findCustom/index?index=' + e.currentTarget.dataset.index
      })
    }
  }


})