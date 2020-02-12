<template>
  <div class="Navbar">
    <button @click="changePage('home')">Home</button>
    <button @click="changePage('register')" v-if="!this.$store.state.isLogged">Pas encore inscrit?</button>
    <button @click="changePage('profile')" v-if="this.$store.state.isLogged">Profile</button>
    <button @click="changePage('tensorflow')" v-if="this.$store.state.isLogged">Tensorflow</button>
    <button @click="changePage('admin')" v-if="this.$store.state.isLogged && this.$store.state.user.isAdmin">Admin page</button>
    <button @click="logout()" v-if="this.$store.state.isLogged">Logout</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  methods: {
    logout () {
      var nouser = {nom: "", prenom: "", email: "", password: "", password2: "", isAdmin: "0"}
      this.$store.commit('changeLog', false)
      this.$store.commit('changeUser', nouser)
      this.$store.commit('changePage', 'home')
    },
    changePage (page) {
      this.$store.commit('changePage', page)
    }
  },
  mounted () {
  }
}
</script>

<style>
.Navbar{
  font-size: 30px;
  margin: 10px;
}
</style>
