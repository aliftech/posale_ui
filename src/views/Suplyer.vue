<template>
  
    <v-app>

        <v-container class="justify-center margin">
            <suplyer-list></suplyer-list>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import suplyerList from '../components/suplyer/suplyer-list.vue'

export default {
    name: 'Suplyer',
    components: {
        Navbar,
        suplyerList
    }
}
</script>

<style scoped>
    .margin {
        justify-content: center;
        margin-top: 10%;
    }
</style>