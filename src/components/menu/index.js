export default [
    {
        path: '',
        name: 'MenuList',
        component: () => import('./menu-list')
    },
    {
        path: '/menu/add',
        name: 'MenuAdd',
        component: () => import('./menu-add')
    },
    {
        path: '/menu/edit/:id',
        name: 'MenuEdit',
        component: () => import('./menu-edit')
    }
]