<template>
  <v-container>
    <v-row>
      <v-col>
        <BeersFilter />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          color="primary"
          rounded
          @click="getRandomBeer"
        >
          <v-icon>mdi-beer</v-icon>
          Choose for me
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="beer in beers"
        :key="'beer-' + beer.id"
        cols="3"
      >
        <Beer
          :beer="beer"
          @show-beer-details="showDetails" />
      </v-col>
    </v-row>

    <v-dialog
      v-model="isShowingDetails"
      scrollable
      max-width="900px"
    >
      <beer-details
        :beer="beerForDetails"
        @close="isShowingDetails = false" />
    </v-dialog>
  </v-container>
</template>

<script>
import BeersFilter from '@/components/beers/BeersFilter'
import Beer from '@/components/beers/Beer'
import BeerDetails from '@/components/beers/BeerDetails'

import { getAllBeers, getRandomBeer } from '@/components/beers/beersService'

export default {
  name: 'BeersList',
  components: {
    BeersFilter,
    Beer,
    BeerDetails
  },
  data: () => ({
    beers: [],
    beerForDetails: null,
    isShowingDetails: false
  }),
  methods: {
    showDetails (beer) {
      this.beerForDetails = beer
      this.isShowingDetails = true
    },
    getRandomBeer () {
      getRandomBeer()
        .then(({ data }) => {
          if (data) {
            this.beerForDetails = data[0]
            this.isShowingDetails = true
          }
        })
        .finally(() => {
        })
    },
    fetchInitialData () {
      getAllBeers()
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
