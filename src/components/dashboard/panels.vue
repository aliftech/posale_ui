<template>

    <v-container
        class="justify-center mt-16"
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

        </v-row>

    </v-container>
  
</template>

<script>

import Customers from './customers.vue'
import Suplyers from './suplyers.vue'

export default {
    name: 'Panels',
    components: {
        Customers,
        Suplyers
    }
}
</script>

<style>

</style>