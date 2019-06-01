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
    },
    getStock(state, stock) {
      state.stock = stock;
    }
  },
  actions: {
    addNewProductToStock: async ({ commit }, payload) => {
      const productAdded = await services.createProduct(payload);
      commit('addNewProductToStock', productAdded);
    },
    getStock: async ({ commit }) => {
      const stock = await services.getStock();
      commit('getStock', stock);
    }
  },
  getters: {
    stock: state => state.stock
  }
});
