<template>
  
    <v-app
        app
    >


        <v-container class="justify-center margin">
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

<style scoped>
    .margin {
        justify-content: center;
        margin-top: 10%;
    }
</style>