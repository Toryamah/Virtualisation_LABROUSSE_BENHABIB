<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <RandomLanguage msg="Welcome to Your Vue.js App"/>
</template>

<script>
import RandomLanguage from '../../components/RandomLanguage.vue'

export default {
  name: 'App',
  components: {
    RandomLanguage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
