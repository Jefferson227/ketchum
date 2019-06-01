<template>
  <v-layout row justify-center>
    <v-dialog v-model="isVisible" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{product.name || 'Novo produto'}}</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Produto*" v-model="product.name" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Local" v-model="product.store"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Embalagem*" v-model="product.packageQuantity" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-select
                :items="unitsOfMeasure"
                v-model="product.unitOfMeasure"
                label="Unidade de medida*"
                required
              ></v-select>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Preço unitário*"
                v-model="product.unitPrice"
                type="text"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Preço por unidade de medida*"
                v-model="product.unitOfMeasurePrice"
                type="text"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea label="Comentários" type="text" v-model="product.comments"></v-textarea>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-spacer></v-spacer>
              <v-btn color="primary" v-if="product.id" @click="close">Salvar</v-btn>
              <v-btn color="primary" v-if="!product.id" @click="addNewProduct">Criar</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      unitsOfMeasure: ['g', 'ml', 'unid.']
    };
  },
  props: {
    isVisible: Boolean,
    selectedProduct: Object
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addNewProduct() {
      this.$store.dispatch('addNewProductToStock', this.product);
    }
  },
  computed: {
    product() {
      return { ...this.selectedProduct };
    }
  }
};
</script>
