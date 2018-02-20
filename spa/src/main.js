// The Vue build version to load with the import command
// runtime-only or standalone has been set in webpack.base.conf with an alias
// import the vue instance
import Vue from 'vue'

// import the app component
import App from './App'

// import the vue router

import VueRouter from 'vue-router'

import Hello from './components/HelloWorld'

import About from './components/About'

// tell vue to use the router
Vue.use(VueRouter)

// define your Routes
const routes = [
  // home route
  { path: '/', component: Hello },
  // about route
  { path: '/about', component: About }
]

// Create the router instance and pass the routes option
// you can pass in additional options here, but lets keep it simple for now

const router = new VueRouter({
  routes,
  mode: history

})

new Vue({
  // define the selector for the root component
  el: '#app',

  // pass the template to the root component
  template: '',

  // declare components that the root component can access
  components: { App },

  // pass in the router to the Vue instance
  router

}).$mount('#app') // mount the router on the app
