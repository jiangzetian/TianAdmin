import base from "../base";
import axios from '../http'

function getUpImgToken(data){
    return axios({
        method:'POST',
        url:`${base.imgApiUrl}/api/token`,
        data:data,
        headers:{ "content-type": "application/json" },
    })
}

function getImg(data,headers){
    return axios({
        method:'POST',
        url:`${base.imgApiUrl}/api/image`,
        data:data,
        headers:headers,
    })
}

function deleteUpImg(data,headers){
    return axios({
        method:'POST',
        url:`${base.imgApiUrl}/api/delete`,
        data:data,
        headers:headers,
    })
}

function getBYBG(data) {
    return axios({
        method:'POST',
        url:`https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=zh-CN`,
        data:data,
    })
}

export {getUpImgToken,deleteUpImg,getImg,getBYBG};
