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
              <CurrencyField :label="'Preço unitário teste'" @get-formatted-value="getFormattedValue" v-model="product.unitPrice" />
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
              <v-text-field
                label="Quantidade disponível"
                v-model="product.quantityAvailable"
                type="text"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-checkbox v-model="product.isUnmeasurable" label="Imensurável?"></v-checkbox>
            </v-flex>
            <v-flex xs12>
              <v-textarea label="Comentários" type="text" v-model="product.comments"></v-textarea>
            </v-flex>
            <v-flex xs12 class="text-xs-center" v-if="!showDeleteConfirmation">
              <v-spacer></v-spacer>
              <v-btn color="primary" v-if="product.id" @click="updateProduct">Salvar</v-btn>
              <v-btn color="error" v-if="product.id" @click="deleteProduct">Deletar</v-btn>
              <v-btn color="primary" v-if="!product.id" @click="addNewProduct">Criar</v-btn>
            </v-flex>
            <v-flex xs12 class="text-xs-center" v-if="showDeleteConfirmation">
              <v-spacer></v-spacer>
              <div>Deletar esse produto?</div>
              <v-btn color="primary" v-if="product.id" @click="confirmDeleteProduct">Sim</v-btn>
              <v-btn color="error" v-if="product.id" @click="unconfirmDeleteProduct">Não</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import CurrencyField from './CurrencyField.vue';

export default {
  data() {
    return {
      unitsOfMeasure: ['g', 'ml', 'unid.'],
      showDeleteConfirmation: false
    };
  },
  props: {
    isVisible: Boolean,
    selectedProduct: Object,
    stock: Array
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addNewProduct() {
      this.$store.dispatch('addNewProductToStock', this.product);
      this.$store.dispatch('getStock', this.stock);
      this.close();
    },
    updateProduct() {
      this.$store.dispatch('updateProduct', this.product);
      this.$store.dispatch('getStock', this.stock);
      this.close();
    },
    deleteProduct() {
      this.showDeleteConfirmation = true;
    },
    confirmDeleteProduct() {
      this.$store.dispatch('deleteProduct', this.product);
      this.$store.dispatch('getStock', this.stock);
      this.close();
    },
    unconfirmDeleteProduct() {
      this.showDeleteConfirmation = false;
    },
    getFormattedValue(formattedValue) {
      console.log(formattedValue);
    }
  },
  computed: {
    product() {
      return { ...this.selectedProduct };
    }
  },
  components: {
    CurrencyField
  }
};
</script>
