<template>
  
    <v-app
        app
    >

        <v-container class="justify-center mt-12">
            <type-list></type-list>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import typeList from '../components/type/type-list.vue'

export default {
    name: 'Type',
    components: {
        Navbar,
        typeList
    }
}
</script>

<style>

</style>