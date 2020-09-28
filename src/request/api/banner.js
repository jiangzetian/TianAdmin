import base from "../base";
import axios from '../http'

function getUpImgToken(params){
    return axios({
        method:'POST',
        url:`${base.imgApiUrl}/api/token`,
        data:params,
        headers:{ "content-type": "application/json" },
    })
}
function deleteUpImg(params,headers){
    return axios({
        method:'POST',
        url:`${base.imgApiUrl}/api/delete`,
        data:params,
        headers:headers,
    })
}

export {getUpImgToken,deleteUpImg};