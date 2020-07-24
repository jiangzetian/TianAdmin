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
//User-用户
import User from '../views/User'
import ShowUser from '../views/Article/modul/Show'


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
    meta:{
      keepAlive:true,
      menuShow:true,
      iconClass:'el-icon-stopwatch',
    }
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
    meta:{
      keepAlive:false,
      menuShow:false,
      iconClass:'',
    }
  },
  {
    path: '/banner',
    name: '幻灯片管理',
    component: Banner,
    redirect:'/banner/show',
    meta:{
      keepAlive:true,
      menuShow:true,
      iconClass:'el-icon-data-analysis',
    },
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
    meta:{
      keepAlive:true,
      menuShow:true,
      iconClass:'el-icon-postcard',
    }
  },
  {
    path: '/article',
    name: '文章管理',
    component: Article,
    redirect:'/article/show',
    meta:{
      keepAlive:true,
      menuShow:true,
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
    ]
  },
  {
    path: '/user',
    name: '用户管理',
    component: User,
    redirect:'/user/show',
    meta:{
      keepAlive:true,
      menuShow:true,
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
  },
]

const router = new VueRouter({
  routes
})

export default router
