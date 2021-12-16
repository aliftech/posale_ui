export default [
    {
        path: '',
        name: 'listProduct',
        component: () => import('../product/product-list.vue')
    },

    {
        path: '/product/add',
        name: 'AddProduct',
        component: () => import('../product/product-add.vue')
    },

    {
        path: '/product/edit/:id',
        name: 'EditProduct',
        component: () => import('../product/product-edit.vue')
    }
]