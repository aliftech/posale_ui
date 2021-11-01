<template>
  
    <v-app>

        <v-container class="justify-center mt-12">
            <icon-list></icon-list>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import iconList from '../components/icon/icon-list.vue'

export default {
    name: 'Icon',
    components: {
        Navbar,
        iconList
    }
}
</script>

<style>

</style>