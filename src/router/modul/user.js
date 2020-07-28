import User from "../../views/User/index";
import ShowUser from "../../views/Article/modul/Show";

export const user = {
    path: '/user',
        name: '用户管理',
    component: User,
    redirect:'/user/show',
    meta:{
    keepAlive:true,
        menuShow:true,
        childrenShow:false,
        iconClass:'el-icon-user',
},
    children: [
        {
            path: 'show',
            name: '查看用户',
            component: ShowUser,
            meta:{keepAlive:true}
        }
    ]
}