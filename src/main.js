import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.API_URL = 'https://data.police.uk/api/';
Vue.prototype.API_ENDPOINTS = {
  categories: 'crime-categories'
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');