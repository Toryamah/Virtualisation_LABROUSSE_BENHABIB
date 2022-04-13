<template>
  <div class="hello">
    <h1>Ton nom de personnage Star Wars sera !</h1>
    <p style="font-size:40px">{{name}} </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: ()=> {
    return{ name:null
    }
  },
  mounted() {
    console.log(`${process.env.VUE_APP_APIURL}`);

    axios.get(`${process.env.VUE_APP_APIURL}random_name`).
    then(response=> {
      this.name = response.data.toString().replace('"','').replace('[','');
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
