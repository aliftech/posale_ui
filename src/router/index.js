import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import HomeRoute from '../views/home-route.js'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Login',
//     component: Login
//   },
//   ...HomeRoute,
// ]

const router = new VueRouter({
  routes: [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    ...HomeRoute,
  ]
})




export default router
