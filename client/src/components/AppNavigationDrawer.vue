<template>
    <v-navigation-drawer
      v-model="$store.state.drawer"  
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="nevigateTo(item.route)">
          <v-list-tile-action>
              <v-icon some></v-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>    
</template>

<script>
export default {
    name: "AppNavigationDrawer",
    components: {},
    props: {
        source: String
    },
    data: () => ({
        items: [
            { icon: 'trending_up', text: 'Most Popular', route: "/songs" },
            { icon: 'subscriptions', text: 'Subscriptions', route: "" },
            { icon: 'history', text: 'History', route: "" },
            { icon: 'featured_play_list', text: 'Playlists', route: "" },
            { icon: 'watch_later', text: 'Watch Later', route: "" }
        ],
        items2: [
            { picture: 28, text: 'Joseph' },
            { picture: 38, text: 'Apple' },
            { picture: 48, text: 'Xbox Ahoy' },
            { picture: 58, text: 'Nokia' },
            { picture: 78, text: 'MKBHD' }
        ]
    }),
    watch: {
        
    },
    mounted() {
        
    },
    methods: {
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

</style>

