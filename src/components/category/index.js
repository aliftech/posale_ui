export default [
    {
        path: '',
        name: 'typeList',
        component: () => import('../category/category-list.vue')
    },

    {
        path: '/category/add',
        name: 'addCategory',
        component: () => import('../category/category-add.vue')
    },

    {
        path: '/category/edit/:id',
        name: 'editCategory',
        component: () => import('../category/category-edit.vue')
    }
]