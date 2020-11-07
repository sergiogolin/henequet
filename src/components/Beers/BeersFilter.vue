<template>
  <v-container
    class="beer-filter">
    <v-row>
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
                  label="Start date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filterModel.startDate"
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
                  label="End date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filterModel.endDate"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

      </v-col>

      <v-col
        cols="3"
      >
        Botón
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
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
      { text: 'Non-alcoholic', value: 'non-alcoholic' }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .beer-filter {
    padding: 0 2rem;
    border: 1px solid black;
    background-color: #fefbcb;
  }
</style>
