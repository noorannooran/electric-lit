import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Generator from '@/pages/generator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/generator/:generatorid',
      name: 'generator',
      component: Generator
    }
  ]
})
