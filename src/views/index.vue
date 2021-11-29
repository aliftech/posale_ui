<template>
  
    <div>
        <Navbar></Navbar>

        <router-view></router-view>
    </div>

</template>

<script>

import Navbar from '../components/nav/navbar.vue'

export default {
    name: 'Dashboard',
    components: {
        Navbar
    }
}
</script>

<style scoped>
    
</style>