<template>
  
    <v-row justify="center">
                <v-dialog
                    v-model="editDialog"
                    persistent
                    max-width="600px"
                >

                <v-card>
                    <v-card-title>
                        <span class="text-h5">Edit Suplyer</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                    label="Suplyer Code*"
                                    required
                                    clearable
                                    v-model="code"
                                    ></v-text-field>
                                    <small class="red--text">
                                        {{msg.code}}
                                    </small>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                    label="Suplyer Name*"
                                    required
                                    clearable
                                    v-model="suplyer_name"
                                    ></v-text-field>
                                    <small class="red--text">
                                        {{msg.suplyer_name}}
                                    </small>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                    label="Suplyer Address*"
                                    required
                                    clearable
                                    v-model="address"
                                    ></v-text-field>
                                    <small class="red--text">
                                        {{msg.address}}
                                    </small>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                    label="Suplyer Phone*"
                                    required
                                    clearable
                                    v-model="phone"
                                    ></v-text-field>
                                    <small class="red--text">
                                        {{msg.phone}}
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
        'code',
        'suplyer_name',
        'address',
        'phone'
    ],
    computed: {
        paramsEdit() {
            return {
                code: this.code,
                id: this.id,
                suplyer_name: this.suplyer_name,
                address: this.address,
                phone: this.phone
            }
        }
    }
}
</script>

<style>

</style>