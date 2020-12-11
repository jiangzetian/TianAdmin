import About from "../../views/About/index";
import Contact from "../../views/About/modul/contact";

export const about={
    path: '/about',
    name: '关于我',
    component: About,
    redirect:'/about/Contact',
    meta:{
        keepAlive:true,
        menuShow:true,
        iconClass:'el-icon-postcard',
    },
    children: [
        {
            path: 'contact',
            name: '联系管理',
            component: Contact,
            meta:{
                keepAlive:true,
                menuShow:true,
            }
        },
    ]
};
