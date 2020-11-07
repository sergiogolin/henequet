<template>
  <v-sheet rounded="lg">
    <v-list color="transparent">
      <v-list-item
        v-for="link in links"
        :key="link.text"
        link
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
        text: 'Cervezas',
        href: 'beers',
        disabled: false
      },
      {
        text: 'Vinos',
        href: 'wines',
        disabled: true
      },
      {
        text: 'Licores',
        href: 'spirits',
        disabled: true
      },
      {
        text: 'Combinados',
        href: 'cocktails',
        disabled: true
      },
      {
        text: 'Zumos',
        href: 'juices',
        disabled: true
      }
    ]
  })
}
</script>
