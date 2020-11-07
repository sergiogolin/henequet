<template>
  <v-card
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
  }),
  methods: {
    showBeerDetails (beer) {
      console.log('show details')
      console.log(beer)
    }
  }
}
</script>

<style lang="scss" scoped>
  .word-wrap {
    word-break: break-word;
  }
</style>
