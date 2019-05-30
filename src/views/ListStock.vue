<template>
  <v-layout row>
    <v-flex xs12 sm6 lg12>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="item.title" avatar ripple @click="openItem(item)">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.productName }}</v-list-tile-title>

              <v-list-tile-sub-title>
                <span class="text--primary">Em estoque:</span>
                {{ item.quantityAvailable }}{{ item.unitOfMeasure }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-flex>
    <ManageStock :isVisible="showModal" :selectedProduct="selectedProduct" @close="resetFields"/>
    <v-btn fab bottom right color="pink" dark fixed @click="createItem">
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
      items: [
        {
          id: 1,
          productName: 'Açúcar Cristal',
          store: 'Fortali',
          packageQuantity: '1000',
          unitOfMeasure: 'g',
          unitPrice: 2.09,
          unitOfMeasurePrice: 2.09,
          quantityAvailable: '5000'
        },
        {
          id: 2,
          productName: 'Brigadeiro Branco',
          store: 'Amêndoa',
          packageQuantity: '1400',
          unitOfMeasure: 'g',
          unitPrice: 30.85,
          unitOfMeasurePrice: 22.04,
          quantityAvailable: '1400'
        },
        {
          id: 3,
          productName: 'Cerejas ao Marasquinho',
          store: 'Fortali',
          packageQuantity: '500',
          unitOfMeasure: 'g',
          unitPrice: 24.21,
          unitOfMeasurePrice: 48.42,
          quantityAvailable: '1000'
        },
        {
          id: 4,
          productName: 'Chocolate Blend Sicao',
          store: 'Espaço Chef',
          packageQuantity: '1050',
          unitOfMeasure: 'g',
          unitPrice: 29.85,
          unitOfMeasurePrice: 29.7,
          quantityAvailable: '2100'
        },
        {
          id: 5,
          productName: 'Essência de Manteiga',
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
    openItem(product) {
      this.showModal = true;
      this.selectedProduct = product;
    },
    createItem() {
      this.showModal = true;
    },
    resetFields() {
      this.showModal = false;
      this.selectedProduct = {};
    }
  }
};
</script>
