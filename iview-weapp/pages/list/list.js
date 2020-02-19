//list.js
const util = require('../../utils/util.js')
var page = 0; //当前页
var totalPages = 3; //总页数
Page({
  data: {
    logs: [],
    //加载样式是否显示
    spinShow: true,
    loadMore: true,
    loadMoreTip: '加载中',
    allLoaded: false
  },
  onLoad: function() {
    this.clearCache(); //清本页缓存
    this.getArticles(0); //第一次加载数据
  },
  getArticles: function(pageno) {
    let vm = this
    setTimeout(function() {
      //要延时执行的代码
      vm.setData({
        spinShow: false
      })
      var res = (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      });
      var tmpArr = vm.data.logs;
      tmpArr.push.apply(tmpArr, res);
      vm.setData({
        logs: tmpArr
      })
      vm.loadMore = true
    }, 3000) //延迟时间 这里是3秒
  },
  // 下拉刷新
  onPullDownRefresh: function() {
    this.setData({
      spinShow: true
    })
    this.clearCache();
    this.getArticles(0); //第一次加载数据
  },
  // 页面上拉触底事件（上拉加载更多）
  onReachBottom: function() {
    page++;
    if (!this.allLoaded) {
      if (page > totalPages - 1) {
        this.setData({
          loadMore: false,
          loadMoreTip: '没有更多了',
          allLoaded: true // 若数据已全部获取完毕
        })
      } else {
        this.setData({
          loadMore: true,
          loadMoreTip: '加载中',
          allLoaded: false // 若数据未获取完毕
        })
        this.getArticles(page); //后台获取新数据并追加渲染
      }
    } else {
      this.setData({
        loadMore: false,
        loadMoreTip: '没有更多了',
        allLoaded: false // 若数据未获取完毕
      })
    }
  },
  // 清缓存
  clearCache: function() {
    page = 0; //分页标识归零
    this.setData({
      logs: [] //文章列表数组清空
    });
  },
})