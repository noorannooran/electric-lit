<template>
  <div class="home">
    <div class="link">
      <router-link v-bind:to="'/generator/novel-pitch'">
        <span>Elevator Novel Pitch</span>
      </router-link>
      <router-link v-bind:to="'/generator/male-author'">
        <span>Male Author Descriptor</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.component('generator', {
  name: 'app'
})
console.log('Home page')
</script>

<style scoped>

</style>
