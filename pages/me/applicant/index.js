
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workerSelect: [{
      name: '全部',
      value: 1
    },
    {
      name: '联系过',
      value: 2
    },
    {
      name: '已下架',
      value: 3
    }],
    selectNum:0,
    person_content:[
      {
        imagePath:'https://img1.baidu.com/it/u=4229212883,631981417&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
        name:'陈建华',
        sex:'男',
        good:["平车","四线","裁床","尾部"],
        address:'海珠鹭江',
        wages:"15k-20k",
        status:'邀约'
      },
      {
        imagePath:'https://img1.baidu.com/it/u=3678285880,705067650&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
        name:'梁衣',
        sex:'女',
        good:["平车","四线","裁床","尾部"],
        address:'海珠鹭江',
        wages:"15k-20k",
        status:'工作中'
      }
    ],
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  changeSelectWorker(e) {
    this.data.selectNum = e.currentTarget.dataset.index
    this.setData({
      selectNum: this.data.selectNum
    })
  },
})