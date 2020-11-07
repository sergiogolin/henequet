<template>
  <v-container>
    <v-row>
      <v-col>
        <BeersFilter />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="beer in beers"
        :key="'beer-' + beer.id"
        cols="3"
      >
        <Beer
          :beer="beer" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BeersFilter from '@/components/beers/BeersFilter'
import Beer from '@/components/beers/Beer'

import { getAllBeers } from '@/components/beers/beersService'

export default {
  name: 'BeersList',
  components: {
    BeersFilter,
    Beer
  },
  data: () => ({
    beers: []
  }),
  methods: {
    async fetchInitialData () {
      await getAllBeers()
        .then(({ data }) => {
          this.beers = data
        })
        .finally(() => {
        })
    }
  },
  created () {
    this.fetchInitialData()
  }
}
</script>
