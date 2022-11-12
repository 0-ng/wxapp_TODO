var app = getApp()
var util = require("../../utils/util.js");
// var dataUrl2 = '../../__pageframe__/resource/beep.mp3';
var dataUrl2 = 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400';
var dataUrl = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
Page({
  onLoad: function () {
    var that = this
    that.mGgr = wx.getBackgroundAudioManager()
    that.mGgr.src = dataUrl2
    that.mGgr.title = "music"

    that.mGgr.play()
  },
  data: {
    playing: true,
    playTime: 0,
    formatedPlayTime: '00:00:00',
    mGgr: null
  },
  play: function (res) {
    var that = this
    that.mGgr.play()
    this._enableInterval()
    app.globalData.backgroundAudioPlaying = true
  },
  seek: function (e) {
    clearInterval(this.updateInterval)
    var that = this
    that.mGgr.seek()
  },
  pause: function () {
    var that = this
    that.mGgr.pause()
    app.globalData.backgroundAudioPlaying = false
  },
  stop: function () {
    var that = this
    that.mGgr.stop()
    app.globalData.backgroundAudioPlaying = false
  },
  _enableInterval: function () {
    var that = this
  },
  onUnload: function () {
    clearInterval(this.updateInterval)
  }
})
