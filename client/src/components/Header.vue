<template>
    <v-toolbar class="cyan" 
    app fixed dense dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title dark>
            <v-btn flat @click="nevigateTo(`${title.route}`)">
                {{title.title}}
            </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn flat @click="nevigateTo(`${login.route}`)">{{login.title}}</v-btn>
            <v-btn flat @click="nevigateTo(`${signup.route}`)">{{signup.title}}</v-btn>
            <v-btn flat>Songs</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            title: {
                title: 'SongBook',
                route: '/'
            },
            signup: {
                title: 'Sign Up',
                route: 'register'
            },
            login: {
                title: 'Login',
                route: 'login'
            }
        }
    },
    methods: {
        nevigateTo(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style scoped>

</style>


