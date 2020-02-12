<template>
  <div class="login">
    <div >
    <h2>Login</h2>
      <form v-on:submit.prevent="login(user2log)">
        <label for="user.email">Email: </label>
          <input type="text" placeholder="Entrez votre email" v-model="user2log.email" /><br>
        <label for="user.password">Mot de passe: </label>
          <input type="text" placeholder="entrez votre mot de passe" v-model="user2log.password" /><br>
        <input type="submit" value="Login!">
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource)

export default {
  name: 'Login',
  data () {
    return {
      user2log: {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        isAdmin: '0'
      }
    } // fin data return
  }, // fin data
  methods: {
    login (user2log) {
      axios.post('http://127.0.0.1:8081/user/login', user2log)
        .then(response => {
          console.log(response.data)
          this.user2log.id = response.data.id
          this.user2log.nom = response.data.nom
          this.user2log.prenom = response.data.prenom
          this.user2log.isAdmin = response.data.admin
        this.$store.commit('changeLog', true)
        this.$store.commit('changeUser', user2log)
        this.$store.commit('changePage', 'home')
        })
    }
  } // fin methods
}
</script>

<style>
  .login {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>
