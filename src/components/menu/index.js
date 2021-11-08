import menuList from '../menu/menu-list'

export default [
    {
        path: '/menu',
        name: 'Menu',
        component: menuList,
        meta: {
            allowAnonymous: true
        }
    }
]