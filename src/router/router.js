import Vue from 'vue';
import Router from 'vue-router';
import ListStock from '../views/ListStock.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ListStock',
      component: ListStock
    }
  ]
});
