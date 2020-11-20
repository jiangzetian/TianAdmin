import base from "@/request/base";
import axios from '@/request/http'

const  LoginAPI = {
    signUp(data){
        return axios({
            method:'POST',
            url:`${base.baseurl}/api/login/signup`,
            data:data,
        })
    },
    signOut(data){
        return axios({
            method:'POST',
            url:`${base.baseurl}/api/login/signout`,
            data:data,
        })
    }
};

export default LoginAPI;
