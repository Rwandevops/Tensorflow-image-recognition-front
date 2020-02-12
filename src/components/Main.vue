<template>
  <div class="main">
    <Login v-if="(this.$store.state.page === 'home' && !this.$store.state.isLogged)"></Login>
    <Profile v-if="this.$store.state.page === 'profile'"></Profile>
    <Admin v-if="this.$store.state.page === 'admin' && this.$store.state.user.isAdmin"></Admin>
    <Register v-if="this.$store.state.page === 'register'"></Register>
    <Tensorflow v-if="(this.$store.state.page === 'tensorflow' || this.$store.state.page === 'home' && this.$store.state.isLogged)"></Tensorflow>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import Admin from './Admin'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import Tensorflow from './Tensorflow'

Vue.use(VueResource)

export default {
  name: 'Main',
  components: {
    Login,
    Register,
    Tensorflow,
    Profile,
    Admin
  }
}
</script>

<style>
  .main{
    margin: 0;
  }
  
</style>
