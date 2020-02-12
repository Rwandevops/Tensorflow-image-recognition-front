<template>
  <div class="tensorflow">
    <form v-on:submit.prevent="testImage(link, results)">
      <label for="link">Lien vers l'image à tester:</label>
      <input type="text" placeholder="lien vers l'image format jpg" v-model="link" />
      <input type="submit" value="Test!" />
    </form>
    <div class="container">
      <table>
        <tr>
          <th>Label</th>
          <th>Probability</th>
        </tr>
        <tr v-for="line in results" v-bind:key=line.label>
          <td>{{line.label}}</td>
          <td>{{line.probability}}</td>
        </tr>
      </table>
      <img :src="link" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Tensorflow',
  data () {
    return {
      link: '',
      results: []
    } // fin data return
  }, // fin data
  methods: {
    async testImage (link, results) {
      try {
        let response = await axios.get(
          'http://127.0.0.1:8081/tensorflow?imageLink=' + link
        )
        this.results = []
        response.data.forEach(data =>
          {
            this.results.push(data)
            console.log(this.results)
          })
      } catch (err) {
        console.log(JSON.stringify(err))
      }
    }
  }
}
</script>

<style>
.tensorflow {
  justify-content: center;
}
.container{
  display: flex;
  justify-content: space-around;
}
img {
  max-width: 50%;
  margin: auto;
}
table {
  margin: auto;
  text-align: center;
}
</style>