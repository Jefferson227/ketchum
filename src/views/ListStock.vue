<template>
  <div v-if="showLoading">
    <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
  </div>
  <v-layout v-else row>
    <v-flex xs12 sm6 lg12>
      <v-list two-line>
        <div v-if="!stock.length">
          Parece que ainda não há produtos no seu estoque.
          <a
            @click="createProduct"
          >Bora criar um agora?</a>
        </div>
        <template v-else v-for="(product, index) in stock">
          <v-list-tile :key="index + product.name" avatar ripple @click="openProduct(product)">
            <v-list-tile-content>
              <v-list-tile-title>{{ product.name }}</v-list-tile-title>

              <v-list-tile-sub-title>
                <span class="text--primary">Em estoque:</span>
                {{ product.quantityAvailable }}{{ product.unitOfMeasure }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < products.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-flex>
    <ManageStock
      :isVisible="showModal"
      :stock="stock"
      :selectedProduct="selectedProduct"
      @close="resetFields"
    />
    <v-btn fab bottom right color="pink" dark fixed @click="createProduct">
      <v-icon>add</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
import ManageStock from '../components/ManageStock.vue';

export default {
  data() {
    return {
      showModal: false,
      selectedProduct: {},
      products: [
        {
          id: 1,
          name: 'Açúcar Cristal',
          store: 'Fortali',
          packageQuantity: '1000',
          unitOfMeasure: 'g',
          unitPrice: 2.09,
          unitOfMeasurePrice: 2.09,
          quantityAvailable: '5000'
        },
        {
          id: 2,
          name: 'Brigadeiro Branco',
          store: 'Amêndoa',
          packageQuantity: '1400',
          unitOfMeasure: 'g',
          unitPrice: 30.85,
          unitOfMeasurePrice: 22.04,
          quantityAvailable: '1400'
        },
        {
          id: 3,
          name: 'Cerejas ao Marasquinho',
          store: 'Fortali',
          packageQuantity: '500',
          unitOfMeasure: 'g',
          unitPrice: 24.21,
          unitOfMeasurePrice: 48.42,
          quantityAvailable: '1000'
        },
        {
          id: 4,
          name: 'Chocolate Blend Sicao',
          store: 'Espaço Chef',
          packageQuantity: '1050',
          unitOfMeasure: 'g',
          unitPrice: 29.85,
          unitOfMeasurePrice: 29.7,
          quantityAvailable: '2100'
        },
        {
          id: 5,
          name: 'Essência de Manteiga',
          store: 'Empório Delice',
          packageQuantity: '30',
          unitOfMeasure: 'g',
          unitPrice: 2.06,
          unitOfMeasurePrice: 68.67,
          quantityAvailable: '30'
        }
      ]
    };
  },
  components: {
    ManageStock
  },
  methods: {
    openProduct(product) {
      this.showModal = true;
      this.selectedProduct = product;
    },
    createProduct() {
      this.showModal = true;
    },
    resetFields() {
      this.showModal = false;
      this.selectedProduct = {};
    }
  },
  computed: {
    stock() {
      return this.$store.getters.stock;
    },
    showLoading() {
      return this.$store.getters.isLoading;
    }
  },
  created() {
    this.$store.dispatch('toggleLoading', true);
    this.$store.dispatch('getStock');
  }
};
</script>
