<template>
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
    
      <v-toolbar-side-icon v-if="!$store.state.isUserLoggedIn" @click="toggleDrawer()"></v-toolbar-side-icon>
      <!-- <v-icon class="mx-3">fab fa-youtube</v-icon> change this icon--> 
      <v-toolbar-title class="mr-5 align-center">
        <span class="title" @click="nevigateTo(`${navigation.root.route}`)">SongBook</span>
      </v-toolbar-title>
      <div class="text-xs-center" dark>
          <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            @click="nevigateTo(`${navigation.login.route}`)"
            small
            round
            dark
            outline
        >
            {{navigation.login.title}}
        </v-btn>
      </div>
      
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
      <div class="text-xs-center" dark>
          <v-btn 
            v-if="$store.state.isUserLoggedIn"
            @click="nevigateTo(`${navigation.signout.route}`)"
            small
            round
            light
            outline
        >
            {{navigation.signout.title}}
        </v-btn>
      </div>
    </v-toolbar>
</template>

<script>
export default {
    name: "Header",
    components: {

    },
    props: {
        
    },
    data() {
        return {
            navigation: {
                root: {
                    title: 'SongBook',
                    route: '/'
                },
                signup: {
                    title: 'Sign Up',
                    route: 'register'
                },
                signout: {
                    title: 'Sign Out',
                    route: '/'
                },
                login: {
                    title: 'Login',
                    route: 'login'
                }
            }
        }
    },
    mounted() {

    },
    methods: {
        toggleDrawer() {
            this.$store.dispatch('setDrawer');
        },
        nevigateTo(route) {
            if ('signout' == route) {
                this.$store.dispatch('setToken', null); //updated token
                this.$store.dispatch('setUser', null); //updated token
                this.$router.push(route);
            }
            this.$router.push(route);
        }
    }    
}
</script>

<style scoped>
    .title {
        cursor: pointer;
    }
</style>

