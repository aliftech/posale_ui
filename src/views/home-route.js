import Dashboard from '../views/Dashboard.vue'
import Brand from '../components/brand/index'
import Category from '../components/category/index'
import Icon from '../components/icon/index'
import Inventory from '../components/inventory/index'
import Menu from '../components/menu/index'
import Product from '../components/product/index'
import Role from '../components/role/index'
import Suplyer from '../components/suplyer/index'
import Type from '../components/type/index'


export default [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            ...Brand,
            ...Category,
            ...Icon,
            ...Inventory,
            ...Menu,
            ...Product,
            ...Role,
            ...Suplyer,
            ...Type
        ]
    }
]