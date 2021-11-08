<template>
  
    <div>

        <v-card
            elevation="2"
        >

            <v-card-title class="justify-center mb-10">
                Role Menu List
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
                        <add v-on:add="add" :dialog="dialog" :msg="msg" :role="role" :menus="menus"></add>
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
                    :items="roleMenus"
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

        </v-card>

    </div>

</template>

<script>

import Add from '../role_menu/add.vue'

export default {
    name: 'roleMenuList',
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
            roleMenus: [],
            dialog: false,
            msg: '',
            role: '',
            menus: [],
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
            this.$axios.get('rm')
                .then((res) => {
                    this.roleMenus = res.data.data
                    setTimeout(() => {
                        this.loadingText = ''
                        this.loading = false
                    })
                })
        }
    }
}
</script>

<style>

</style>