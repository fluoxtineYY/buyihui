const app = getApp()

Component({
  properties: {
    //定位地址
    address:{
      type:Boolean,
      value:false,
    },
    //后退
    back:{
      type:Boolean,
      value:false,
    },
    //头部
    text:{
      type:String,
      value:'布衣汇'
    },
    head_background:{
      type:String,
      value:"1", //头部背景颜色：1白色,2蓝色，默认白色
    }, 
    font_color:{
      type:String,
      value:"2", //头部字体颜色：1白色,2黑色,默认黑色
    },
    
   
  },
  data:{
    statusBarHeight: app.globalData.statusBarHeight+'px',
    navigationBarHeight:(app.globalData.statusBarHeight +44)+'px'
  },
  
})