<template>
  <v-layout column>
    <v-flex xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register Page</v-toolbar-title>
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
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Normal with hint text</v-subheader>
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
              ></v-text-field>
            </v-flex>
            </v-layout>

          <v-btn class="cyan"
          ripple
          @click="register">
            Register
            </v-btn>
            <br>
            <div class="error" v-html="error"></div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      e1: false,
      email: "",
      password: "",
      error: null
    };
  },
  watch: {
    email(value) {
      //this watches changes made, for example to email porp that is binded with email inpur
    }
  },
  mounted() {
    //funtion can be executed when page is mounted to screen
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
