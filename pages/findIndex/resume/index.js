Page({

  /**
   * 页面的初始数据
   */
  data: {
    formList: {
      name: '',
      sex: '',
      year: '',
      phone: '',
      code: '',
      region: '',
      status: '',
      experice: '',
      wages: '',
      type: ''
    },

    formSelect: {
      sexArray: ['男', '女'],
      sexNum: '',
      regionArray:['海珠区','天河区','番禺区','黄埔区','白云区','增城区'],
      regionNum:'',
      statusArray: ['在职', '离职'],
      statusNum: '',
      expericeArray: ['1年以内', '1-3年', '3-5年', '5年以上'],
      expericeNum: '',
      wagesArray: ['2k-3k', '3k-5k', '5k-7k', '7k-10k', '10k-13k', '13k-15k'],
      wagesNum: ''
    },

    sexArrayIndex: [{
      name: '男',
      id: 1
    }, {
      name: '女',
      id: 2
    }],

    statusArrayIndex: [{
      name: '在职',
      id: 1
    }, {
      name: '离职',
      id: 2
    }],

    expericeArrayIndex: [{
      name: '1年以内',
      id: 1
    }, {
      name: '1-3年',
      id: 2
    }, {
      name: '3-5年',
      id: 3
    }, {
      name: '5年以上',
      id: 4
    }],

    wagesArrayIndex: [{
      name: '2-3k',
      id: 1
    }, {
      name: '3-5k',
      id: 2
    }, {
      name: '5-7k',
      id: 3
    }, {
      name: '7k-10k',
      id: 4
    }, {
      name: '10-13k',
      id: 5
    }, {
      name: '13k-15k',
      id: 6
    }],

    regionArrayIndex:[
      {
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
      }
    ],

    tagTips: {
      name: '请填写您的姓名',
      sex: '请填写您的性别',
      year: '请填写您的年龄',
      phone: '请填写您的手机号码',
      code: '请输入验证码',
      region: '请选择您所在的区域',
      status: '请选择工作状态',
      experice: '请选择工作经验',
      wages: '请选择您的期望工资',
      type: '请选择您擅长的工种'
    },




    workType: ["平车", "四线", "五线", "尾部", "裁床", "平车", "四线", "五线", "尾部", "裁床", "平车", "四线", "五线", "尾部", "裁床"]

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
  //性别
  changeSex(e) {
    this.data.formSelect.sexNum = e.detail.value
    this.data.formList.sex = e.detail.value
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

  //状态
  changeStatus(e) {
    this.data.formSelect.statusNum = e.detail.value
    this.data.formList.status = e.detail.value
    this.setData({
      formList: this.data.formList,
      formSelect: this.data.formSelect
    })
  },

  //经验
  changeExperice(e) {
    this.data.formSelect.expericeNum = e.detail.value
    this.data.formList.experice = e.detail.value
    this.setData({
      formList: this.data.formList,
      formSelect: this.data.formSelect
    })
  },

  //工资
  changeWages(e){
    this.data.formSelect.wagesNum = e.detail.value
    this.data.formList.wages = e.detail.value
    this.setData({
      formList: this.data.formList,
      formSelect: this.data.formSelect
    })
  }
})