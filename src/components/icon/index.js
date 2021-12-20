export default [
    {
        path: '',
        name: 'ListIcon',
        component: () => import('../icon/icon-list')
    },
    {
        path: '/icon/add',
        name: 'AddIcon',
        component: () => import('./icon-add')
    },
    {
        path: '/icon/edit/:id',
        name: 'EditIcon',
        component: () => import('./icon-edit')
    }
]