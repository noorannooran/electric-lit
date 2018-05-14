<template>
    <div class="generator" id="generator1">
      <div class="title">
        <h2>{{title}}</h2>
      </div>
      <div class="text-center">
        <p>Enter the first 7 letters of your name</p>
        <input v-model="name" type="text" pattern="[A-Za-z]{7}">
      </div>
      <div class="button">
        <button @click="generate">Generate</button>
      </div>
      <div class="message text-center">
        <p>{{msg}}</p>
      </div>
      <div class="result">
        <h2 v-show="active">A/an {{pitch[0]}} {{pitch[1]}} about a/an {{pitch[2]}} {{pitch[3]}}'s {{pitch[4]}} to {{pitch[5]}} his/her/their {{pitch[6]}}.</h2>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
/*  eslint-disable indent */
import novelDict from '../words/novel-words'

let name = 'novel-pitch'
  export default Vue.component(name, {
    name: 'NovelPitch',
    data () {
      return {
        //  setting starting values
        title: 'Novel Elevator Pitch Generator',
        msg: 'Waiting for a name...',
        name: '',
        pitch: [],
        active: false,
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      }
    },
    watch: {
      name: function (newName, oldName) {
        this.msg = 'Waiting for you to stop typing...'
        if (newName.length === 7) {
          this.msg = 'Ready!'
        }
      }
    },
    methods: {
      // method to generate the elevator pitch
      generate: function () {
        this.pitch = []
        this.active = false
        // check that input is correct length
        if (this.name.length !== 7) {
          this.msg = 'You must enter 7 letters'
        } else {
          this.msg = 'Thinking...'
          console.log('Entered name:' + this.name) // console log for test purposes
          // loop through letters in input, get word from words at index, letterIndex, add result to vue property pitch (array)
          for (let i = 0; i < this.name.length; i++) {
            let letter = this.name.charAt(i)
            let letterIndex = this.alphabet.indexOf(letter.toUpperCase())
            this.pitch.push(novelDict[i][letterIndex])
          }
          // display message to user
          this.msg = 'Generated.'
          // show pitch
          this.active = true
        }
      }
    }
  })
console.log('Novel pitch built')
</script>

<style scoped>

</style>
