import Vue from 'vue';
import Router from 'vue-router';
import Stock from '../views/Stock.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'stock',
      component: Stock
    }
  ]
});
