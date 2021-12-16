<template>
  
    <div>

        <navbar></navbar>
        <router-view></router-view>

    </div>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'

export default {
    name: 'Product',
    components: {
        Navbar
    }
}
</script>

<style>

</style>