<template>
  <v-text-field :label="label" @keydown="updateText"></v-text-field>
</template>

<script>
const fieldHasOnlyNumbers = event => {
  return event.code.startsWith('Digit') || event.key === 'Backspace' || event.key === 'Delete';
};

export default {
  props: {
    label: String
  },
  methods: {
    updateText(event) {
      // debugger;
      console.log(event.code);
      if (!fieldHasOnlyNumbers(event)) {
        event.preventDefault();
        return;
      }
      // this.$emit('get-formatted-value', event.target.value.concat(event.key));
    }
  }
};
</script>

<style>
</style>
