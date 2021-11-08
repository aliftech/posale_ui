<template>
  
    <div>

        <v-card
            app
            elevation="2"
        >

            <v-card-title class="justify-center mb-10">
                Menu List
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
                            :link="link"
                            :menu="menu"
                            :parent="parent"
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
                        :items="menus"
                        :search="search"
                        :loading="loading"
                        :loading-text="loadingText"
                        :footer-props="footerProps"
                    >
                    
                        <template v-slot:item="row">
                            <tr>
                                <td> {{row.item.id}} </td>
                                <td> {{row.item.menu}} </td>
                                <td> <i :class="row.item.icon" class="zmdi-hc-2x"></i> </td>
                                <td> {{row.item.link}} </td>
                                <td> {{row.item.parent}} </td>
                                <td> {{row.item.number}} </td>
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
                :editDialog="editDialog"
                :msg="msg"
                :menu="menu"
                :icon="icon"
                :link="link"
                :parent="parent"
                :id="id"
                v-on:closeEdit="closeEdit"
                v-on:saveEdit="saveEdit"
                :number="number"
            ></edit>


            <delete
                :id="id"
                :deleteDialog="deleteDialog"
                v-on:closeDel="closeDel"
                v-on:saveDel="saveDel"
                :number="number"
            ></delete>

        </v-card>

    </div>

</template>

<script>

import Add from '../menu/add.vue'
import Edit from '../menu/edit.vue'
import Delete from '../menu/delete.vue'

export default {
    name: 'menuList',
    components:{
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
                { text: 'Menu', value: 'menu' },
                { text: 'Icon', value: 'icon' },
                { text: 'Link', value: 'link' },
                { text: 'Parent', value: 'parent' },
                { text: 'Number', value: 'number' },
                { text: 'Created By', value: 'created_by' },
                { text: 'Created At', value: 'created_at' },
                { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            menus: [],
            dialog: false,
            msg: '',
            icon: '',
            id: '',
            menu: '',
            link: '',
            parent: '',
            editDialog: false,
            deleteDialog: false,
            number: ''
        }
    },
    mounted() {
        this.loading = true
        this.loadingText = 'Loading...'
        this.loadData()
    },
    methods: {
        loadData() {
            this.$axios.get('menu')
                .then((res) => {
                    this.menus = res.data.data
                    setTimeout(() => {
                        this.loading = false
                        this.loadingText = ''
                    }, 3000)
                })
        },
        add(params) {
            this.$axios.post('menu_add', params)
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
            this.menu = ''
            this.msg = ''
            this.icon = ''
            this.link = '',
            this.parent = ''
            this.number = ''
        },
        closeDialog() {
            this.dialog = false
        },
        edit(id) {
            this.$axios.get('menu_show?id='+id)
                .then((res) => {
                    this.editDialog = true
                    this.id = id
                    const dt = res.data.data
                    this.menu = dt.menu
                    this.icon = dt.icon
                    this.link = dt.link
                    this.parent = dt.parent
                    this.number = dt.number
                })
        },
        closeEdit() {
            this.id = ''
            this.editDialog = false
        },
        saveEdit(paramsEdit) {
            this.$axios.post('menu_edit', paramsEdit)
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
            this.$axios.post('menu_delete', paramsDelete)
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
    },
    
}
</script>

<style>

</style>