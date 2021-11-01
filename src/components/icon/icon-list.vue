<template>
  
    <div>

        <v-card
            app
            elevation="2"
        >

            <v-card-title class="justify-center mb-10">
                Icon List
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
                            :dialog="dialog"
                            :msg="msg"
                            :icon="icon"
                            v-on:add="add"
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
            
                
                <v-container fluid class="justify-center">

                    <v-data-table
                        :headers="headers"
                        :items="icons"
                        :search="search"
                        :loading="loading"
                        :loading-text="loadingText"
                        :footer-props="footerProps"
                    >
                    
                        <template v-slot:item="row">
                            <tr>
                                <td> {{row.item.id}} </td>
                                <td> <i :class="row.item.icon" class="zmdi-hc-2x"></i> {{row.item.icon}} </td>
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

                
            </v-container>


            <edit
                :msg="msg"
                :id="id"
                :icon="icon"
                :editDialog="editDialog"
                v-on:closeEdit="closeEdit"
                v-on:saveEdit="saveEdit"
            ></edit>


            <delete
                :id="id"
                :deleteDialog="deleteDialog"
                v-on:closeDel="closeDel"
                v-on:saveDel="saveDelete"
            ></delete>

        </v-card>

    </div>

</template>

<script>

import Add from '../icon/add.vue'
import Edit from '../icon/edit.vue'
import Delete from '../icon/delete.vue'


export default {
    name: 'iconList',
    components: {
        Add,
        Edit,
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
                { text: 'Icon', value: 'icon' },
                { text: 'Created By', value: 'created_by' },
                { text: 'Created At', value: 'created_at' },
                { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            icons: [],
            dialog: false,
            msg: '',
            icon: '',
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
            this.$axios.get('icon')
                .then((res) => {
                    this.icons = res.data.data
                    setTimeout(() => {
                        this.loading = false
                        this.loadingText = ''
                    }, 3000)
                })
        },
        add(params) {
            this.$axios.post('icon_add', params)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
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
            this.icon = ''
        },
        closeDialog() {
            this.dialog = false
        },
        edit(id) {
            this.$axios.get('icon_show?id='+id)
                .then((res) => {
                    this.icon = res.data.data.icon
                })
            this.id = id
            this.editDialog = true
        },
        closeEdit() {
            this.id = ''
            this.editDialog = false
        },
        saveEdit(paramsEdit) {
            this.$axios.post('icon_edit', paramsEdit)
                .then((res) => {
                    const status = res.data.status
                    if(status === 200) {
                        this.clearAll()
                        this.closeEdit()
                        this.msg = res.data.msg
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
        closeDel() {
            this.deleteDialog = false
            this.id = ''
        },
        saveDelete(paramsDelete) {
            this.$axios.post('icon_delete', paramsDelete)
                .then((res) => {
                    this.closeDel()
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