<template>
  <v-layout row>
    <v-flex xs12 sm6 lg12>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="item.title" avatar ripple @click="openItem(index.id)">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.productName }}</v-list-tile-title>

              <v-list-tile-sub-title>
                <span class="text--primary">Em estoque:</span>
                {{ item.quantityAvailable }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-flex>
    <ManageStock :isVisible="showModal" @close="showModal = false"/>
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
      items: [
        {
          id: 1,
          quantityAvailable: '5000g',
          productName: 'Açúcar Cristal'
        },
        {
          id: 2,
          quantityAvailable: '2475g',
          productName: 'Alpino em Pó'
        },
        {
          id: 3,
          quantityAvailable: '500g',
          productName: 'Chocolate Meio Amargo Melken'
        },
        {
          id: 4,
          quantityAvailable: '2000ml',
          productName: 'Chantilly Amélia Mix'
        },
        {
          id: 5,
          quantityAvailable: '2010ml',
          productName: 'Chocolate Blend Sicao'
        }
      ]
    };
  },
  components: {
    ManageStock
  },
  methods: {
    openItem(itemId) {
      this.showModal = true;
    },
    createItem() {
      this.showModal = true;
    }
  }
};
</script>