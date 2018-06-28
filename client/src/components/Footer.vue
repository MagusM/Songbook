<template>
  <v-footer fixed height="auto" class="cyan darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>Simon Mor</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>
export default {
    name: 'Footer',
    data: () => ({
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    })
}
</script>

<style scoped>

</style>
