<template>
  
    <div>

        <titlebar-add :title="title"></titlebar-add>

        <div class="flex-container">

            <div class="flex-item-left">
                <v-card
                    elevation="3"
                    class="mt-4"
                >
                    <img :src="image_path + image" :alt="image" class="img-product">
                </v-card>

                <v-card
                    elevation="3"
                    class="mt-4"
                >
                    <v-card-text> {{description}} </v-card-text>
                </v-card>
            </div>

            <v-spacer></v-spacer>

            <div class="flex-item-right">
                <v-card
                    elevation="3"
                    class="mt-4"
                >
                
                    <v-list dense>

                        <v-list-item>
                            <v-card-text><b>Item Code :</b> {{code}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Item Name :</b> {{name}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Item Product :</b> {{product}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Item Brand :</b> {{brand}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Category :</b> {{category}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Item Type :</b> {{type}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Suplyer :</b> {{suplyer}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Item Stock :</b> {{stock}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Minimum Stock :</b> {{min_stock}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Buy Price :</b> {{buy}} </v-card-text>
                        </v-list-item>

                        <v-list-item>
                            <v-card-text><b>Sell Price :</b> {{sell}} </v-card-text>
                        </v-list-item>
                        
                    </v-list>
                </v-card>
            </div>

        </div>

        <Footer class="mt-5"></Footer>

    </div>

</template>

<script>

import titlebarAdd from '../toolbar/titlebar-add.vue'
import Footer from '../footer/footer.vue'

export default {
    name: 'invetoryView',
    components: {
        titlebarAdd,
        Footer
    },
    data () {
        return {
            title: 'Inventory Detail',
            code: '',
            name: '',
            product: '',
            brand: '',
            category: '',
            type: '',
            description: '',
            suplyer: '',
            stock: '',
            min_stock: '',
            buy: '',
            sell: '',
            status: '',
            profit: '',
            id: '',
            image: '',
            image_path: '',
            created_by: '',
            created_at: ''
        }
    },
    created () {
        this.loadData()
    },
    methods: {
        loadData () {
            this.id = this.$route.params.id
            this.$axios.get('inventory_show?id='+this.id)
                .then((res) => {
                    const response = res.data.data
                    this.code = response.code
                    this.name = response.name
                    this.product = response.product
                    this.brand = response.brand
                    this.category = response.category
                    this.type = response.type
                    this.description = response.description
                    this.suplyer = response.suplyer
                    this.stock = response.stock
                    this.min_stock = response.min_stock
                    this.buy = response.buy_price
                    this.sell = response.sell_price
                    this.status = response.status
                    this.profit = response.profit
                    this.image = response.image
                    this.image_path = response.image_path
                    this.created_by = response.created_by
                    this.created_at = response.created_at
                })
        }
    }
}
</script>

<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        padding: 10px;
        background-color: rgb(224, 224, 224);
    }

    .flex-container div.flex-item-left {
        flex: 40%;
        position: relative;
    }

    .flex-container div.flex-item-right {
        flex: 55%;
        position: relative;
    }

    .img-product {
        width: 85%;
        height: auto;
        object-fit: cover;
        object-position: center;
    }

</style>