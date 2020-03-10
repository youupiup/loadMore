Page({
  data: {
    testdata:[], //列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchTestData();
  },

  fetchTestData:function(){  //获取列表
    let _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const perpage = 15;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page-1)*perpage; i < page*perpage; i++) {
      newlist.push({
        "id":i+1,
        "name":"参数："+(i+1)
      })
    }
    setTimeout(()=>{
      _this.setData({
        testdata:_this.data.testdata.concat(newlist)
      })
    },1500)
  },




  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading:function(){ //滚动加载
    this.fetchTestData();
  },
  onPullDownRefresh:function(){ //下拉刷新
    this.setData({
      page:0,
      testdata:[]
    })
    this.fetchTestData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})