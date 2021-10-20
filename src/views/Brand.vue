<template>
  
    <v-app>

        <v-container class="justify-center mt-12">
            <Table></Table>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import Table from '../components/brand/table.vue'

export default {
    name: 'Brand',
    components: {
        Navbar,
        Table
    }
}
</script>

<style>

</style>