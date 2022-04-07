
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkDetail:[{
      name:"职位"
    },{
      name:"薪资"
    },{
      name:"经验"
    },{
      name:"时间"
    }],
    checkPersonDetail:[{
      name:"工种"
    },{
      name:"薪资"
    },{
      name:"经验"
    },{
      name:"时间"
    }],
    job_num: 32,
    job_content: [{
      jobName: "平车",
      jobFeature: "临工",
      jobNumber: "3",
      jobPrice: "2.5",
      jobUnit: "件",
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      jobMessage: [{
        picture: "https://img2.baidu.com/it/u=4148471971,2557146461&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: "李生",
        companyName: "潜江制衣厂",
        address: "海珠鹭江",
        time: "20分钟前"
      }]
    },{
      jobName: "平车",
      jobFeature: "全职",
      jobNumber: "3",
      jobPrice: "2.5",
      jobUnit: "件",
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      jobMessage: [{
        picture: "https://img2.baidu.com/it/u=4148471971,2557146461&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: "李生",
        companyName: "潜江制衣厂",
        address: "海珠鹭江",
        time: "20分钟前"
      }]
    },{
      jobName: "平车",
      jobFeature: "临工",
      jobNumber: "3",
      jobPrice: "2.5",
      jobUnit: "件",
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      jobMessage: [{
        picture: "https://img2.baidu.com/it/u=4148471971,2557146461&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: "李生",
        companyName: "潜江制衣厂",
        address: "海珠鹭江",
        time: "20分钟前"
      }]
    },{
      jobName: "平车",
      jobFeature: "临工",
      jobNumber: "3",
      jobPrice: "2.5",
      jobUnit: "件",
      personArr: [{
        feature: "1-3年"
      }, {
        feature: "夫妻优先"
      }, {
        feature: "环境好"
      }],
      jobMessage: [{
        picture: "https://img2.baidu.com/it/u=4148471971,2557146461&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: "李生",
        companyName: "潜江制衣厂",
        address: "海珠鹭江",
        time: "20分钟前"
      }]
    }],
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
    login_type:Number,
    isPrice:true,
    isTime:true,
    isbossList:true
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
        console.log("求职拿到了吗",this.data.login_type)
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

  jumpCompany(){
    wx.navigateTo({
      url: '/pages/findJob/companyEnter/index',
    })
  }
})