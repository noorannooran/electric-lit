<template>
    <div class="generator" id="generator2">
      <div class="title">
        <h2>{{title}}</h2>
      </div>
      <div class="text-center">
        <p>Enter the first 5 letters of your name</p>
        <input v-model="name" type="text" pattern="[A-Za-z]{7}">
      </div>
      <div class="button">
        <button @click="generate">Generate</button>
      </div>
      <div class="message text-center">
        <p>{{msg}}</p>
      </div>
      <div class="result">
        <h2 v-show="active">She had {{description[0]}} like a {{description[1]}} {{description[2]}} and I
        {{description[3]}} to {{description[4]}} her.</h2>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import maleAuthorDict from '../words/male-author-words'
let name = 'male-author'
export default Vue.component(name, {
  data () {
    return {
      title: 'Male Author Description Generator',
      msg: 'Waiting for a name...',
      name: '',
      description: [],
      active: false,
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
  },
  watch: {
    name: function (newName, oldName) {
      this.msg = 'Waiting for you to stop typing...'
      if (newName.length === 6) {
        this.msg = 'Ready!'
      }
    }
  },
  methods: {
    // method to generate the elevator pitch
    generate: function () {
      this.description = []
      this.active = false
      // check that input is correct length
      if (this.name.length !== 5) {
        this.msg = 'You must enter 5 letters'
      } else {
        this.msg = 'Thinking...'
        console.log('Entered name:' + this.name) // console log for test purposes
        // loop through letters in input, get word from words at index, letterIndex, add result to vue property pitch (array)
        for (let i = 0; i < this.name.length; i++) {
          let letter = this.name.charAt(i)
          let letterIndex = this.alphabet.indexOf(letter.toUpperCase())
          this.description.push(maleAuthorDict[i][letterIndex])
        }
        // display message to user
        this.msg = 'Generated.'
        // show pitch
        this.active = true
      }
    }
  }
})
</script>

<style scoped>

</style>
