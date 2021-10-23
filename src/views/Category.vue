<template>
  
    <v-app>


        <category-list class="justify-center mt-12"></category-list>

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

<style>

</style>