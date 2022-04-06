Page({

      /**
       * 页面的初始数据
       */
      data: {
        nav_arr: [{
          icon: "/pages/image/findIndex-icon-1.png",
          name: "最新招聘"
        }, {
          icon: "/pages/image/findIndex-icon-2.png",
          name: "24小时热招"
        }, {
          icon: "/pages/image/findIndex-icon-3.png",
          name: "高薪专区"
        }, {
          icon: "/pages/image/findIndex-icon-4.png",
          name: "委托招聘"
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
          jobPrice: "3000",
          jobUnit: "月",
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
          }],
          login_type:Number,
          isPrice:true,
          isTime:true
        }]

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
              console.log("拿到了吗",this.data.login_type)
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



        jumpResume(){
          wx.navigateTo({
            url: '/pages/findIndex/resume/index',
          })
        }
      })