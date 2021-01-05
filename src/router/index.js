import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";


import {home} from './modul/home'
import {login} from './modul/login'
import {banner} from './modul/banner'
import {about} from './modul/about'
import {article} from './modul/article'
import {user} from './modul/user'
import {seting} from './modul/seting'
import el from "element-ui/src/locale/lang/el";


Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const routes = [
  home,
  login,
  about,
  article,
  banner,
  user,
  seting,
];


const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    if (store.state.userInfo.userInfo){
      if (store.state.userInfo.userInfo.token){
        next();
      }else {
        router.push({path: "/login"});
      }
    }else{
      router.push({path: "/login"});
    }
  }
});


export default router
