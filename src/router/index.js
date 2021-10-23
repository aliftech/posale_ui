import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Brand from '../views/Brand.vue'
import Type from '../views/Type.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand
  },
  {
    path: '/type',
    name: 'Type',
    component: Type
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
]

const router = new VueRouter({
  routes
})

export default router
