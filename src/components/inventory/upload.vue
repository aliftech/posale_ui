<template>
  
    <v-row justify="center">
        <v-dialog
            v-model="uploadDialog"
            persistent
            max-width="600px"
        >

            <v-card>
                <v-card-title>
                    <span class="text-h5">Edit Inventory Image</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="ID*"
                                    v-model="id"
                                    disabled
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-file-input
                                    accept="image/*"
                                    label="Product Image"
                                    counter
                                    show-size
                                    v-model="img"
                                    @change="selectedImage"
                                ></v-file-input>
                                <small class="red--text">
                                    {{msg.image}}
                                </small>
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
                            @click="$emit('closeUpload')"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="$emit('upload', image)"
                        >
                            Save
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>

</template>

<script>
export default {
    name: 'Upload',
    props: [
        'uploadDialog',
        'id',
        'msg',
        'img'
    ],
    data() {
        return{
            image: null,
        }
    },
    computed: {
        paramsUpload() {
            return {
                image: this.image
            }
        }  
    },
    methods: {
        selectedImage(event) {
            this.image = event
        }
    }
}
</script>

<style>

</style>