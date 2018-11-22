import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jQuery from 'jquery'
// import select2 from 'select2'

localStorage.setItem('userKey', Math.floor(Math.random() * 6000) + 1000 );

Vue.config.productionTip = true
Vue.prototype.$http = axios
Vue.prototype.jquery = jQuery
Vue.prototype.API_URL = 'https://data.police.uk/api/'
Vue.prototype.API_ENDPOINTS = {
  categories: 'crime-categories',
  crimesNoLoc: 'crimes-no-location'
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
