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
  render: h => h(App),
  created() {
    initializeApp({
      apiKey: 'AIzaSyCiGxiDXEbMrCPRgowWdUCYj6gg3oMIRtg', //process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: 'vue-test-6b838.firebaseapp.com', //process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: 'https://vue-test-6b838.firebaseio.com', //process.env.VUE_APP_FIREBASE_DATABASE_URL,
      projectId: 'vue-test-6b838', //process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: 'vue-test-6b838.appspot.com' //process.env.VUE_APP_FIREBASE_STORAGE_BUCKET
    });
  }
}).$mount('#app');
