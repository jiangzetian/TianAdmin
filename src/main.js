import Vue from 'vue'
import App from './App.vue'
import router from './router'
//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

Vue.use(Avue);
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})
