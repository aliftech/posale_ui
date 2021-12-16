export default [
    {
        path: '',
        name: 'brandTable',
        component: () => import('@/components/brand/brand-list')
    },
    {
        path: '/brand/add',
        name: 'AddBrand',
        component: () => import('@/components/brand/brand-add')
    },
    {
        path: '/brand/edit/:id',
        name: 'EditBrand',
        component: () => import('@/components/brand/brand-edit')
    }
]