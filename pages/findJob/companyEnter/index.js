// pages/findJob/companyEnter/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formList: {
      name: '',
      type: '',
      scale: '',
      connect: '',
      phone: '',
      code: '',
      region: '',
      detailRegion: ''
    },

    formSelect: {
      typeArray: ['合伙企业', '个人独资企业', '公司制企业'],
      typeNum: '',
      scaleArray: ['0-20人', '20-100人', '100-500人', '1000人'],
      scaleNum: '',
      regionArray: ['海珠区', '天河区', '番禺区', '黄埔区', '白云区', '增城区'],
      regionNum: '',
    },

    typeArrayIndex: [{
      name: '合伙企业',
      id: 0
    }, {
      name: '个人独资企业',
      id: 1
    }, {
      name: '公司制企业',
      id: 2
    }],

    scaleArrayIndex: [{
      name: '0-20人',
      id: 0
    }, {
      name: '20-100人',
      id: 1
    }, {
      name: '100-500人',
      id: 2
    }, {
      name: '1000人',
      id: 3
    }],

    regionArrayIndex: [{
      name: '海珠区',
      id: 1
    }, {
      name: '天河区',
      id: 2
    }, {
      name: '番禺区',
      id: 3
    }, {
      name: '白云区',
      id: 4
    }, {
      name: '白云区',
      id: 5
    }, {
      name: '增城区',
      id: 6
    }],

    tagTips: {
      name: '请填写您的企业名称',
      type: '请填写您的企业类型',
      scale: '请填写企业规模',
      connect: '请填写您的姓名',
      phone: '请填写您的手机号码',
      code: '请输入验证码',
      region: '请选择您所在的区域',
      detailRegion: '请填写详细地址'
    },
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

  //企业类型
  changeType(e) {
    this.data.formSelect.typeNum = e.detail.value
    this.data.formList.type = e.detail.value
    this.setData({
      formList: this.data.formList,
      formSelect: this.data.formSelect
    })
  },

  //企业规模
  changeScale(e) {
    this.data.formSelect.scaleNum = e.detail.value
    this.data.formList.scale = e.detail.value
    this.setData({
      formList: this.data.formList,
      formSelect: this.data.formSelect
    })
  },

  //区域
  changeRegion(e) {
    this.data.formSelect.regionNum = e.detail.value
    this.data.formList.region = e.detail.value
    this.setData({
      formList: this.data.formList,
      formSelect: this.data.formSelect
    })
  },


})