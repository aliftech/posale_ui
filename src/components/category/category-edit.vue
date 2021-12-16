<template>
  
    <div>

        <titlebar-add :title="title"></titlebar-add>

        <v-card
            elevation="4"
            class="mt-3"
        >
            <div class="flex-container">

                <div class="flex-item">

                    <v-row class="mb-5 mt-10" align="center">

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Category"
                                clearable
                                v-model="category"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.type}}
                            </small>

                        </v-col>

                    </v-row>

                </div>

            </div>


            <div class="mybutton">

                <div class="mybutton-item mb-10">
                    <v-btn
                        dark
                        color="blue"
                        class="mx-2"
                        small
                        @click="save"
                    >

                        <v-icon
                            dark
                        >
                            mdi-content-save
                        </v-icon>

                            Save
                                    
                    </v-btn>

                    <v-btn
                        color="light"
                        class="mx-2"
                        small
                        @click="cancel"
                    >

                        <v-icon
                            dark
                        >
                            mdi-close-thick
                        </v-icon>

                            Cancel
                                    
                    </v-btn>
                </div>

            </div>


        </v-card>

        <Footer class="mt-12"></Footer>

    </div>

</template>

<script>

import titlebarAdd from '../toolbar/titlebar-add.vue'
import Footer from '../footer/footer.vue'

export default {
    name: 'categoryEdit',
    components: {
        titlebarAdd,
        Footer
    },
    data() {
        return {
            msg: '',
            status: '',
            title: 'Edit Category',
            category: '',
            id: ''
        }
    },
    mounted() {
        this.loadData()
    },

    methods: {
        loadData () {
            this.id = this.$route.params.id
            this.$axios.get('category_show?id='+this.id)
                .then((res) => {
                    this.category = res.data.data.category
                })
        },

        cancel () {
            this.$router.push('/category')
        },

        save () {
            this.$axios.post('category_edit', this.params)
                .then((res) => {
                    this.status = res.data.status
                    if(this.status === 200) {
                        this.msg = res.data.msg
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                        setTimeout(() =>{
                            this.$router.push('/category')
                        }, 1000)
                    } else {
                        this.msg = res.data.msg
                    }
                })
        }
    },

    computed: {
        params () {
            return {
                id: this.id,
                category: this.category
            }
        }
    }
}
</script>

<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: auto auto;
        padding: 10px;
    }

    .flex-container div.flex-item {
        flex: 1 1 400px;
    }

    .mybutton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
        margin: auto auto;
    }
</style>