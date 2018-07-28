<template>
  <v-app>
    <Header/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>

</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

Footer {
  margin-top: auto;
}
</style>
