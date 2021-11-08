<template>
  
  <div>


    <v-card
        elevation="2"
        app
        class="mt-70"
    >
        <v-card-title class="justify-center mb-10">
            Brand List
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
                    <add v-on:add="add" :dialog="dialog" :msg="msg" :code="code" :brand="brand"></add>
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
                :items="brands"
                :search="search"
                :loading="loading"
                :loading-text="loadingText"
                :footer-props="footerProps"
            >
            
                <template v-slot:item="row">
                    <tr>
                        <td> {{row.item.id}} </td>
                        <td> {{row.item.code}} </td>
                        <td> {{row.item.brand}} </td>
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
                    <span class="text-h5">Edit Brand</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>        
                            <v-col cols="12">
                                <v-text-field
                                label="Brand Code*"
                                required
                                clearable
                                v-model="code"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                label="Brand Name*"
                                required
                                clearable
                                v-model="brand"
                                ></v-text-field>
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
                    Are You Sure Want To Delete This Brand?
                </v-card-title>
                <v-card-text>The brand data you deleted can't recovered.</v-card-text>
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

import Add from './brand-add.vue'

export default {
    name: 'brandList',
    components: {
        Add,
    },
     data () {
        return {
            search: '',
            headers: [
            {
                text: 'ID',
                align: 'start',
                value: 'id',
            },
            { text: 'Brand Code', value: 'code' },
            { text: 'Brand Name', value: 'brand' },
            { text: 'Created By', value: 'created_by' },
            { text: 'Created At', value: 'created_at' },
            { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            brands: [],
            dialog: false,
            brand: '',
            code: '',
            id: '',
            editDialog: false,
            deleteDialog: false,
            msg: ''
        }
     },
     computed: {
         paramsEdit() {
             return {
                 code: this.code,
                 brand: this.brand,
                 id: this.id
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
         this.loadingText = 'Loading Data...'
         this.loadData()
     },
     methods: {
         loadData() {
             setTimeout(() => {
                 this.loading = false
                 this.loadingText = ''
             }, 3000)
             this.$axios.get('brand')
                .then((res) => {
                    this.brands = res.data.data
                })
         },
         add(params) {
            this.$axios.post('brand_add', params)
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
                }  else {
                    this.msg = res.data.msg
                    this.dialog = true
                }
            })
        },
        clearAll() {
            this.code = ''
            this.brand = ''
        },
        closeDialog() {
            this.dialog = false
        },
        edit(id) {
            this.$axios.get('http://localhost:8080/brand_show?id='+id)
                .then((res) => {
                    const dt = res.data.data
                    this.id = dt.id
                    this.code = dt.code
                    this.brand = dt.brand
                    this.editDialog = true
                })
        },
        saveEdit() {
            this.$axios.post('brand_edit', this.paramsEdit)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        const msg = res.data.msg
                        this.clearAll()
                        this.closeEditDialog()
                        this.id = ''
                        this.$swal.fire({
                            icon: 'success',
                            title: msg
                        })
                        this.loadData()
                    } else {
                        this.msg =  res.data.msg
                        this.editDialog = false
                    }
                })
        },
        closeEditDialog() {
            this.editDialog = false
        },
        del(id) {
            this.id = id
            this.deleteDialog = true
        },
        saveDelete() {
            this.$axios.post('brand_delete', this.paramsDelete)
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