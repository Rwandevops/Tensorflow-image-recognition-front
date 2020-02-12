<template>
  <div id="app">
    <Header />
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
      isLogged: false,
      isAdmin: false,
      user: {
        nom: '',
        prenom: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: stretch; 
  text-align: center;
  background-color: lightgrey;
  color: black;
  margin: 0;
  padding: 0;
}
</style>
