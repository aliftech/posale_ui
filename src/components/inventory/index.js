import inventoryList from '../inventory/inventory-list'

export default [
    {
        path: '/inventory',
        name: 'Inventory',
        component: inventoryList,
        meta: {
            allowAnonymous: true
        }
    }
]