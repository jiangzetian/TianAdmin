import About from "../../views/About/index";
import Contact from "../../views/About/modul/contact";
import Resume from "../../views/About/modul/resume";
import Radar from "../../views/About/modul/radar";

export const about={
    path: '/about',
    name: '关于我',
    component: About,
    redirect:'/about/radar',
    meta:{
        keepAlive:true,
        menuShow:true,
        iconClass:'el-icon-postcard',
    },
    children: [
        {
            path: 'radar',
            name: '雷达图示',
            component: Radar,
            meta:{
                keepAlive:true,
                menuShow:true,
            }
        },
        {
            path: 'contact',
            name: '社交媒体',
            component: Contact,
            meta:{
                keepAlive:true,
                menuShow:true,
            }
        },
        {
            path: 'resume',
            name: '个人简历',
            component: Resume,
            meta:{
                keepAlive:true,
                menuShow:true,
            }
        },
    ]
};
