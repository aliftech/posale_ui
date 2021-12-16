<template>
  
    <div>

        <navbar></navbar>
        <router-view></router-view>

    </div>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'

export default {
    name: 'Category',
    components: {
        Navbar
    }
}
</script>

<style>

</style>