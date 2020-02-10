<template>
  <div class="register">
    <div >
      <h2>Register</h2>
      <form v-on:submit.prevent="register(newUser)">
        <label for="nom">Nom: </label>
          <input type="text" placeholder="Entrez votre nom" v-model="newUser.Nom" /><br>
        <label for="user.prenom">Prénom: </label>
          <input type="text" placeholder="Entrez votre prénom" v-model="newUser.Prenom" /><br>
        <label for="user.email">Email: </label>
          <input type="text" placeholder="Entrez votre email" v-model="newUser.Email" /><br>
        <label for="user.password">Mot de passe: </label>
          <input type="text" placeholder="entrez votre mot de passe" v-model="newUser.Password" /><br>
        <label for="user.password2">Confirmation du mot de passe: </label>
          <input type="text" placeholder="confirmez votre mot de passe" v-model="newUser.Password2" /><br>
        <input type="submit" value="Enregistre toi!">
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
  name: 'Register',
  data () {
    return {
      newUser: { nom: '',
        prenom: '',
        email: '',
        password: ''
      } // fin newuser
    } // fin data return
  }, // fin data
  methods: {
    register (newUser) {
      this.$store.commit('changePage', 'login')
      // axios.post('http://127.0.0.1:8081/user', newUser)
      //   .then(response => {
      //     console.log('res', response)
      //   })
      //   .catch(error => { console.log(JSON.stringify(error)) })
    } // fin register
  } // fin methods
}
</script>

<style>
  .register{
    margin: 10px;
    background-color: white;
    color: black;
  }
</style>
