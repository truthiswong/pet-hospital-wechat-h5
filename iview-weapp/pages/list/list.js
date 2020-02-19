//list.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    //加载样式是否显示
    spinShow: true
  },
  onLoad: function() {
    let vm = this
    setTimeout(function() {
      //要延时执行的代码
      vm.setData({
        spinShow: false
      })
      vm.setData({
        logs: (wx.getStorageSync('logs') || []).map(log => {
          return util.formatTime(new Date(log))
        })
      })
    }, 3000) //延迟时间 这里是3秒
  }
})