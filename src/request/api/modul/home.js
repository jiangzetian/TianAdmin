import base from "../../base";
import axios from '../../http'

const home = {
    // post请求
    getUsers(params){
        // return axios.get(`${base.baseurl}/users`,params);
        return axios({
            method:'GET',
            url:`${base.baseurl}/users`,
            data:params,
            headers:{ "content-type": "application/json" },
        })
    }
}

export default home;