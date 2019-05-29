<template>
  <v-layout row justify-center>
    <v-dialog v-model="isVisible" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="close">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Legal first name*" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Email*" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-flex>
            <v-flex xs12>
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="close">Save</v-btn>
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
    return {};
  },
  props: {
    isVisible: Boolean
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>
