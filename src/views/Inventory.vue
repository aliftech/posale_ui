<template>
  
    <v-app>

        <inventory-list class="margin"></inventory-list>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import inventoryList from '../components/inventory/inventory-list.vue'

export default {
    name: 'Inventory',
    components: {
        Navbar,
        inventoryList
    }
}
</script>

<style scoped>
    .margin {
        justify-content: center;
        margin-top: 10%;
    }
</style>