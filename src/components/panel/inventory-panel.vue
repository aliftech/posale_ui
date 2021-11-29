<template>
  
    <v-card
        elevation="2"
        color="red"
        dark
    >

        <v-card-title>Items</v-card-title>

        <div class="centery">
            <h3>{{ count }}</h3>
        </div>

    </v-card>

</template>

<script>
export default {
    name: 'inventoryPanel',
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
            this.$axios.get('inventory_count')
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