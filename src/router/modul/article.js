import Article from "../../views/Article/index";
import ShowArticle from "../../views/Article/modul/Show";
import AddArticle from "../../views/Article/modul/Add";
import DetailArticle from "../../views/Article/modul/Detail";
import ArticleCategory from "../../views/Article/modul/Category";

export const article = {
    path: '/article',
    name: '文章管理',
    component: Article,
    redirect:'/article/show',
    meta:{
        keepAlive:true,
        menuShow:true,
        childrenShow:false,
        iconClass:'el-icon-document',
    },
    children: [
        {
            path: 'show',
            name: '文章列表',
            component: ShowArticle,
            meta:{keepAlive:true}
        },
        {
            path: 'add',
            name: '添加文章',
            component: AddArticle,
            meta:{keepAlive:true}
        },
        {
            path: 'detail',
            name: '文章详情',
            component: DetailArticle,
            meta:{keepAlive:true}
        },
        {
            path: 'category',
            name: '文章类别',
            component: ArticleCategory,
            meta:{
                keepAlive:true
            }
        }
    ]
}