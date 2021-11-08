import productList from '../product/product-list'

export default [
    {
        path: '/product',
        name: 'Product',
        component: productList,
        meta: {
            allowAnonymous: true
        }
    }
]