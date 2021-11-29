<template>
  
    <v-card
        elevation="2"
        color="info"
        dark
    >

        <v-card-title>Categories</v-card-title>

        <div class="centery">
            <h3>{{ count }}</h3>
        </div>

    </v-card>

</template>

<script>
export default {
    name: 'categoryPanel',
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
            this.$axios.get('category_count')
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