<template>
  <div class="userProfile">
    <div >
      <h2>User profile</h2>
      <table>
        <tr>
          <td>Nom:</td>
          <td><input type="text" :placeholder='this.$store.state.user.nom' v-model="profile.nom" /></td>
          <td><button @click="updateNom(profile.nom)">Mettre à jour votre nom</button></td>
        </tr>
        <tr>
          <td>Prénom:</td>
          <td><input type="text" :placeholder='this.$store.state.user.prenom' v-model="profile.prenom" /></td>
          <td><button @click="updatePrenom(profile.prenom)">Mettre à jour votre prénom</button></td>
        </tr>
        <tr>
          <td>Email:</td>
          <td><input type="text" :placeholder='this.$store.state.user.email' v-model="profile.email" /></td>
          <td>Ne peut pas être modifié</td>
        </tr>
        <tr>
          <td>Mot de passe:</td>
          <td><input type="text" placeholder='' v-model="profile.password" /></td>
        </tr>
        <tr>
          <td>Confirmez le nouveau mot de passe:</td>
          <td><input type="text" placeholder='' v-model="profile.password2" /></td>
          <td><button @click="updatePassword(profile.password, profile.password2)">Mettre à jour votre mot de passe</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource)

export default {
  name: 'Profile',
  data () {
    return {
      profile: {
        nom: '',
        prenom: '',
        email: '',
        password: ''
      }
    } // fin data return
  }, // fin data
  methods: {
    updateNom(newName) {
      var change = {'data': "nom", 'value': newName}
      axios.put('http://127.0.0.1:8081/user/' + this.$store.state.user.id, change)
        .then(response => {
          console.log('res', response)
        })
        .catch(error => { console.log(JSON.stringify(error)) })
    }, // fin updateNom
    updatePrenom(newPrenom) {
      var change = {'data': "prenom", 'value': newPrenom}
      axios.put('http://127.0.0.1:8081/user/' + this.$store.state.user.id, change)
        .then(response => {
          console.log('res', response)
        })
        .catch(error => { console.log(JSON.stringify(error)) })
    },  // fin updateNom
    updatePassword(newPassword, passwordVerif) {
      if (newPassword == passwordVerif) {
        var change = {'data': "password", 'value': newPassword}
        axios.put('http://127.0.0.1:8081/user/' + this.$store.state.user.id, change)
          .then(response => {
            console.log('res', response)
          })
          .catch(error => { console.log(JSON.stringify(error)) })
      } else {
        console.log("Les mots de passe ne correspondent pas")
      }
    }  // fin updatePassword
  } // fin methods
}
</script>

<style>
  .login {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  table {
    margin: auto;
  }
</style>
