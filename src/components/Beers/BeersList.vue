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

    <Paginator
      :page="pagination.page"
      @previous-page="showPreviousPage"
      @next-page="showNextPage"
    />

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
import { mapActions, mapGetters } from 'vuex'
import { getRandomBeer } from '@/components/Beers/beersService'

export default {
  name: 'BeersList',
  components: {
    BeersFilter: () => import('@/components/Beers/BeersFilter'),
    Beer: () => import('@/components/Beers/Beer'),
    BeerDetails: () => import('@/components/Beers/BeerDetails'),
    Paginator: () => import('@/components/shared/Paginator')
  },
  data: () => ({
    beerForDetails: null,
    isShowingDetails: false
  }),
  computed: {
    ...mapGetters({
      beers: 'getData',
      pagination: 'getPagination',
      filters: 'getFilters'
    })
  },
  methods: {
    ...mapActions([
      'fetchDataPage',
      'previousPage',
      'nextPage'
    ]),
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
    showPreviousPage () {
      this.previousPage()
    },
    showNextPage () {
      this.nextPage()
    }
  },
  created () {
    this.fetchDataPage()
  }
}
</script>
