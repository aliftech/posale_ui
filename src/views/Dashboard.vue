<template>
  
    <v-app>

        <drawer></drawer>
        <navbar></navbar>
        
        <panels></panels>

    </v-app>

</template>

<script>

import Drawer from '../components/nav/drawer.vue'
import Navbar from '../components/nav/navbar.vue'
import Panels from '../components/dashboard/panels.vue'

export default {
    name: 'Dashboard',
    components: {
        Drawer,
        Navbar,
        Panels
    }
}
</script>

<style>

</style>