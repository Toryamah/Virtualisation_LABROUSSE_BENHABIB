<template>
  <h1>Voici la liste de tous les utilisateurs</h1>
  <div v-for="user in users" v-bind:key="user.name">
    {{user.name}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: ()=> {
    return{ users:[]
    }
  },
  mounted() {
    console.log(`${process.env.VUE_APP_APIURLUSER}`);

    axios.get(`${process.env.VUE_APP_APIURLUSER}users`).
    then(response=> {
      response.data.forEach(element => {
        this.users.push({name : element.name});
        // console.log(element);
      });
      // this.users = response.data.toString().replace('"','').replace('[','');
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
