<template>
  <div class="login">
    <div >
    <h2>Login</h2>
      <form v-on:submit.prevent="login(user)">
        <label for="user.email">Email: </label>
          <input type="text" placeholder="Entrez votre email" v-model="user.email" /><br>
        <label for="user.password">Mot de passe: </label>
          <input type="text" placeholder="entrez votre mot de passe" v-model="user.password" /><br>
        <input type="submit" value="Login!">
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
// import axios from 'axios'

Vue.use(VueResource)

export default {
  name: 'Login',
  data () {
    return {
      user: { nom: '',
        prenom: '',
        email: '',
        password: ''
      } // fin user
    } // fin data return
  }, // fin data
  methods: {
    login (user) {
      // axios.post('http://127.0.0.1:8081/user/login', user)
      //   .then(response => {
      //     console.log(response)
      this.$store.commit('changeLog', true)
      this.$store.commit('changePage', 'tensorflow')
      //   })
    }
  } // fin methods
}
</script>

<style>
  .login {
    background-color: lightgrey;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>
