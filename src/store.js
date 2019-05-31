import Vue from 'vue';
import Vuex from 'vuex';
import services from './services/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stock: []
  },
  mutations: {
    addNewProductToStock(state, product) {
      state.stock.push(product);
    }
  },
  actions: {
    addNewProductToStock: async ({ commit }, payload) => {
      const productAdded = await services.createProduct(payload);
      commit('addNewProductToStock', productAdded);
    }
  },
  getters: {}
});
