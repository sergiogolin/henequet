<template>
  <v-app id="inspire">

    <Header />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <side-menu />
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Header from './components/Layout/Header'
import SideMenu from './components/Layout/SideMenu'

export default {
  name: 'App',

  components: {
    Header,
    SideMenu
  },

  data: () => ({
  })
}
</script>
