import roleList from '../role/role-list'

export default [
    {
        path: '/role',
        name: 'Role',
        component: roleList,
        meta: {
            allowAnonymous: true
        }
    }
]