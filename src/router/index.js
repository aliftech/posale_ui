import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import dashboardRouter from '../router/dashboard/myRouter'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    ...dashboardRouter
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.allowAnonymous)) {
    next()
    //alert()
  } else {
    next()
    //alert("Harus validasi")
  }
})

export default router
