<template>
  
    <v-app>

        <v-container class="justify-center margin">
            <brand-list></brand-list>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import brandList from '../components/brand/brand-list.vue'

export default {
    name: 'Brand',
    components: {
        Navbar,
        brandList
    }
}
</script>

<style scoped>
    .margin {
        justify-content: center;
        margin-top: 10%;
    }
</style>