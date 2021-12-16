<template>
  
    <div>

        <titlebar :title="title" :link="link"></titlebar>

        <v-card
            elevation="4"
            class="mt-3"
        >
            <div class="flex-container">

                <div class="flex-item">

                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        class="pd-7 mr-3"
                    >
                    </v-text-field>

                </div>

            </div>


            <v-container
                fluid
                class="justify-center"
            >

                <v-data-table
                    :headers="headers"
                    :items="items"
                    :search="search"
                    :loading="loading"
                    :loading-text="loadingText"
                    :footer-props="footerProps"
                    class="table-padding"
                >

                    <template v-slot:item="row">
                        <tr>
                            <td> {{row.item.code}} </td>
                            <td> {{row.item.name}} </td>
                            <td> <img :src="row.item.image_path + row.item.image" :alt="row.item.image" width="80" height="auto"> </td>
                            <td> {{row.item.product}} </td>
                            <td> {{row.item.category}} </td>
                            <td> {{row.item.created_by}} </td>
                            <td> {{row.item.created_at}} </td>
                            <td>

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
                                            @click="viewInventory(row.item.id)"
                                        >
                                            <v-list-item-icon>
                                                <v-icon>mdi-eye</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>View Details</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item
                                            @click="imageInventory(row.item.id)"
                                        >
                                            <v-list-item-icon>
                                                <v-icon>mdi-tray-arrow-up</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>Change Image</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item
                                            @click="editInventory(row.item.id)"
                                        >
                                            <v-list-item-icon>
                                                <v-icon>mdi-pencil</v-icon>
                                            </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Edit</v-list-item-title>
                                                </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item
                                            @click="deleteInventory(row.item.id)"
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
                            </td>
                        </tr>
                    </template>
                

                </v-data-table>

            </v-container>
        </v-card>


        <inventory-delete
            :id="id"
            :dialog="dialog"
            v-on:close="close"
            v-on:deleted="deleted"
        ></inventory-delete>

        <Footer class="mt-5"></Footer>

    </div>

</template>

<script>

import Titlebar from '../toolbar/titlebar.vue'
import Footer from '../footer/footer.vue'
import inventoryDelete from '../inventory/inventory-delete.vue'

export default {
    name: 'inventoryList',
    components: {
        Titlebar,
        Footer,
        inventoryDelete
    },
    data () {
        return {
            search: '',
            headers: [
                { text: 'Code', value: 'code', sortable: false },
                { text: 'Item Name', value: 'name', sortable: false },
                { text: 'Item Image', value: 'image', sortable: false },
                { text: 'Product Name', value: 'product', sortable: false },
                { text: 'Category', value: 'brand', sortable: false },
                { text: 'Created By', value: 'created_by', sortable: false },
                { text: 'Created At', value: 'created_at', sortable: false },
                { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            items: [],
            title: 'Item List',
            id: '',
            dialog: false,
            msg: '',
            link: 'inventory/add'
        }
    },

    mounted () {
        this.loading = true
        this.loadingText = 'Loading...'
        this.loadData()
    },

    methods: {
        loadData () {
            setTimeout(() => {
                this.loading = false
                this.loadingText = ''
                this.$axios.get('inventory')
                .then((res) => {
                    this.items = res.data.data
                })
            }, 2000)
        },

        imageInventory (id) {
            this.$router.push('/inventory/upload/'+id)
        },

        viewInventory (id) {
            this.$router.push('/inventory/view/'+id)
        },

        editInventory (id) {
            this.$router.push('/inventory/edit/'+id)
        },

        deleteInventory (id) {
            this.id = id
            this.dialog = true
        },

        close (dialog) {
            this.dialog = dialog
        },

        deleted (paramId) {
            this.$axios.post('inventory_delete', paramId)
                .then((res) => {
                    this.msg = res.data.msg
                    this.$swal.fire({
                        icon: 'success',
                        title: this.msg
                    })
                    setTimeout(() => {
                        this.id = ''
                        this.dialog = ''
                    }, 1000)
                    this.loadData()
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
        width: 100%;
        padding: 10px;
        margin: auto auto;
    }

    .flex-container div.flex-item {
        flex: 80%;
    }

    .flex-table {
        display: flex;
        margin: auto auto;
        width: 80%;
        padding: 10px;
        justify-content: center;
        align-items: center;
        background-color: aqua;
    }

    .table-padding {
        padding: 20px;
    }
</style>