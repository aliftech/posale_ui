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
                sm="4"
            >

                <inventories></inventories>

            </v-col>


            <v-col
                cols="12"
                sm="4"
            >

                <types></types>

            </v-col>


            <v-col
                cols="12"
                sm="4"
            >

                <categories></categories>

            </v-col>

        </v-row>

    </v-container>
  
</template>

<script>

import Inventories from './inventories.vue'
import Types from './types.vue'
import Categories from './categories.vue'


export default {
    name: 'Panels2',
    components: {
        Inventories,
        Types,
        Categories
    }
}
</script>

<style>

</style>