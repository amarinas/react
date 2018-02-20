// The Vue build version to load with the import command
// runtime-only or standalone has been set in webpack.base.conf with an alias
// import the vue instance
import Vue from 'vue'

//import the app component
import App from './App'

//import the vue router
import VueRouter from  'vue-router'

//tell vue to use the router
Vue.use(VueRouter)

import Hello from './components/HelloWorld'

//define your Routes

const routes = [
  {
    path: '/',
    component: Hello
  }
]

//Create the router instance and pass the routes option
//you can pass in additional options here, but lets keep it simple for now

const router = new VueRouter({
  routes,
  mode: history

})

new Vue({
  //define the selector for the root component
  el: '#app',

  //pass the template to the root component
  template: '<App/>',

  //declare components that the root component can access
  components: { App },

  //pass in the router to the Vue instance
  router

}).$mount('#app') // mount the router on the app
