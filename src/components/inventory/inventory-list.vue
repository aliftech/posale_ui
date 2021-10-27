<template>
  
    <div>

        <v-card
            app
            elevation="2"
        >

            <v-card-title class="justify-center mb-10">
                Inventory List
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
                        <add 
                            v-on:add="add" 
                            :dialog="dialog" 
                            :msg="msg" 
                            :code="code"
                            :name="name"
                            :product="product"
                            :brand="brand"
                            :category="category"
                            :stock="stock"
                            :sell_price="sell_price"
                            :status="status"
                            :type="type"
                            :description="description"
                            :suplyer="suplyer"
                            :min_stock="min_stock"
                            :buy_price="buy_price"
                            :profit="profit"
                        >
                        </add>
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
                    :items="inventories"
                    :search="search"
                    :loading="loading"
                    :loading-text="loadingText"
                    :footer-props="footerProps"
                >
                
                    <template v-slot:item="row">
                        <tr>
                            <td> {{row.item.id}} </td>
                            <td> {{row.item.code}} </td>
                            <td> {{row.item.name}} </td>
                            <td> <img :src="row.item.image_path+row.item.image" :alt="row.item.image" width="90" height="90"> </td>
                            <td> {{row.item.product}} </td>
                            <td> {{row.item.brand}} </td>
                            <td> {{row.item.category}} </td>
                            <td> {{row.item.stock}} </td>
                            <td> {{row.item.sell_price}} </td>
                            <td> {{row.item.status}} </td>
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

                                            <v-list-item
                                                @click="upload(row.item.id)"
                                            >
                                                <v-list-item-icon>
                                                    <v-icon>mdi-file-image</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Change Image</v-list-item-title>
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


            <edit 
                :editDialog="editDialog" 
                :id="id" 
                :msg="msg" 
                v-on:closeEdit="closeDialogEdit"
                v-on:edit="saveEdit"
                :code="code"
                :name="name"
                :product="product"
                :brand="brand"
                :category="category"
                :type="type"
                :suplyer="suplyer"
                :stock="stock"
                :min_stock="min_stock"
                :buy_price="buy_price"
                :sell_price="sell_price"
                :profit="profit"
                :description="description"
                :status="status"
            ></edit>


            <upload
                :msg="msg"
                :uploadDialog="uploadDialog"
                :id="id"
                v-on:closeUpload="closeDialogUpload"
                v-on:upload="saveUpload"
                v-on:selected="selectedImage"
                :img="img"
            ></upload>


            <delete
                :id="id"
                :deleteDialog="deleteDialog"
                v-on:closeDel="closeDelete"
                v-on:saveDel="saveDelete"
            ></delete>

        </v-card>

    </div>

</template>

<script>

import Add from '../inventory/add.vue'
import Edit from '../inventory/edit.vue'
import Upload from '../inventory/upload.vue'
import Delete from '../inventory/delete.vue'

export default {
    name: 'inventoryList',
    components: {
        Add,
        Edit,
        Upload,
        Delete
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
            { text: 'Code', value: 'code' },
            { text: 'Item', value: 'name' },
            { text: 'Image', value: 'image' },
            { text: 'Product', value: 'product' },
            { text: 'Brand', value: 'brand' },
            { text: 'Category', value: 'category' },
            { text: 'Stock', value: 'stock' },
            { text: 'Price', value: 'sell_price' },
            { text: 'Status', value: 'status' },
            { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            inventories: [],
            dialog: false,
            id: '',
            code: '',
            name: '',
            product: '',
            brand: '',
            category: '',
            stock: '',
            sell_price: '',
            status: '',
            type: '',
            description: '',
            suplyer: '',
            min_stock: '',
            buy_price: '',
            profit: '',
            msg: '',
            editDialog: false,
            uploadDialog: false,
            img: '',
            deleteDialog: false
        }
    },
    computed: {
        inventoryImage() {
            return require(this.image_path + this.image)
        }
    },
    mounted() {
        this.loading = true
        this.loadingText = 'Loading Data...'
        this.loadData()
    },
    methods:{
        loadData() {
            this.$axios.get('inventory')
                .then((res) => {
                    this.inventories = res.data.data
                    this.image_path = this.inventories.image_path
                    console.log(this.image_path)
                    setTimeout(() => {
                        this.loading = false
                        this.loadingText = ''
                    }, 3000)
                })
        },
        add(params) {
            this.$axios.post('inventory_add', params)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        this.msg = res.data.msg
                        this.clearAll()
                        this.closeDialog()
                        this.loadData()
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                    } else {
                        this.msg = res.data.msg
                        this.dialog = true
                    }
                })
        },
        clearAll() {
            this.code = ''
            this.name = ''
            this.product = ''
            this.brand = ''
            this.category = ''
            this.stock = ''
            this.sell_price = ''
            this.status = ''
            this.type = ''
            this.description = ''
            this.suplyer = ''
            this.min_stock = ''
            this.buy_price = ''
            this.profit = ''
        },
        closeDialog() {
            this.dialog = false
        },
        edit(id) {
            this.$axios.get('inventory_show?id='+id)
                .then((res) =>{
                    const dt = res.data.data
                    this.code = dt.code
                    this.name = dt.name
                    this.product = dt.product
                    this.brand = dt.brand
                    this.category = dt.category
                    this.type = dt.type
                    this.suplyer = dt.suplyer
                    this.stock = dt.stock
                    this.min_stock = dt.min_stock
                    this.buy_price = dt.buy_price
                    this.sell_price = dt.sell_price
                    this.profit = dt.profit
                    this.description = dt.description
                    this.status = dt.status
                    this.id = id
                })
            this.id = id
            this.editDialog = true
        },
        closeDialogEdit() {
            this.editDialog = false
        },
        saveEdit(paramsEdit) {
            this.$axios.post('inventory_edit', paramsEdit)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        this.msg = res.data.msg
                        this.id = ''
                        this.clearAll()
                        this.closeDialogEdit()
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                        this.loadData()
                    } else {
                        this.msg = res.data.msg
                    }
                })
        },
        upload(id) {
            this.id = id
            this.uploadDialog = true
        },
        closeDialogUpload() {
            this.uploadDialog = false
        },
        saveUpload(image) {
            const formData = new FormData()
            formData.append('image', image, image.name)
            formData.append('id', this.id)
            this.$axios.post('inventory_upload', formData)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        this.id = ''
                        this.img = ''
                        this.closeDialogUpload()
                        this.msg = res.data.msg
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                        this.loadData()
                    } else {
                        this.msg = res.data.msg
                    }
                })
        },
        del(id) {
            this.id = id
            this.deleteDialog = true
        },
        closeDelete() {
            this.deleteDialog = false
        },
        saveDelete(paramsDelete) {
            this.$axios.post('inventory_delete', paramsDelete)
                .then((res) => {
                    this.id = ''
                    this.closeDelete()
                    this.msg = res.data.msg
                    this.$swal.fire({
                        icon: 'success',
                        title: this.msg
                    })
                    this.loadData()
                })
        }
    }
}
</script>

<style>

</style>