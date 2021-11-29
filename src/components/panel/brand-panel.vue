<template>
  
    <v-card
        elevation="2"
        color="primary"
        dark
    >

        <v-card-title>Brands</v-card-title>

        <div class="centery">
            <h3>{{ count }}</h3>
        </div>

    </v-card>

</template>

<script>
export default {
    name: 'brandPanel',
    data() {
        return {
            count: 0
        }
    },
    mounted() {
        this.countAll()
    },
    methods: {
        countAll () {
            this.$axios.get('brand_count')
                .then((res) => {
                    this.count = res.data.count
                })
        }
    }
}
</script>

<style scoped>
    .centery {
        text-align: center;
    }

    .centery h3 {
        font-size: 45px;
    }
</style>