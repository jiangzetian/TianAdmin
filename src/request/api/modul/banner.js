import base from "../../base";
import axios from '../../http'

const banner = {
    // post请求
    getUpImgToken(params){
        return axios({
            method:'POST',
            url:`${base.imgApiUrl}/api/token`,
            data:params,
            headers:{ "content-type": "application/json" },
        })
    },
    deleteUpImg(params,headers){
        return axios({
            method:'POST',
            url:`${base.imgApiUrl}/api/delete`,
            data:params,
            headers:headers,
        })
    }
}

export default banner;