import base from "../base";
import axios from '../http'

const indexdAPI = {
    getWatchData(params){
        return axios({
            method:'GET',
            url:`${base.baseurl}/api/index/watch`,
            params:params,
        })
    }
};

export default indexdAPI;
