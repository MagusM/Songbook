<template>
  <v-app
    id="inspire"
    dark
  >
    <!-- DRAWER -->
    <AppNavigationDrawer></AppNavigationDrawer>
    <!-- END DRAWER -->
    
    <Header></Header>
    
    <v-content class="main">
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import AppNavigationDrawer from '@/components/AppNavigationDrawer.vue';
import Home from '@/components/Home.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

  export default {
    name: 'App',
    components: {
      AppNavigationDrawer,
      Home,
      Header,
      Footer
    },
    data: () => ({
      
    }),
    props: {
      
    },
    mounted: () => ({
      
    }),
    methods: {
      
    }
  }
</script>

<style scoped>
  
</style>
