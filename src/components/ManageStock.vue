<template>
  <v-layout row justify-center>
    <v-dialog v-model="isVisible" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{product}}</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Produto*" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Local"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Embalagem*" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-select :items="unitsOfMeasure" label="Unidade de medida*" required></v-select>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Preço unitário*" type="text" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Preço por unidade de medida*" type="text" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea label="Comentários" type="text"></v-textarea>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="close">Salvar</v-btn>
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
      unitsOfMeasure: ['Grama', 'Mililitro', 'Unidade'],
      product: {
        id: this.selectedProduct.id,
        productName: this.selectedProduct.productName,
        store: this.selectedProduct.store,
        packageQuantity: this.selectedProduct.packageQuantity,
        unitOfMeasure: this.selectedProduct.unitOfMeasure,
        unitPrice: this.selectedProduct.unitPrice,
        unitOfMeasurePrice: this.selectedProduct.unitOfMeasurePrice,
        quantityAvailable: this.selectedProduct.quantityAvailable
      }
    };
  },
  props: {
    isVisible: Boolean,
    selectedProduct: Object
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>
