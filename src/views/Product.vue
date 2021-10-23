<template>
  
    <v-app
        app
    >


        <v-container class="justify-center mt-12">
            <product-list></product-list>
        </v-container>

        <navbar></navbar>


    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import productList from '../components/product/product-list.vue'

export default {
    name: 'Product',
    components: {
        Navbar,
        productList
    },
}
</script>

<style>

</style>