import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
//banner
import Banner from '../views/Banner'
import AddBanner from '../views/Banner/modul/Add'
import ShowBanner from '../views/Banner/modul/Show'
//About-关于我
import About from '../views/About'
//Article-文章
import Article from '../views/Article'
import AddArticle from '../views/Article/modul/Add'
import ShowArticle from '../views/Article/modul/Show'
import DetailArticle from '../views/Article/modul/Detail'



Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    meta:{keepAlive:true}
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
    meta:{keepAlive:false}
  },
  {
    path: '/banner',
    name: '幻灯片管理',
    component: Banner,
    redirect:'/banner/show',
    meta:{keepAlive:true},
    children: [
      {
        path: 'show',
        name: '查看幻灯片',
        component: ShowBanner,
        meta:{keepAlive:true}
      },
      {
        path: 'add',
        name: '添加幻灯片',
        component: AddBanner,
        meta:{keepAlive:true}
      },
    ]
  },
  {
    path: '/about',
    name: '关于我',
    component: About,
    meta:{keepAlive:true}
  },
  {
    path: '/article',
    name: '文章管理',
    component: Article,
    redirect:'/article/show',
    meta:{keepAlive:true},
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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
