<template>
    <v-layout column>
    <v-flex xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pd-4 pr-4 pt-2 pb-2">
          <v-layout row>
            <v-flex xs4>
              <v-subheader>Email</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="email"
                v-model="email"
                name="email"
                label="Insert you Email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Password</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="password"
                v-model="password"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                name="password"
                label="Enter your password"
                hint="At least 8 characters"
                min="8"
                counter
                :rules="[rules.required, rules.password]"
              ></v-text-field>
            </v-flex>
            </v-layout>

          <v-btn class="cyan"
          ripple dark
          @click="login">
            Login
          </v-btn>
          <br>
          <v-alert :value="false" type="error" v-html="error">
            This is a error alert.
          </v-alert>
          <!-- <div class="error" v-html="error"></div> -->
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
    name: 'Login',
    data() {
        return {
            e1: false,
            email: "",
            password: "",
            error: null,
            rules: {
                required: (value) => !!value || 'Required.',
                    email: (value) => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                },
                    password: (value) => {
                    const shortMsg = 'Password too short.';
                    const invalidMsg = 'Password nust contain valid characters.'
                    const isLong = value.length > 8;
                    // const isValidPassword = RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]").test(value);
                    const isValidPassword = RegExp(/^[a-z0-9]+$/i).test(value);
                    if (!isLong && !isValidPassword) {
                        return `${shortMsg} / ${invalidMsg}`;
                    } 
                    else if (isLong && !isValidPassword) {
                        return invalidMsg;
                    }
                    else if (!isLong && isValidPassword) {
                        return shortMsg;
                    } 
                    else {
                        return true;
                    }
                }
            }
        }
    },
    methods: {
        async login() {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                });
                this.$store.dispatch('setToken', response.data.token); //updated token
                this.$store.dispatch('setUser', response.data.user); //updated token
                this.$store.dispatch('isUserLoggedIn', true);
            } catch (error) {
                this.error = error.response.data.error;
            }
        }
    }
}
</script>

<style scoped>

</style>


