
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
    applicant_content:[
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
      },
      {
        imagePath: 'https://img0.baidu.com/it/u=2336455268,2218047305&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
        name: '陈穗离',
        sex: '男',
        good: ["平车", "四线", "裁床", "尾部"],
        address: '海珠鹭江',
        wages: "10k-15k",
        status: '邀约'
      },
      {
        imagePath: 'https://img0.baidu.com/it/u=1140314362,462443938&fm=253&fmt=auto&app=138&f=JPEG?w=410&h=410',
        name: '张雾里',
        sex: '女',
        good: ["平车", "四线", "裁床", "尾部"],
        address: '海珠鹭江',
        wages: "15k-20k",
        status: '邀约'
      }
    ],
    isApplicantList:true,//组件
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