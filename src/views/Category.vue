<template>
  
    <v-app>


        <category-list class="justify-center margin"></category-list>

        <navbar></navbar>


    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import categoryList from '../components/category/category-list.vue'

export default {
    name: 'Category',
    components: {
        Navbar,
        categoryList
    }
}
</script>

<style scoped>
    .margin {
        justify-content: center;
        margin-top: 10%;
    }
</style>