<template>
  
    <div>

        <titlebar-add :title="title"></titlebar-add>

        <v-card
            elevation="4"
            class="mt-3"
        >
            <div class="flex-container">

                <div class="flex-item">

                    <v-row class="mb-5 mt-10" align="center">

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Item Code"
                                clearable
                                v-model="code"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.code}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Item Name"
                                clearable
                                v-model="name"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.name}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-autocomplete
                                label="Product"
                                clearable
                                v-model="product"
                                :items="product"
                                @keyup="appendProducts"
                            ></v-autocomplete>

                            <small class="red--text">
                                {{msg.product}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-autocomplete
                                label="Item Brand"
                                clearable
                                v-model="brand"
                                :items="brand"
                                @keyup="appendBrand"
                            ></v-autocomplete>

                            <small class="red--text">
                                {{msg.brand}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-autocomplete
                                label="Item Category"
                                clearable
                                v-model="category"
                                :items="category"
                                @keyup="appendCategory"
                            ></v-autocomplete>

                            <small class="red--text">
                                {{msg.category}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-autocomplete
                                label="Type of Good"
                                clearable
                                v-model="type"
                                :items="type"
                                @keyup="appendType"
                            ></v-autocomplete>

                            <small class="red--text">
                                {{msg.type}}
                            </small>

                        </v-col>
                        
                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-autocomplete
                                label="Item Suplyer"
                                clearable
                                v-model="suplyer"
                                :items="suplyer"
                                @keyup="appendSuplyer"
                            ></v-autocomplete>

                            <small class="red--text">
                                {{msg.suplyer}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Item Stock"
                                clearable
                                v-model="stock"
                                @keyup="setStatus"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.stock}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Minimum Stock"
                                clearable
                                v-model="min_stock"
                                @keyup="setStatus"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.min_stock}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Buying Price"
                                clearable
                                v-model="buy"
                                @keyup="setProfit"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.buy}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Selling Price"
                                clearable
                                v-model="sell"
                                @keyup="setProfit"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.sell}}
                            </small>

                        </v-col>
                        
                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Item Profit"
                                clearable
                                v-model="profit"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.profit}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Item Status"
                                clearable
                                v-model="status"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.status}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-textarea
                                label="Item Description"
                                clearable
                                v-model="description"
                            ></v-textarea>

                            <small class="red--text">
                                {{msg.description}}
                            </small>

                        </v-col>

                    </v-row>

                </div>

            </div>


            <div class="mybutton">

                <div class="mybutton-item mb-10">
                    <v-btn
                        dark
                        color="blue"
                        class="mx-2"
                        small
                        @click="save"
                    >

                        <v-icon
                            dark
                        >
                            mdi-content-save
                        </v-icon>

                            Save
                                    
                    </v-btn>

                    <v-btn
                        color="light"
                        class="mx-2"
                        small
                        @click="cancel"
                    >

                        <v-icon
                            dark
                        >
                            mdi-close-thick
                        </v-icon>

                            Cancel
                                    
                    </v-btn>
                </div>

            </div>


        </v-card>

        <Footer class="mt-12"></Footer>

    </div>

</template>

<script>

import titlebarAdd from '../toolbar/titlebar-add.vue'
import Footer from '../footer/footer.vue'

export default {
    name: 'inventoryEdit',
    components: {
        titlebarAdd,
        Footer
    },
    data() {
        return {
            msg: '',
            title: 'Edit Item',
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
            id: ''
        }
    },
    computed: {
        params () {
            return {
                code: this.code,
                name: this.name,
                product: this.product,
                brand: this.brand,
                category:  this.category,
                type: this.type,
                description: this.description,
                suplyer: this.suplyer,
                stock: this.stock,
                min_stock: this.min_stock,
                buy: this.buy,
                sell: this.sell,
                status: this.status,
                profit: this.sell - this.buy,
                id: this.id
            }
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
                    this.suplyer =  response.suplyer
                    this.stock = response.stock
                    this.min_stock = response.min_stock
                    this.buy = response.buy_price
                    this.sell = response.sell_price
                    this.status = response.status
                    this.profit = response.profit
                })
        },

        setProfit () {
            this.profit = this.sell - this.buy
        },

        setStatus () {
            if (this.stock > 0) {
                this.status = 'Available'
            }

            if (this.stock === this.min_stock || this.stock < this.min_stock) {
                this.status = 'Warning'
            }

            if (this.stock < 1) {
                this.status = 'Unavailable'
            }
        },

        getProduct() {
            this.$axios.get('product')
                .then((res) => {
                    this.products = res.data.data.map(item => (item.product))
                })
        },

        getBrand() {
            this.$axios.get('brand')
                .then((res) => {
                    this.brands = res.data.data.map(item => (item.brand))
                })
        },

        getCategory() {
            this.$axios.get('category')
                .then((res) => {
                    this.categories = res.data.data.map(item => (item.category))
                })
        },

        getType() {
            this.$axios.get('type')
                .then((res) => {
                    this.types = res.data.data.map(item => (item.type))
                })
        },

        getSuplyer() {
            this.$axios.get('suplyer')
                .then((res) => {
                    this.suplyers = res.data.data.map(item => (item.suplyer_name))
                })
        },

        appendProducts() {
            this.$axios.get('product')
                .then((res) => {
                    this.product = res.data.data.map(item => (item.product))
                })
        },

        appendBrand() {
            this.$axios.get('brand')
                .then((res) => {
                    this.brand = res.data.data.map(item => (item.brand))
                })
        },

        appendCategory() {
            this.$axios.get('category')
                .then((res) => {
                    this.category = res.data.data.map(item => (item.category))
                })
        },

        appendType() {
            this.$axios.get('type')
                .then((res) => {
                    this.type = res.data.data.map(item => (item.type))
                })
        },

        appendSuplyer() {
            this.$axios.get('suplyer')
                .then((res) => {
                    this.suplyer = res.data.data.map(item => (item.suplyer_name))
                })
        },

        cancel () {
            this.$router.push('/inventory')
        },

        save () {
            this.$axios.post('inventory_edit', this.params)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        this.msg = res.data.msg
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                        setTimeout(() => {
                            this.$router.push('/inventory')
                        }, 1000)
                    } else {
                        this.msg = res.data.msg
                    }
                })
        }
    }
}
</script>

<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: auto auto;
        padding: 10px;
    }

    .flex-container div.flex-item {
        flex: 1 1 400px;
    }

    .mybutton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
        margin: auto auto;
    }
</style>