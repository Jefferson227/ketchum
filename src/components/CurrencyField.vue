<template>
  <v-text-field :label="label" @keydown="updateText"></v-text-field>
</template>

<script>
const fieldHasOnlyNumbers = event => {
  return (
    event.code.includes('Backspace') ||
    event.code.includes('Digit') ||
    event.code.includes('Numpad') ||
    event.key === 'Backspace' ||
    event.key === 'Delete'
  );
};

export default {
  props: {
    label: String
  },
  methods: {
    updateText(event) {
      if (!fieldHasOnlyNumbers(event)) {
        event.preventDefault();
        return;
      }
      this.$emit('get-formatted-value', event.target.value.concat(event.key));
    }
  }
};
</script>

<style>
</style>
