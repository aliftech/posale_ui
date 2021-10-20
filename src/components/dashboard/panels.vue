<template>

    <v-container
        class="justify-center"
        app
    >

        <v-row
            align="center"
        >

            <v-col
                cols="12"
                sm="3"
            >

                <customers></customers>

            </v-col>


            <v-col
                cols="12"
                sm="3"
            >

                <suplyers></suplyers>

            </v-col>


            <v-col
                cols="12"
                sm="3"
            >

                <products></products>

            </v-col>


            
            <v-col
                cols="12"
                sm="3"
            >

                <brands></brands>

            </v-col>

        </v-row>

    </v-container>
  
</template>

<script>

import Customers from './customers.vue'
import Suplyers from './suplyers.vue'
import Products from './products.vue'
import Brands from './brands.vue'

export default {
    name: 'Panels',
    components: {
        Customers,
        Suplyers,
        Products,
        Brands
    }
}
</script>

<style>

</style>