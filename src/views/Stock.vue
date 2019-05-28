<template>
  <v-layout row>
    <v-flex xs12 sm6 lg12>
      <v-list two-line>
        <template v-for="(item, index) in items">
          <v-list-tile
            :key="item.title"
            avatar
            ripple
            @click="toggle(index)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.product }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.unitOfMeasure }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.package }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.quantityAvailable }}</v-list-tile-action-text>
              <v-icon
                v-if="selected.indexOf(index) < 0"
                color="grey lighten-1"
              >
                star_border
              </v-icon>

              <v-icon
                v-else
                color="yellow darken-2"
              >
                star
              </v-icon>
            </v-list-tile-action>

          </v-list-tile>
          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        selected: [2],
        items: [
          {
            quantityAvailable: '2',
            unitOfMeasure: 'Grama',
            product: 'Produto 1',
            package: "1000"
          },
          {
            quantityAvailable: '10',
            unitOfMeasure: 'Unidade',
            product: 'Produto 2',
            package: "14"
          },
          {
            quantityAvailable: '12',
            unitOfMeasure: 'Mililitro',
            product: 'Produto 3',
            package: "1000"
          },
          {
            quantityAvailable: '23',
            unitOfMeasure: 'Grama',
            product: 'Produto 4',
            package: "1000"
          },
          {
            quantityAvailable: '2',
            unitOfMeasure: 'Grama',
            product: 'Produto 4',
            package: "85"
          }
        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>