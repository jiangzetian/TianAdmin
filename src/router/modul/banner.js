//banner
import Banner from "../../views/Banner/index";
import ShowBanner from "../../views/Banner/modul/Show";
import AddBanner from "../../views/Banner/modul/Add";
export const banner = {
    path: '/banner',
    name: '幻灯片',
    component: Banner,
    redirect:'/banner/show',
    meta:{
        keepAlive:true,
        menuShow:true,
        childrenShow:false,
        iconClass:'el-icon-data-analysis',
    },
    children: [
        {
            path: 'show',
            name: '查看幻灯片',
            component: ShowBanner,
            meta:{
                keepAlive:true,
            }
        },
        {
            path: 'add',
            name: '添加幻灯片',
            component: AddBanner,
            meta:{keepAlive:true}
        },
    ]
}