import Seting from "../../views/Seting/index";
import Links from "../../views/Seting/modul/links";

export const seting ={
    path: '/seting',
    name: '系统设置',
    component: Seting,
    redirect:'/seting/links',
    meta:{
        keepAlive:true,
        menuShow:true,
        iconClass:'el-icon-setting',
    },
    children: [
        {
            path: 'links',
            name: '友情链接',
            component: Links,
            meta:{
                keepAlive:true,
                menuShow:true,
            }
        },
    ]
};
