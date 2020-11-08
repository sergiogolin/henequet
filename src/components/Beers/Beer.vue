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
        v-if="isAlcoholicFree(beer)"
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
export default {
  name: 'Beer',
  props: {
    beer: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    maxAbvForAlcoholicFree: process.env.VUE_APP_MAX_ABV_FOR_NON_ALCOHOLIC
  }),
  methods: {
    showBeerDetails (beer) {
      this.$emit('show-beer-details', beer)
    },
    isAlcoholicFree (beer) {
      return beer.abv < this.maxAbvForAlcoholicFree
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
