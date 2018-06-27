// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import API from '@/assets/js/api';
import VueLazyload from 'vue-lazyload';

import 'animate.css';
import '@/assets/fonts/iconfont.scss';

// 移动端 click 事件消除
FastClick.attach(document.body);
// 懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/images/error.png'),
    loading: require('./assets/images/loading.png'),
    attempt: 1
});
// api
Vue.prototype.API = API;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})