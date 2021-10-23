<template>
  
    <div>


        <v-card
            app
            elevation="2"
        >


            <v-card-title class="justify-center mb-10">
                Product List
            </v-card-title>

            <v-container
                width="65%"
            >

                <v-row
                    align="center"
                >

                    <v-col
                        cols="12"
                        sm="2"
                    >
                        <add v-on:add="add" :dialog="dialog" :msg="msg" :code="code" :product="product"></add>
                    </v-col>

                    <v-col
                        cols="12"
                        sm="10"
                    >
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-col>

                </v-row>
            
                <v-data-table
                    :headers="headers"
                    :items="products"
                    :search="search"
                    :loading="loading"
                    :loading-text="loadingText"
                    :footer-props="footerProps"
                >
                
                    <template v-slot:item="row">
                        <tr>
                            <td> {{row.item.id}} </td>
                            <td> {{row.item.code}} </td>
                            <td> {{row.item.product}} </td>
                            <td> {{row.item.created_by}} </td>
                            <td> {{row.item.created_at}} </td>
                            <td>
                                <div class="text-center">
                                    <v-menu
                                        top
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                                color="primary"
                                                dark
                                                v-bind="attrs"
                                                v-on="on"
                                                small
                                            >
                                                Action
                                            </v-btn>
                                        </template>

                                        <v-list>
                                            <v-list-item
                                                @click="edit(row.item.id)"
                                            >
                                                <v-list-item-icon>
                                                    <v-icon>mdi-pencil</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Edit</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-list-item
                                                @click="del(row.item.id)"
                                            >
                                                <v-list-item-icon>
                                                    <v-icon>mdi-delete</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Delete</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </td>
                        </tr>
                    </template>
                
                </v-data-table>

                
            </v-container>


            <v-row justify="center">
                <v-dialog
                    v-model="editDialog"
                    persistent
                    max-width="600px"
                >

                <v-card>
                    <v-card-title>
                        <span class="text-h5">Edit Product</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>        
                                <v-col cols="12">
                                    <v-text-field
                                        label="Product Code*"
                                        required
                                        clearable
                                        v-model="code"
                                    ></v-text-field>
                                    <small class="red--text">
                                        {{msg.code}}
                                    </small>
                                </v-col>


                                <v-col cols="12">
                                    <v-text-field
                                        label="Product Name*"
                                        required
                                        clearable
                                        v-model="product"
                                    ></v-text-field>
                                    <small class="red--text">
                                        {{msg.product}}
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
                        @click="editDialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="saveEdit"
                    >
                        Save
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>


            <v-row justify="center">
                <v-dialog
                    v-model="deleteDialog"
                    persistent
                    max-width="290"
                >
                <v-card>
                    <v-card-title class="text-h5">
                        Are You Sure Want To Delete This Product?
                    </v-card-title>
                    <v-card-text>The product data you deleted can't recovered.</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red darken-1"
                            text
                            @click="deleteDialog = false"
                        >
                            No
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="saveDelete"
                        >
                            Yes
                        </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>


        </v-card>


    </div>

</template>

<script>

import Add from '../product/add.vue'

export default {
    name: 'productList',
    components: {
        Add
    },
    data() {
        return {
            search: '',
            headers: [
            {
                text: 'ID',
                align: 'start',
                value: 'id',
            },
            { text: 'Product Code', value: 'code' },
            { text: 'Product Name', value: 'product' },
            { text: 'Created By', value: 'created_by' },
            { text: 'Created At', value: 'created_at' },
            { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            products: [],
            dialog: false,
            msg: '',
            id: '',
            code: '',
            product: '',
            editDialog: false,
            deleteDialog: false
        }
    },
    computed: {
        paramsEdit() {
            return {
                id: this.id,
                code: this.code,
                product: this.product
            }
        },
        paramsDelete() {
            return {
                id: this.id
            }
        }
    },
    mounted() {
        this.loading = true
        this.loadingText = 'Loading...'
        this.loadData()
    },
    methods: {
        loadData() {
            this.$axios.get('product')
                .then((res) => {
                    this.products = res.data.data
                    setTimeout(() => {
                        this.loading = false
                        this.loadingText = ''
                    })
                })
        },
        add(params) {
            this.$axios.post('product_add', params)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        const msg = res.data.msg
                        this.clearAll()
                        this.closeDialog()
                        this.$swal.fire({
                            icon: 'success',
                            title: msg
                        })
                        this.loadData()
                    } else {
                        this.msg = res.data.msg
                        this.dialog = true
                    }
                })
        },
        clearAll() {
            this.code = ''
            this.product = ''
        },
        closeDialog() {
            this.dialog = false
        },
        edit(id) {
            this.$axios.get('product_show?id='+id)
                .then((res) => {
                    this.code = res.data.data.code
                    this.product = res.data.data.product
                    this.id = id
                    this.editDialog = true
                })
        },
        saveEdit() {
            this.$axios.post('product_edit', this.paramsEdit)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        this.id = ''
                        this.msg = res.data.msg
                        this.editDialog = false
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                        this.loadData()
                    } else {
                        this.msg = res.data.msg
                        this.editDialog = true
                    }
                })
        },
        del(id) {
            this.id = id
            this.deleteDialog = true
        },
        saveDelete() {
            this.$axios.post('product_delete', this.paramsDelete)
                .then((res) => {
                    const msg = res.data.msg
                    this.id = ''
                    this.deleteDialog = false
                    this.$swal.fire({
                        icon: 'success',
                        title: msg
                    })
                }).then(
                    this.loadData()
                )
        }
    }
}
</script>

<style>

</style>