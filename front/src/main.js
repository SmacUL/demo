// Vue 的主路口 axiox 全局变量注册位置

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vue.config.productionTip = false

// // 引用axios，并设置基础URL为后端服务api地址
// var axios = require('axios')
// axios.defaults.baseURL = 'http://localhost:8080/api'
// // 将API方法绑定到全局
// Vue.prototype.$axios = axios
// Vue.config.productionTip = false

import axios from 'axios';
// 将API方法绑定到全局
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})









