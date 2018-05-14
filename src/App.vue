<template>
  <div id="app">
    <h1>Electric Lit Generators</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/home'
import Generator from './pages/generator'

export default {
  name: 'App',
  components: {
    Home,
    Generator
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
  margin-top: 60px;
}
</style>
