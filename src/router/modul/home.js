import Home from "../../views/Home/index";

export const home ={
    path: '/',
    name: '仪表盘',
    component: Home,
    meta:{
        keepAlive:true,
        menuShow:true,
        iconClass:'el-icon-stopwatch',
        roles:'user'
    }
}