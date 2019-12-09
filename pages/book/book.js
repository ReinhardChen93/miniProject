import { BookModel } from '../../models/book.js'

const bookModel = new BookModel

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[],
    searching:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bookModel.getHotList().then(res=>{
      this.setData({
        books:res
      })
    })
    // BookModel.getHotList().then(res=>{
    //   console.log(res)
    //   BookModel.getMyBookCount().then(res=>{
    //     console.log(res)
    //     BookModel.getMyBookCount().then(res => {
    //     console.log(res)
    //     })
    //   })
    // })
  },

  onSearching(event){
    this.setData({
      searching:true
    })
  },

  onCancel: function(event) {
    this.setData({
      searching: false
    })
  },

  onTop: function(event) {
    console.log('123')
    const bid = 1
    wx.navigateTo({
      url: `/pages/book-detail/book-detail?bid=${bid}`,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { message: 'good job!',data:'ok' }        )
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})