Page({

  /**
   * 页面的初始数据
   */
  data: {
    isbossList: false,
    isSure: true,
    isMessage: true,
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
      },
      {
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
      }, {
        type: "系统通知",
        date: "6月20日",
        text: "疫情紧张，平台祝愿您做好防护工作",
        num: 4,
      },
      {
        type: "系统通知",
        date: "6月20日",
        text: "疫情紧张，平台祝愿您做好防护工作",
        num: 567
      }
    ],
    head_num: 0,
    login_type: Number,
    job_content: [{
      jobName: "平车",
      jobFeature: "临工",
      jobNumber: "3",
      jobTime: '2021-02-15',
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
    }, {
      jobName: "平车",
      jobFeature: "全职",
      jobNumber: "3",
      jobPrice: "3000",
      jobUnit: "月",
      jobTime: '2021-02-15',
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
    }, {
      jobName: "平车",
      jobFeature: "临工",
      jobNumber: "3",
      jobPrice: "2.5",
      jobUnit: "件",
      jobTime: '2021-02-15',
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
    }, {
      jobName: "平车",
      jobFeature: "临工",
      jobNumber: "3",
      jobPrice: "2.5",
      jobUnit: "件",
      jobTime: '2021-02-15',
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
      }],
    }],
    interview_content: [{
        imagePath: 'https://img1.baidu.com/it/u=4229212883,631981417&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
        name: '陈建华',
        sex: '男',
        good: ["平车", "四线", "裁床", "尾部"],
        status: '尚未联系',
        time: '1小时前'
      },
      {
        imagePath: 'https://img1.baidu.com/it/u=3678285880,705067650&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
        name: '梁衣',
        sex: '女',
        good: ["平车", "四线", "裁床", "尾部"],
        address: '海珠鹭江',
        wages: "15k-20k",
        status: '已邀请',
        time: '1小时前'
      },
      {
        imagePath: 'https://img0.baidu.com/it/u=2336455268,2218047305&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
        name: '陈穗离',
        sex: '男',
        good: ["平车", "四线", "裁床", "尾部"],
        address: '海珠鹭江',
        wages: "15k-20k",
        status: '已邀请',
        time: '1小时前'
      },
      {
        imagePath: 'https://img0.baidu.com/it/u=1140314362,462443938&fm=253&fmt=auto&app=138&f=JPEG?w=410&h=410',
        name: '张雾里',
        sex: '女',
        good: ["平车", "四线", "裁床", "尾部"],
        status: '尚未联系',
        time: '1小时前'
      },
      {
        imagePath: 'https://img1.baidu.com/it/u=4229212883,631981417&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
        name: '陈建华',
        sex: '男',
        good: ["平车", "四线", "裁床", "尾部"],
        status: '尚未联系',
        time: '1小时前'
      },
      {
        imagePath: 'https://img1.baidu.com/it/u=3678285880,705067650&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
        name: '梁衣',
        sex: '女',
        good: ["平车", "四线", "裁床", "尾部"],
        address: '海珠鹭江',
        wages: "15k-20k",
        status: '已邀请',
        time: '1小时前'
      },
      {
        imagePath: 'https://img0.baidu.com/it/u=2336455268,2218047305&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
        name: '陈穗离',
        sex: '男',
        good: ["平车", "四线", "裁床", "尾部"],
        address: '海珠鹭江',
        wages: "15k-20k",
        status: '已邀请',
        time: '1小时前'
      },
      {
        imagePath: 'https://img0.baidu.com/it/u=1140314362,462443938&fm=253&fmt=auto&app=138&f=JPEG?w=410&h=410',
        name: '张雾里',
        sex: '女',
        good: ["平车", "四线", "裁床", "尾部"],
        status: '尚未联系',
        time: '1小时前'
      }
    ]
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