import BrandRouter from '../../components/brand/index'
import TypeRouter from '../../components/type/index'
import CategoryRouter from '../../components/category/index'
import ProductRouter from '../../components/product/index'
import InventoryRouter from '../../components/inventory/index'
import IconRouter from '../../components/icon/index'

export default [
  {
    path: '/dashboard',
    name: 'CorrectERP',
    component: () => import('@/views/index.vue'),    
    children: [
      {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/component/dashboard')
      }
    ]
  },

  {
    path: '/brand',
    name: 'Brand',
    component: () => import('@/views/brand.vue'),
    children: [
      ...BrandRouter
    ]
  },

  {
    path: '/type',
    name: 'Type',
    component: () => import('@/views/type.vue'),
    children: [
      ...TypeRouter
    ]
  },

  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category.vue'),
    children: [
      ...CategoryRouter
    ]
  },

  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product.vue'),
    children: [
      ...ProductRouter
    ]
  },

  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('@/views/inventory.vue'),
    children: [
      ...InventoryRouter
    ]
  },

  {
    path: '/icon',
    name: 'Icon',
    component: () => import('@/views/icon.vue'),
    children: [
      ...IconRouter
    ]
  }
]