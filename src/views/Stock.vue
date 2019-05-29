<template>
  <v-layout row>
    <v-flex xs12 sm6 lg12>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
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
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      selected: [2],
      items: [
        {
          quantityAvailable: '5000g',
          productName: 'Açúcar Cristal'
        },
        {
          quantityAvailable: '2475g',
          productName: 'Alpino em Pó'
        },
        {
          quantityAvailable: '500g',
          productName: 'Chocolate Meio Amargo Melken'
        },
        {
          quantityAvailable: '2000ml',
          productName: 'Chantilly Amélia Mix'
        },
        {
          quantityAvailable: '2010ml',
          productName: 'Chocolate Blend Sicao'
        }
      ]
    };
  },

  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    }
  }
};
</script>