import Seting from "../../views/Seting/index";

export const seting ={
    path: '/seting',
    name: '系统设置',
    component: Seting,
    meta:{
        keepAlive:true,
        menuShow:true,
        iconClass:'el-icon-setting',
    }
}