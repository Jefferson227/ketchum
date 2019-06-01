import Vue from 'vue';
import Vuex from 'vuex';
import services from './services/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stock: [],
    isLoading: false
  },
  mutations: {
    addNewProductToStock(state, product) {
      state.stock.push(product);
    },
    updateProduct(state, product) {
      state.stock[product.id] = product;
    },
    getStock(state, stock) {
      state.stock = stock;
    },
    toggleLoading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    addNewProductToStock: async ({ commit }, payload) => {
      const productAdded = await services.createProduct(payload);
      commit('addNewProductToStock', productAdded);
    },
    updateProduct: async ({ commit }, payload) => {
      const productUpdated = await services.updateProduct(payload);
      commit('updateProduct', { productUpdated });
    },
    getStock: async ({ commit }) => {
      const stock = await services.getStock();

      commit('getStock', stock);
      commit('toggleLoading', false);
    },
    toggleLoading: ({ commit }, payload) => {
      commit('toggleLoading', payload);
    }
  },
  getters: {
    stock: state => state.stock,
    isLoading: state => state.isLoading
  }
});
