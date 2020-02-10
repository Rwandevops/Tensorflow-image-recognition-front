<template>
  <div class="main">
    <Login v-if="this.$store.state.page === 'login'"></Login>
    <Register v-if="this.$store.state.page === 'register'"></Register>
    <Tensorflow v-if="this.$store.state.page === 'tensorflow'"></Tensorflow>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import Login from './Login'
import Register from './Register'
import Tensorflow from './Tensorflow'

Vue.use(VueResource)

export default {
  name: 'Main',
  components: {
    Login,
    Register,
    Tensorflow
  }
}
</script>

<style>
  .main{
    margin: 10px;
  }
  
</style>
