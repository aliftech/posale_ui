<template>
  
    <v-app>

        <v-container class="justify-center mt-12">
            <panels></panels>
        </v-container>

        <v-container class="justify-center mt-3">
            <panels2></panels2>
        </v-container>

        <navbar></navbar>
    

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import Panels from '../components/dashboard/panels.vue'
import Panels2 from '../components/dashboard/panels2.vue'

export default {
    name: 'Dashboard',
    components: {
        Navbar,
        Panels,
        Panels2
    }
}
</script>

<style scoped>
    .margin {
        margin-left: auto;
        margin-right: auto;
    }
</style>