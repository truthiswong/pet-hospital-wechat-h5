//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/index/pic1.jpg',
      '../../images/index/pic2.png',
      '../../images/index/pic3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
})
