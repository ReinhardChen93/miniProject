import {config} from '../config.js'

const tips = {
  1:'抱歉,出现了一个错误',
  1005:'appkey无效',
  3000:'期刊不存在'
}

class HTTP{
  request({url,data={},method='GET'}){
    return new Promise((resolve,reject)=>{
      this._requset(url,resolve,reject,data,method)
    })
  }

  _requset(url,resolve,reject,data={},method='GET'){
    if(!method){
      method = "GET"
    }
    wx.request({
      header:{
        'content-type':'application/json',
        'appkey':'config.appley'
      },
      url: config.api_base_url + url,
      method:method,
      data:data,
      success:(res)=>{
        
        const code = res.statusCode.toString()
        if(code.startsWith('2')){
          // 判断是否传入了success的回调函数,startsWith(判断是否是2开头的字符串)
          resolve(res.data)
        }else{
          reject()
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail:(err)=>{
        reject()
        this._show_error(1)
      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      error_code = 1
    }
    const tip = tips[error_code]
    wx, wx.showToast({
      title: tip?tip:tips[1],
      icon: 'none',
      duration: 2000,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
}
export {HTTP}