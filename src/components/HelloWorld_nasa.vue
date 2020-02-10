<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Entrez votre requête</h2>
    <form v-on:submit.prevent="search(query)">
      <input type="text" placeholder="entrez votre requête" v-model="query" />
    </form>
    <div v-if="results">
      <div v-for="result in results">
        <img v-bind:src="result.links[0].href" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld_nasa',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      query: '',
      results: ''
    }
  },
  methods: {
    search(query) {
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then(response => {
        this.results = response.data.collection.items;
      }).next()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
