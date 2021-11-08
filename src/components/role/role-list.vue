<template>
  
    <div>

        <v-card
            elevation="2"
        >

            <v-card-title class="justify-center mb-10">
                Role List
            </v-card-title>

            <v-container
                
            >

                <v-row
                    align="center"
                >

                    <v-col
                        cols="12"
                        sm="2"
                    >
                        <add v-on:add="add" :dialog="dialog" :msg="msg" :role="role"></add>
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
                    :items="roles"
                    :search="search"
                    :loading="loading"
                    :loading-text="loadingText"
                    :footer-props="footerProps"
                >
                
                    <template v-slot:item="row">
                        <tr>
                            <td> {{row.item.id}} </td>
                            <td> {{row.item.role}} </td>
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

            <edit
                :msg="msg"
                :editDialog="editDialog"
                :id="id"
                :role="role"
                v-on:closeEdit="closeEdit"
                v-on:saveEdit="saveEdit"
            ></edit>


            <delete
                :id="id"
                :deleteDialog="deleteDialog"
                v-on:closeDel="closeDel"
                v-on:saveDel="saveDel"
            ></delete>

        </v-card>

    </div>

</template>

<script>

import Add from '../role/add.vue'
import Edit from '../role/edit.vue'
import Delete from '../role/delete.vue'

export default {
    name: 'roleList',
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
            { text: 'Role', value: 'role' },
            { text: 'Created By', value: 'created_by' },
            { text: 'Created At', value: 'created_at' },
            { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            roles: [],
            dialog: false,
            msg: '',
            role: '',
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
            this.$axios.get('role')
                .then((res) => {
                    this.roles = res.data.data
                    setTimeout(() => {
                        this.loadingText = ''
                        this.loading = false
                    })
                })
        },
        add(params) {
            this.$axios.post('role_add', params)
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
            this.role = ''
        },
        closeDialog() {
            this.dialog = false
        },
        edit(id) {
            this.$axios.get('role_show?id='+id)
                .then((res) => {
                    const dt = res.data.data
                    this.id = id
                    this.editDialog = true
                    this.role = dt.role
                })
        },
        closeEdit() {
            this.id = ''
            this.editDialog = false
        },
        saveEdit(paramsEdit) {
            this.$axios.post('role_edit', paramsEdit)
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
            this.id = ''
            this.deleteDialog = false
        },
        saveDel(paramsDelete) {
            this.$axios.post('role_delete', paramsDelete)
                .then((res) => {
                    this.msg = res.data.msg
                    this.closeDel()
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