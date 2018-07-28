import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        drawer: false
    },
    mutations: {
        setToken (state, token) {
            state.token = token;
            if (token) {
                state.isUserLoggedIn = true;
            } else {
                state.isUserLoggedIn = false;
            }
        },
        setUser (state, user) {
            state.user = user;
        },
        setDrawer(state) {
            state.drawer = !state.drawer;
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token);
        },
        setUser ({commit}, user) {
            commit('setUser', user);
        },
        setDrawer ({commit}) {
            commit('setDrawer');
        }
    }
});

export default store;
