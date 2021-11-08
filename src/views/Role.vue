<template>
  
    <v-app>

        <v-container class="justify-center margin">
            <role-list></role-list>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import roleList from '../components/role/role-list.vue'

export default {
    name: 'Role',
    components: {
        Navbar,
        roleList
    }
}
</script>

<style scoped>
    .margin {
        justify-content: center;
        margin-top: 10%;
    }
</style>