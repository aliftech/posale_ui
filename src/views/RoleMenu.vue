<template>
  
    <v-app>

        <v-container class="justify-center margin">
            <role-menu-list></role-menu-list>
        </v-container>

        <navbar></navbar>

    </v-app>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'
import roleMenuList from '../components/role_menu/role-menu-list.vue'

export default {
    name: 'roleMenu',
    components: {
        Navbar,
        roleMenuList
    }
}
</script>

<style scoped>
    .margin {
        justify-content: center;
        margin-top: 10%;
    }
</style>