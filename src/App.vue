<template>
  <div id="app">
    <Header ></Header>
    <Navbar />
    <Main />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Navbar,
    Footer
  },
  data () {
    return {
      page: 'page',
      isLogged: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
