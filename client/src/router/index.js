import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Songs from '@/components/Songs';
import CreateSong from '@/components/CreateSong';
import Artist from '@/components/Artist';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/songs',
            name: 'songs',
            component: Songs
        },
        {
            path: '/create',
            name: 'createSong',
            component: CreateSong
        },
        {
            path: '/artist',
            name: 'artist',
            component: Artist
        }
    ]
});
