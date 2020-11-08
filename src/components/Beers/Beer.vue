<template>
  <v-card
    class="beer-card"
    hover
    @click="showBeerDetails(beer)"
  >
    <v-row>
      <v-col>
        <v-img
          :src="beer.image_url"
          contain
          max-height="200px"
        ></v-img>
      <p
        v-if="isAlcoholFree(beer)"
        class="alcohol-free">
        Alcohol-free
      </p>
      </v-col>
    </v-row>
    <v-card-title
      class="justify-center word-wrap">
      <span class="text-center">{{ beer.name }}</span>
    </v-card-title>
    <v-card-subtitle
      class="text-center word-wrap">
      {{ beer.tagline }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Beer',
  props: {
    beer: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      maxAbvForNonAlcoholic: 'getMaxAbvForNonAlcoholic'
    })
  },
  methods: {
    showBeerDetails (beer) {
      this.$emit('show-beer-details', beer)
    },
    isAlcoholFree (beer) {
      return beer.abv < this.maxAbvForNonAlcoholic
    }
  }
}
</script>

<style lang="scss" scoped>
  .beer-card {
    position: relative;
    overflow: hidden;
  }

  .alcohol-free {
    position: absolute;
    display: block;
    padding: 6px 45px;
    background: royalblue;
    color: white;
    font-size: 80%;
    font-weight: 500;
    top: 10px;
    right: -35px;
    transform: rotate(30deg);
  }

  .word-wrap {
    word-break: break-word;
  }
</style>
