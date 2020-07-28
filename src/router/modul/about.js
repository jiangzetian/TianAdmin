import About from "../../views/About/index";

export const about={
    path: '/about',
    name: '关于我',
    component: About,
    meta:{
        keepAlive:true,
        menuShow:true,
        iconClass:'el-icon-postcard',
    }
}