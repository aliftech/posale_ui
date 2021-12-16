export default [
    {
        path: '',
        name: 'typeList',
        component: () => import('../type/type-list.vue')
    },

    {
        path: '/type/add',
        name: 'AddType',
        component: () => import('../type/type-add.vue')
    },

    {
        path: '/type/edit/:id',
        name: 'EditType',
        component: () => import('../type/type-edit.vue')
    }
]