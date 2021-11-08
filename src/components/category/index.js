import categoryList from '../category/category-list'

export default [
    {
        path: '/category',
        name: 'Category',
        component: categoryList,
        meta: {
            allowAnonymous: true
        }
    }
]