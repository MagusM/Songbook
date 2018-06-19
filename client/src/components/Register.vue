<template>
    <div>
      <h1>Register Page</h1>

      <input type="email" name="email" id="email" placeholder="Email" v-model="email">
      <br>
      <input type="password" name="password" id="password" placeholder="Password" v-model="password">
      <br>
      <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      //this watches changes made, for example to email porp that is binded with email inpur
    }
  },
  mounted () {
    //funtion can be executed when page is mounted to screen
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
