<template>
  
    <v-row justify="center">
        <v-dialog
            v-model="editDialog"
            persistent
            max-width="600px"
        >

            <v-card>
                <v-card-title>
                    <span class="text-h5">Edit Role</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="Role*"
                                    v-model="role"
                                    clearable
                                ></v-text-field>
                                <small class="red--text">
                                    {{msg.role}}
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
        'editDialog',
        'role'
    ],
    computed: {
        paramsEdit() {
            return {
                id: this.id,
                role: this.role
            }
        }
    }
}
</script>

<style>

</style>