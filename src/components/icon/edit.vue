<template>
  
    <v-row justify="center">
        <v-dialog
            v-model="editDialog"
            persistent
            max-width="600px"
        >

            <v-card>
                <v-card-title>
                    <span class="text-h5">Edit Icon</span>
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
                                <v-text-field
                                    label="Icon Name*"
                                    required
                                    clearable
                                    v-model="icon"
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.icon}}
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
                            @click="$emit('closeEdit')"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="$emit('saveEdit', paramsEdit)"
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
    name: 'Edit',
    props: [
        'id',
        'msg',
        'icon',
        'editDialog'
    ],
    computed: {
        paramsEdit() {
            return {
                icon: this.icon,
                id: this.id
            }
        }
    }
}
</script>

<style>

</style>