import Login from "../../views/Login/index";

export const login ={
    path: '/login',
    name: '登录',
    component: Login,
    meta:{
    keepAlive:false,
        menuShow:false,
        iconClass:'',
    }
}