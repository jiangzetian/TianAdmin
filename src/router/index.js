import Vue from 'vue'
import VueRouter from 'vue-router'


import {home} from './modul/home'
import {login} from './modul/login'
import {banner} from './modul/banner'
import {about} from './modul/about'
import {article} from './modul/article'
import {user} from './modul/user'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  home,
  login,
  banner,
  about,
  article,
  user,
];

const router = new VueRouter({
  routes
})

export default router
