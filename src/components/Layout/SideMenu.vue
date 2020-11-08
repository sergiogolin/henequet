<template>
  <v-sheet rounded="lg" class="yellow lighten-2">
    <v-list color="transparent">
      <v-list-item
        v-for="link in links"
        :key="link.text"
        link
        active-class="primary white--text"
        :disabled="link.disabled"
        :to="link.href"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: 'SideMenu',
  data: () => ({
    links: [
      {
        text: 'Beers',
        href: 'beers',
        disabled: false
      },
      {
        text: 'Wines',
        href: 'wines',
        disabled: true
      },
      {
        text: 'Spirits',
        href: 'spirits',
        disabled: true
      },
      {
        text: 'Cocktails',
        href: 'cocktails',
        disabled: true
      },
      {
        text: 'Juices',
        href: 'juices',
        disabled: true
      }
    ]
  })
}
</script>
