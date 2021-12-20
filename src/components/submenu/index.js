export default [
    {
        path: '',
        name: 'SubmenuList',
        component: () => import('./submenu-list')
    },
    {
        path: '/submenu/add',
        name: 'SubmenuAdd',
        component: () => import('./submenu-add')
    }
]