import {HTTP} from '../utils/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback){
        this.requset({
            url:'/classic/latest',
            success:(res)=>{
              sCallback(res)
              this._setLatestIndex(res.index)

              // 写入缓存
              let key = this._getKey(res.index)
              wx.setStorageSync(key, res)
            }
          })
    }

  getClassic(index, nextOrPrevious, sCallback) {
    // 先去缓存中寻找 or API 写入到缓存中
    // key标明该数据是什么数据(确定key)
    let key = nextOrPrevious == 'next' ? this._getKey(index+1) : this._getKey(index-1)

    let classic = wx.getStorageSync(key)
    if(!classic){
      this.requset({
        url: '/classic/' + index + '/' + nextOrPrevious,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          sCallback(res)
        }
      })
    } else {
      sCallback(res)
    }

  }
  
  getNext(index, sCallback){

  }

  isFirst(index){
    return index == 1 ? true : false
  }

  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  _setLatestIndex(index){
    // 同步写入缓存setStorageSync , 异步写入缓存setStorage
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }

  _getKey(index){
    let key = 'classic-' + index
    return key
  }
}
export {ClassicModel}