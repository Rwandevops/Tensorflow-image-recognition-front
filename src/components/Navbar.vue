<template>
  <div class="Navbar">
    <button @click="changePage('homeNotLogged')">Home</button>
    <button @click="changePage('register')" v-if="!this.$store.state.isLogged">Pas encore inscrit?</button>
    <button @click="logout()" v-if="this.$store.state.isLogged">Logout</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  methods: {
    changePage (page) {
      this.$store.commit('changePage', page)
    },
    logout () {
      this.$store.commit('changeLog', false)
      this.$store.commit('changePage', 'login')
    }
  },
  mounted () {
  }
}
</script>

<style>
.Navbar{
  font-size: 30px;
  background-color: white;
  color: black;
  border-style: solid;
  margin: 10px;
}
</style>
