<template>
  
    <div>

        <v-card
            app
            elevation="2"
        >

            <v-card-title class="justify-center mb-10">
                Suplyer List
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
                            :id="id"
                            :msg="msg"
                            :dialog="dialog"
                            v-on:add="saveAdd"
                            :code="code"
                            :suplyer_name="suplyer_name"
                            :address="address"
                            :phone="phone"
                        ></add>
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
                    :items="suplyers"
                    :search="search"
                    :loading="loading"
                    :loading-text="loadingText"
                    :footer-props="footerProps"
                >
                
                    <template v-slot:item="row">
                        <tr>
                            <td> {{row.item.id}} </td>
                            <td> {{row.item.code}} </td>
                            <td> {{row.item.suplyer_name}} </td>
                            <td> {{row.item.address}} </td>
                            <td> {{row.item.phone}} </td>
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

            <delete
                :id="id"
                :deleteDialog="deleteDialog"
                v-on:closeDel="closeDel"
                v-on:saveDel="saveDel"
            ></delete>


            <edit
                :id="id"
                :editDialog="editDialog"
                :msg="msg"
                :code="code"
                :suplyer_name="suplyer_name"
                :address="address"
                :phone="phone"
                v-on:closeEdit="closeEdit"
                v-on:saveEdit="saveEdit"
            ></edit>

        </v-card>

    </div>

</template>

<script>

import Add from '../suplyer/add.vue'
import Delete from '../suplyer/delete.vue'
import Edit from '../suplyer/edit.vue'

export default {
    name: 'suplyerList',
    components: {
        Add,
        Delete,
        Edit
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
            { text: 'Suplyer Name', value: 'suplyer_name' },
            { text: 'Address', value: 'address' },
            { text: 'Phone', value: 'phone' },
            { text: 'Created By', value: 'created_by' },
            { text: 'Created At', value: 'created_at' },
            { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            suplyers: [],
            dialog: false,
            msg: '',
            suplyer_name: '',
            code: '',
            address: '',
            phone: '',
            id: '',
            editDialog: false,
            deleteDialog: false
        }
    },
    mounted() {
        this.loading = true
        this.loadingText = 'Loading...'
        this.loadData()
    },
    methods: {
        loadData() {
            this.$axios.get('suplyer')
                .then((res) => {
                    this.suplyers = res.data.data
                    setTimeout(() => {
                        this.loading = false
                        this.loadingText = ''
                    }, 3000)
                })
        },
        saveAdd(params) {
            this.$axios.post('suplyer_add', params)
                .then((res) => {
                    const status = res.data.status
                    if(status == 200) {
                        this.clearAll()
                        this.closeDialog()
                        this.msg = res.data.msg
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
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
            this.suplyer_name = ''
            this.address = ''
            this.phone =''
        },
        closeDialog() {
            this.dialog = false
        },
        del(id) {
            this.id = id
            this.deleteDialog = true
        },
        closeDel() {
            this.deleteDialog = false
        },
        saveDel(paramsDelete) {
            this.$axios.post('suplyer_delete', paramsDelete)
                .then((res) => {
                    this.msg = res.data.msg
                    this.id = ''
                    this.closeDel()
                    this.$swal.fire({
                        icon: 'success',
                        title: this.msg
                    })
                    this.loadData()
                })
        },
        edit(id) {
            this.$axios.get('suplyer_show?id='+id)
                .then((res) => {
                    this.id = id
                    const dt = res.data.data
                    this.code = dt.code
                    this.suplyer_name = dt.suplyer_name
                    this.address = dt.address
                    this.phone = dt.phone
                    this.editDialog = true
                })
        },
        closeEdit() {
            this.editDialog = false
        },
        saveEdit(paramsEdit) {
            this.$axios.post('suplyer_edit', paramsEdit)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        this.id = ''
                        this.clearAll()
                        this.closeEdit()
                        this.msg = res.data.msg
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                        this.loadData()
                    } else {
                        this.editDialog = true
                        this.msg = res.data.msg
                    }
                })
        }
    }
}
</script>

<style>

</style>