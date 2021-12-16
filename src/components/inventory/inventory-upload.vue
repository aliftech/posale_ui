<template>
  
    <div>

        <titlebar-add :title="title"></titlebar-add>

        <v-card
            elevation="4"
            class="mt-5"
        >

            <div class="flex-container">

                <div class="flex-item">

                    <v-row class="mb-5 mt-10" align="center">

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-file-input
                                label="File Image"
                                v-model="image"
                                accept="image/*"
                                @change="selectedImage"
                            ></v-file-input>

                            <small class="red--text">
                                {{msg.image}}
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

        <v-dialog
            width="300"
            persistent
            hide-overlay
            v-model="dialog"
        >

            <v-card
                elevation="4"
                color="light"
            >

                <v-card-text>
                    <div class="text-center">
                        <p class="mt-5">uploading...</p>
                        <v-progress-circular
                            indeterminate
                            color="primary"
                            :size="70"
                        ></v-progress-circular>
                    </div>
                </v-card-text>

            </v-card>

        </v-dialog>


        <Footer class="mt-12"></Footer>

    </div>

</template>

<script>

import titlebarAdd from '../toolbar/titlebar-add.vue'
import Footer from '../footer/footer.vue'

export default {
    name: 'inventoryUpload',
    components: {
        titlebarAdd,
        Footer
    },
    data () {
        return {
            title: 'Upload Image',
            image: null,
            msg: '',
            id: '',
            dialog: false,
            status: ''
        }
    },
    created () {
        this.id = this.$route.params.id
    },
    methods: {
        selectedImage (e) {
            this.image = e
        },

        save () {
            const fd = new FormData()
            fd.append('image', this.image, this.image.name)
            fd.append('id', this.id)
            this.dialog = true
            setTimeout(() => {
                this.$axios.post('inventory_upload', fd)
                    .then((res) => {
                        this.status = res.data.status
                        if(this.status === 200) {
                            this.msg = res.data.msg
                            this.dialog = false
                            this.$swal.fire({
                                icon: 'success',
                                title: this.msg
                            })
                            this.$router.push('/inventory')
                        } else {
                            this.msg = res.data.msg
                        }
                    })
            }, 1000)
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

    .v-progress-circular {
        margin: 1rem;
    }
</style>