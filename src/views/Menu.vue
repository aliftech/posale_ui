<template>
  
    <v-app>

        <v-container class="justify-center mt-12">
            <menu-list></menu-list>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import menuList from '../components/menu/menu-list.vue'

export default {
    name: 'Menu',
    components: {
        Navbar,
        menuList
    }
}
</script>

<style>

</style>