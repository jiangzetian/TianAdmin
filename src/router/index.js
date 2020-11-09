import Vue from 'vue'
import VueRouter from 'vue-router'


import {home} from './modul/home'
import {login} from './modul/login'
import {banner} from './modul/banner'
import {about} from './modul/about'
import {article} from './modul/article'
import {user} from './modul/user'
import {seting} from './modul/seting'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const routes = [
  home,
  login,
  article,
  banner,
  user,
  about,
  seting,
];


const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    next();
  } else {
    const token = sessionStorage.getItem("token");
    console.log();
    if (token) {
      next();
    } else {
      router.push({path: "/login"});
    }
  }
});


export default router
