<template>
  <v-footer app dense fixed height="auto" class="brown darken-4">
    <div class="white--text ml-3">
      Made with
      <v-icon class="red--text">favorite</v-icon>
      by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
      and <a class="white--text" href="https://github.com/MagusM" target="_blank">Simon Mor</a>
    </div>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>


<script>
export default {
    name: 'Footer',
    data: () => ({
      
    })
}
</script>

<style scoped>

</style>
