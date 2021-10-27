<template>
  
    <v-row justify="center">
        <v-dialog
            v-model="editDialog"
            persistent
            max-width="600px"
        >

            <v-card>
                <v-card-title>
                    <span class="text-h5">Edit Inventory</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="ID*"
                                    v-model="id"
                                    disabled
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Code*"
                                    v-model="code"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.code}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Inventory Name*"
                                    v-model="name"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.name}}
                                </small>
                            </v-col>
                            
                            <v-col cols="12">
                                <v-autocomplete
                                    label="Product*"
                                    v-model="product"
                                    :items="product"
                                    @keyup="appendProducts"
                                ></v-autocomplete>
                                <small class="red--text">
                                    {{msg.product}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-autocomplete
                                    label="Brand*"
                                    v-model="brand"
                                    :items="brand"
                                    @keyup="appendBrand"
                                ></v-autocomplete>
                                <small class="red--text">
                                    {{msg.brand}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-autocomplete
                                    label="Category*"
                                    v-model="category"
                                    :items="category"
                                    @keyup="appendCategory"
                                ></v-autocomplete>
                                <small class="red--text">
                                    {{msg.category}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-autocomplete
                                    label="Type*"
                                    v-model="type"
                                    :items="type"
                                    @keyup="appendType"
                                ></v-autocomplete>
                                <small class="red--text">
                                    {{msg.type}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-select
                                    label="Suplyer*"
                                    v-model="suplyer"
                                    :items="suplyer"
                                    @keyup="appendSuplyer"
                                ></v-select>
                                <small class="red--text">
                                    {{msg.suplyer}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Stock*"
                                    v-model="stock"
                                    @keyup="setStatus"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.stock}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Stock Minimum*"
                                    v-model="min_stock"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.min_stock}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Buy Price*"
                                    v-model="buy_price"
                                    @keyup="setProfit"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.buy}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Sell Price*"
                                    v-model="sell_price"
                                    @keyup="setProfit"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.sell}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Profit*"
                                    v-model="profit"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.profit}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea
                                    name="description"
                                    label="Description"
                                    v-model="description"
                                ></v-textarea>
                                <small class="red--text">
                                    {{msg.description}}
                                </small>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                    label="Status*"
                                    v-model="status"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.status}}
                                </small>
                            </v-col>

                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="$emit('closeEdit')"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="$emit('edit', paramsEdit)"
                        >
                            Save
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>

</template>

<script>
export default {
    name: 'Edit',
    props:  [   'editDialog', 
                'id', 
                'msg',
                'code',
                'name',
                'product',
                'brand',
                'category',
                'type',
                'suplyer',
                'stock',
                'min_stock',
                'buy_price',
                'sell_price',
                'profit',
                'description',
                'status'
    ],
    computed: {
        paramsEdit() {
            return {
                code: this.code,
                name: this.name,
                product: this.product,
                brand: this.brand,
                category: this.category,
                stock: this.stock,
                sell: this.sell_price,
                status: this.status,
                type: this.type,
                description: this.description,
                suplyer: this.suplyer,
                min_stock: this.min_stock,
                buy: this.buy_price,
                profit: this.sell_price - this.buy_price,
                id: this.id
            }
        }
    },
    methods: {
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
        setStatus() {
            if(this.stock !=0) {
                this.status = 'Available'
            } else {
                this.status = 'Unavailable'
            }
        },
        setProfit() {
            this.profit = this.sell_price - this.buy_price
        },
    }
}
</script>

<style>

</style>