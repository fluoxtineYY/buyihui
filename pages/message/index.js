Page({

      /**
       * 页面的初始数据
       */
      data: {
        isSure:true,
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
          }
        ],
        head_num: 2,
        login_type: Number,
        job_content: [{
          jobName: "平车",
          jobFeature: "临工",
          jobNumber: "3",
          jobTime:'2021-02-15',
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
          jobTime:'2021-02-15',
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
          jobTime:'2021-02-15',
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
          jobTime:'2021-02-15',
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
        }]
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