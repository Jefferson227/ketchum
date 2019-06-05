<template>
  <v-text-field :label="label" @keydown="updateText"></v-text-field>
</template>

<script>
export default {
  props: {
    label: String
  },
  methods: {
    updateText(event) {
      debugger;
      console.log(event);
      console.log(this);
    }
  }
}
</script>

<style>

</style>
