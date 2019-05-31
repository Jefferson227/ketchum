import Vue from 'vue';
import './plugins/vuetify';
import { initializeApp } from 'firebase/app';
import router from './router/router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
