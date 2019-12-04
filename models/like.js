import {HTTP} from '../utils/http.js'
class LikeModel extends HTTP{
  like(behavior,artID,category ){
      let url = behavior == 'like'?'like':'like/cancel'
        this.requset({
            url:url,
            method:'POST',
            data:{
                art_id:artID,
                type: category
            }
          })
    }

    getClassicLikeStatus(artID,catrgory,sCallback){
      this.requset({
        url:'/classic/' + category + '/' + artID + '/favor',
        success: sCallback
      })
    }
}
export {LikeModel}