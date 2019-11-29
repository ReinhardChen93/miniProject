import {config} from '../config.js'

const tips = {
  1:'抱歉,出现了一个错误',
  1005:'appkey无效',
  3000:'期刊不存在'
}

class HTTP{
  requset(params){
    if(!params.method){
      params.method = "GET"
    }
    wx.request({
      header:{
        'content-type':'application/json',
        'appkey':'config.appley'
      },
      url: config.api_base_url + params.url,
      method:params.method,
      data:params.data,
      success:(res)=>{
        
        let code = res.statusCode.toString()
        if(code.startsWith('2')){

        }else{
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail:(err)=>{
        this._show_error(1)
      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      error_code = 1
    }
    wx, wx.showToast({
      title: tips[error_code],
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