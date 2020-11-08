<template>
  <v-container
    class="beer-filter">
    <v-row align="center">
      <v-col
        cols="9"
      >

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="filterModel.name"
              label="Name">
            </v-text-field>
          </v-col>

          <v-col cols="6">
            <v-select
              :items="alcoholicOptions"
              v-model="filterModel.type"
              label="Type">
            </v-select>
          </v-col>

          <v-col cols="6">
            <v-menu
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filterModel.startDate"
                  label="Brewed after"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filterModel.startDate"
                type="month"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="6">
            <v-menu
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filterModel.endDate"
                  label="Brewed before"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filterModel.endDate"
                type="month"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

      </v-col>

      <v-col
        cols="3"
        class="text-right"
        align="center"
      >
        <v-btn
          color="primary"
          class="mb-5"
          @click="filterBeers">
          <v-icon>mdi-filter</v-icon>
          Filter
        </v-btn>
        <v-btn
          color="primary"
          @click="clearFilter">
          <v-icon>mdi-close</v-icon>
          Clear
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BeersFilter',
  data: () => ({
    filterModel: {
      name: null,
      startDate: null,
      endDate: null,
      type: 'all'
    },
    alcoholicOptions: [
      { text: 'All', value: 'all' },
      { text: 'Alcoholic', value: 'alcoholic' },
      { text: 'Alcohol-free', value: 'alcohol-free' }
    ]
  }),
  methods: {
    ...mapActions([
      'filterData'
    ]),
    filterBeers () {
      this.filterData(this.filterModel)
    },
    clearFilter () {
      this.filterModel = {
        name: null,
        startDate: null,
        endDate: null,
        type: 'all'
      }
      this.filterBeers()
    }
  }
}
</script>

<style lang="scss" scoped>
  .beer-filter {
    padding: 0 2rem;
    border-radius: 8px;
    background-color: white;
  }
</style>
