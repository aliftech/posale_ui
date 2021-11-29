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
  }]