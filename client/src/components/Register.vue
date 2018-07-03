<template>
  <v-layout column>
    <v-flex xs3>
      <panel title="Register">
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
          @click="register">
            Register
          </v-btn>
          <br>
          <v-alert :value="false" type="error" v-html="error">
            This is a error alert.
          </v-alert>
          <!-- <div class="error" v-html="error"></div> -->
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/components/Panel.vue";

export default {
  name: "Register",
  components: {
      Panel  
    },
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
          const isValidPassword = RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]").test(value);
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
        this.$store.dispatch('setToken', response.data.token); //updated token
        this.$store.dispatch('setUser', response.data.user); //updated token
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
