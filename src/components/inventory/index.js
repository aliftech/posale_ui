export default [
    {
        path: '',
        name: 'ListInventory',
        component: () => import('../inventory/inventory-list.vue')
    },

    {
        path: '/inventory/add',
        name: 'AddInventory',
        component: () => import('../inventory/inventory-add.vue')
    },

    {
        path: '/inventory/upload/:id',
        name: 'UploadImage',
        component: () => import('../inventory/inventory-upload')
    },

    {
        path: '/inventory/edit/:id',
        name: 'EditInventory',
        component: () => import('../inventory/inventory-edit')
    },

    {
        path: '/inventory/view/:id',
        name: 'ViewInventory',
        component: () => import('../inventory/inventory-view')
    }
]