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
                            <td> {{row.item.menu}} </td>
                            <td> <i :class="row.item.icon"></i> </td>
                            <td> {{row.item.link}} </td>
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
                                            @click="editMenu(row.item.id)"
                                        >
                                            <v-list-item-icon>
                                                <v-icon>mdi-pencil</v-icon>
                                            </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>Edit</v-list-item-title>
                                                </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item
                                            @click="deleteMenu(row.item.id)"
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

        <menu-delete
            :id="id"
            :dialog="dialog"
            v-on:close="close"
            v-on:deleted="deleted"
        ></menu-delete>

        <Footer class="mt-5"></Footer>

    </div>

</template>

<script>

import Titlebar from '../toolbar/titlebar.vue'
import Footer from '../footer/footer.vue'
import menuDelete from '../menu/menu-delete.vue'

export default {
    name: 'menuList',
    components: {
        Titlebar,
        Footer,
        menuDelete
    },
    data () {
        return {
            search: '',
            headers: [
                { text: 'Menu', value: 'type', sortable: false },
                { text: 'Icon', value: 'type', sortable: false },
                { text: 'Link', value: 'type', sortable: false },
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
            title: 'Menu List',
            id: '',
            dialog: false,
            msg: '',
            link: 'menu/add'
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
                this.$axios.get('menu')
                .then((res) => {
                    this.items = res.data.data
                })
            }, 2000)
        },

        editMenu (id) {
            this.$router.push('/menu/edit/'+id)
        },

        deleteMenu (id) {
            this.id = id
            this.dialog = true
        },

        close (dialog) {
            this.dialog = dialog
        },

        deleted (paramId) {
            this.$axios.post('menu_delete', paramId)
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