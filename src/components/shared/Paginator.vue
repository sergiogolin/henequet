<template>
  <v-row>
    <v-col cols="6">
      <v-btn
        color="primary"
        :disabled="page.toString() === '1'"
        @click="$emit('previous-page')"
      >
        <v-icon>mdi-chevron-left</v-icon>
        Previous
      </v-btn>
    </v-col>
    <v-col cols="6" class="text-right">
      <v-btn
        color="primary"
        @click="$emit('next-page')"
      >
        Next
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    page: {
      type: [String, Number],
      default: null
    }
  }
}
</script>
