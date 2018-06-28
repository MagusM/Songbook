<template>
    <v-toolbar class="cyan" 
    app fixed dense dark>
        <v-toolbar-side-icon>
            <!-- put here drop down? -->
        </v-toolbar-side-icon>
        <v-toolbar-title dark>
            <v-btn flat @click="nevigateTo(`${root.route}`)">
                {{root.title}}
            </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="nevigateTo(`${login.route}`)">{{login.title}}</v-btn>
            <v-btn flat v-if="!$store.state.isUserLoggedIn" @click="nevigateTo(`${signup.route}`)">{{signup.title}}</v-btn>
            <v-btn flat>Songs</v-btn>
            <v-btn flat v-if="$store.state.isUserLoggedIn" @click="nevigateTo(`${signout.route}`)">{{signout.title}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
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


