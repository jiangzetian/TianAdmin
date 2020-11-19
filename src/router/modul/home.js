import Home from "../../views/Home/index";

export const home ={
    path: '/',
    name: '仪表盘',
    component: Home,
    meta:{
        //是否保持在Layout布局以内
        keepAlive:true,
        //是否在导航栏中显示
        menuShow:true,
        //当前路由代表图标
        iconClass:'el-icon-stopwatch',
    }
};
