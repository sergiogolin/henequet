<template>
  <v-card>
    <v-card-title>{{ beer.name }}</v-card-title>
    <v-card-subtitle>
      <v-row>
        <v-col cols="6">
          {{ beer.tagline }}
        </v-col>
        <v-col cols="6">
          <div class="text-right font-italic">Contributed by: {{ beer.contributed_by }}</div>
        </v-col>
      </v-row>
    </v-card-subtitle>

    <v-divider></v-divider>

    <v-card-text style="height: 300px;">
      <v-row align="center">
        <v-col cols="5">
          <v-img
            :src="beer.image_url"
            contain
            max-height="300px"
          ></v-img>
        </v-col>
        <v-col cols="7">
          <p>{{ beer.description}}</p>
          <p>
            <span class="text-subtitle-2">First brewed:</span>
            {{ beer.first_brewed }}
          </p>

          <p v-if="beer.food_pairing">
            <span class="text-subtitle-2">Food pairing:</span>
            <ul>
              <li
                v-for="food in beer.food_pairing"
                :key="'food-' + food">
                {{ food }}
              </li>
            </ul>
          </p>

          <p v-if="beer.brewers_tips">
            <span class="text-subtitle-2">Brewers tips:</span>
            <br />
            <span>{{ beer.brewers_tips }}</span>
          </p>
        </v-col>
      </v-row>

      <v-row class="bottom-section">
        <v-col cols="4">
          <p class="text-subtitle-2">Ingredients:</p>
          <p v-if="beer.ingredients.malt">
            Malt:
            <ul>
              <li
                v-for="(ingredient, idx) in beer.ingredients.malt"
                :key="'malt-' + idx">
                {{ ingredient.amount.value }} {{ ingredient.amount.unit }} {{ ingredient.name }}

              </li>
            </ul>
          </p>
          <p v-if="beer.ingredients.hops">
            Hops:
            <ul>
              <li
                v-for="(ingredient, idx) in beer.ingredients.hops"
                :key="'hops-' + idx">
                {{ ingredient.amount.value }} {{ ingredient.amount.unit }} {{ ingredient.name }}
              </li>
            </ul>
          </p>
          <p v-if="beer.ingredients.yeast">Yeast: {{ beer.ingredients.yeast }}</p>

        </v-col>

        <v-col cols="4">
          <p class="text-subtitle-2">Method:</p>
          <p v-if="beer.method.mash_temp">
            Mash temp:
            <ul>
              <li
                v-for="(mashTempItem, idx) in beer.method.mash_temp"
                :key="'mashTemp-' + idx">
                {{ mashTempItem.temp.value }} {{ mashTempItem.temp.unit }}, {{ mashTempItem.duration }} minutes
              </li>
            </ul>
          </p>

          <p v-if="beer.method.fermentation">
            Fermentation: {{ beer.method.fermentation.temp.value }} {{ beer.method.fermentation.temp.unit }}
          </p>

          <p v-if="beer.method.twist">
            Twist: {{ beer.method.twist }}
          </p>
        </v-col>

        <v-col cols="4">
          <dl class="other-data">
            <dt>ABV</dt>
            <dd>{{ beer.abv }}</dd>

            <dt>IBU</dt>
            <dd>{{ beer.ibu }}</dd>

            <dt>Target FG</dt>
            <dd>{{ beer.target_fg }}</dd>

            <dt>Target OG</dt>
            <dd>{{ beer.target_og }}</dd>

            <dt>EBC</dt>
            <dd>{{ beer.ebc }}</dd>

            <dt>SRM</dt>
            <dd>{{ beer.srm }}</dd>

            <dt>PH</dt>
            <dd>{{ beer.ph }}</dd>

            <dt>Attenuation level</dt>
            <dd>{{ beer.attenuation_level }}</dd>

            <dt>Volume</dt>
            <dd>{{ beer.volume.value }} {{ beer.volume.unit }}</dd>

            <dt>Boil volume</dt>
            <dd>{{ beer.boil_volume.value }} {{ beer.boil_volume.unit }}</dd>
          </dl>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        text
        @click="$emit('close')"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'BeerDetails',
  props: {
    beer: {
      default: Object,
      required: true
    }
  },
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .bottom-section {
    & > .col:not(:last-child) {
      border-right: 1px solid #ccc;
    }
  }

  dl.other-data {
    display: flex;
    flex-flow: row wrap;

    dt {
      flex-basis: 50%;
      padding: 2px 4px;
      font-weight: 600;
    }
    dd {
      flex-basis: 50%;
      flex-grow: 1;
      margin: 0;
      padding: 2px 4px;
    }
  }
</style>
