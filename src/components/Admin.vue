<template>
  <div class="adminPage">
    <div>
      <h2>Admin page</h2>
      <div class="adminContainer">
        <div>
          <table class="adminTable">
            <tr><td><input type="text" placeholder="Recherche" v-model="needle" /></td><td><button @click="getUsers(needle)">Search!</button></td></tr>
            <tr v-for="result in searchResult">
              <td>{{result}}</td>
              <td><button @click="getUserInfo(result)">Modify user</button></td>
              <td><button @click="deleteUser(result)">Delete user</button></td>
            </tr>
          </table>
        </div>
         <table class="adminTable">
          <tr>
            <td>Id:</td>
            <td>{{userProfile.id}}</td>
            <td>Ne peut pas être modifié</td>
          </tr>
          <tr>
            <td>Nom:</td>
            <td><input type="text" :placeholder='userProfile.nom' v-model="userProfile.nom" /></td>
            <td><button @click="updateNom(userProfile.nom)">Mettre à jour le nom</button></td>
          </tr>
          <tr>
            <td>Prénom:</td>
            <td><input type="text" :placeholder='userProfile.prenom' v-model="userProfile.prenom" /></td>
            <td><button @click="updatePrenom(userProfile.prenom)">Mettre à jour le prénom</button></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{{userProfile.email}}</td>
            <td>Ne peut pas être modifié</td>
          </tr>
          <tr>
            <td>Mot de passe:</td>
            <td><input type="text" placeholder='' v-model="userProfile.password" /></td>
          </tr>
          <tr>
            <td>Confirmez le nouveau mot de passe:</td>
            <td><input type="text" placeholder='' v-model="userProfile.password2" /></td>
            <td><button @click="updatePassword(userProfile.password, userProfile.password2)">Mettre à jour le mot de passe</button></td>
          </tr>
          <tr>
            <td>Administrateur?</td>
            <td><input type="text" placeholder='' v-model="userProfile.isAdmin" /></td>
            <td><button @click="updateStatus(userProfile.isAdmin)">Mettre à jour le statut</button></td>
          </tr>
        </table>
      </div>
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
      userProfile: {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        isAdmin: '0'
      },
      needle: '',
      searchResult: []
    } // fin data return
  }, // fin data
  methods: {
    getUsers(needle) {
      axios.get('http://127.0.0.1:8081/users?needle=' + needle)
        .then(response => {
          this.searchResult = []
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            this.searchResult.push(response.data[i])
          }
          console.log(this.searchResult)
        })
    },
    deleteUser(email) {
      axios.delete('http://127.0.0.1:8081/user/' + email)
        .then(response => {
          this.searchResult.splice(this.searchResult.indexOf(email), 1)
        })
    },
    getUserInfo(email) {
      axios.get('http://127.0.0.1:8081/user/' + email)
        .then(response => {
          this.userProfile.id = response.data.user.id
          this.userProfile.nom = response.data.user.nom
          this.userProfile.prenom = response.data.user.prenom
          this.userProfile.email = email
          this.userProfile.isAdmin = response.data.user.admin
        })
    },
    updateNom(newName) {
      var change = {'data': "nom", 'value': newName}
      axios.put('http://127.0.0.1:8081/user/' + this.userProfile.id, change)
        .then(response => {
        })
        .catch(error => { console.log(JSON.stringify(error)) })
    }, // fin updateNom
    updatePrenom(newPrenom) {
      var change = {'data': "prenom", 'value': newPrenom}
      axios.put('http://127.0.0.1:8081/user/' + this.userProfile.id, change)
        .then(response => {
        })
        .catch(error => { console.log(JSON.stringify(error)) })
    },  // fin updateNom
    updatePassword(newPassword, passwordVerif) {
      if (newPassword == passwordVerif) {
        var change = {'data': "password", 'value': newPassword}
        axios.put('http://127.0.0.1:8081/user/' + this.userProfile.id, change)
          .then(response => {
          })
          .catch(error => { console.log(JSON.stringify(error)) })
      } else {
        console.log("Les mots de passe ne correspondent pas")
      }
    },  // fin updatePassword
    updateStatus(newStatus) {
      var change = {'data': "admin", 'value': newStatus}
      axios.put('http://127.0.0.1:8081/user/' + this.userProfile.id, change)
          .then(response => {
          })
          .catch(error => { console.log(JSON.stringify(error))
          })
    }  // fin updateStatus
  } // fin methods
}
</script>

<style>
  .login {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .adminContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  table {
    justify-items: left;
  }
</style>
