<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="product" label="Produto" required></v-text-field>

    <v-text-field v-model="store" label="Local" required></v-text-field>

    <v-text-field v-model="packing" label="Embalagem" required></v-text-field>

    <v-select v-model="unitOfMeasure" :items="unitsOfMeasure" label="Unidade de medida" required></v-select>

    <v-text-field v-model="unitPrice" label="Preço unitário" required></v-text-field>

    <v-text-field v-model="priceByUnitOfMeasure" label="Preço por kg/litro" required></v-text-field>

    <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    product: '',
    store: '',
    packing: '',
    unitOfMeasure: null,
    unitsOfMeasure: ['Grama', 'Mililitro', 'Unidade'],
    unitPrice: '',
    priceByUnitOfMeasure: ''
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>

<style>
</style>

