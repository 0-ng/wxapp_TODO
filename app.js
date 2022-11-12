//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.getUserInfo()
  },
  getUserInfo:function(cb){
    // window.location.reload(1);
    console.log(this.globalData.userInfo);
    var that = this
    if(this.globalData.userInfo){
      console.log(1);
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      console.log(2);
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              console.log(3);
              that.globalData.userInfo = res.userInfo
              console.log(res);
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null,
    backgroundAudioPlaying:true
  }
})