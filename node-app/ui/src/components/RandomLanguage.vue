<template>
  <div class="hello">
    <h1>Tu devrais apprendre le : </h1>
    <p style="font-size:40px">{{langue}} </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: ()=> {
    return{ langue:null
    }
  },
  mounted() {
    console.log(`${process.env.VUE_APP_APIURLLANGUES}`);

    axios.get(`${process.env.VUE_APP_APIURLLANGUES}random_languages`).
    then(response=> {
      this.langue = response.data.toString().replace('"','').replace('[','');
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
