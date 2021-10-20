<template>
  
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
                <add></add>
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
            @update:items-per-page="getItemsPerPage"
        >
        
            <template v-slot:item="row">
                <tr>
                    <td> {{row.item.no}} </td>
                    <td> {{row.item.no_dokumen}} </td>
                    <td> {{row.item.nama_dokumen}} </td>
                    <td> {{row.item.jenis_dokumen}} </td>
                    <td> {{row.item.oleh}} </td>
                    <td> {{row.item.pada}} </td>
                    <td>
                        <edit-dokumen></edit-dokumen>
                        <hapus-dokumen></hapus-dokumen>
                    </td>
                </tr>
            </template>
        
        </v-data-table>

        
    </v-container>

    
  </v-card>

</template>

<script>

import Add from '../brand/add.vue'

export default {
    name: 'Table',
    components: {
        Add
    },
     data () {
        return {
            search: '',
            headers: [
            {
                text: 'No',
                align: 'start',
                value: 'no',
            },
            { text: 'No. Dokumen', value: 'no_dokumen' },
            { text: 'Nama Dokumen', value: 'nama_dokumen' },
            { text: 'Jenis Dokumen', value: 'jenis_dokumen' },
            { text: 'Dibuat Oleh', value: 'oleh' },
            { text: 'Dibuat Pada', value: 'pada' },
            { text: 'Action', value: 'actions', sortable: false }
            ],
            footerProps: {'items-per-page-options': [5, 10, 15]},
            page: 1,
            perPage: 10,
            loading: false,
            loadingText: '',
            brands: []
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
             }, 1000)
             this.$axios.get('brand')
                .then((res) => {
                    this.brands = res.data.data
                })
         }
     }
}
</script>

<style>

</style>