<template>
  <div class="page-wrapper">
    <div class="page" :id="$route.params.generatorid">
      <div class="page-inner">
        <component v-bind:is="$route.params.generatorid"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import '../generators/generators'

export default Vue.component('generator', {
  name: 'app'
})
console.log('Generator')
</script>

<style scoped>

</style>
