<template>
  
    <v-card
        elevation="14"
        outlined
        shaped
        app
        color="orange"
        dark
    >
    
        <v-container
            class="justify-center"
        >

            <v-card-title>
                Brands
            </v-card-title>

            <v-card-text class="justify-center">
                <h1> {{ count }} </h1>
            </v-card-text>

        </v-container>
    
    </v-card>

</template>

<script>
export default {
    name: 'Brands',
    data() {
        return {
            count: 0
        }
    },
    mounted() {
        this.countAll()
    },
    methods: {
        countAll() {
            this.$axios.get('brand_count')
                .then((res) => {
                    this.count = res.data.count
                })
        }
    }
}
</script>

<style>

</style>