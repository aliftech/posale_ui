<template>
  
    <v-card
        elevation="14"
        outlined
        app
        color="success"
        dark
    >
    
        <v-container
            class="justify-center"
        >

            <v-card-title>
                Categories
            </v-card-title>

            <v-card-text class="justify-center">
                <h1> {{ count }} </h1>
            </v-card-text>

        </v-container>
    
    </v-card>

</template>

<script>
export default {
    name: 'Categories',
    data() {
        return {
            count: null
        }
    },
    mounted() {
        this.countAll()
    },
    methods: {
        countAll() {
            this.$axios.get('category_count')
                .then((res) => {
                    this.count = res.data.count
                })
        }
    }
}
</script>

<style>

</style>