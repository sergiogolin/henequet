<template>
  <v-app-bar
    app
    color="primary"
    class="white--text"
    flat
  >
    <v-app-bar-nav-icon
      name="logo">
      <v-img
        :src="require('@/assets/beer-logo.svg')"
        contain
        height="40"
      />
    </v-app-bar-nav-icon>
    <v-toolbar-title>
      Henequet Brewery
    </v-toolbar-title>
    <!-- <v-container class="py-0 fill-height">
      <v-btn
        v-for="link in links"
        :key="link"
        text
      >
        {{ link }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container> -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    links: []
  })
}
</script>
