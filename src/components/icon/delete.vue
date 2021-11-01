<template>
  
    <v-row justify="center">
        <v-dialog
            v-model="deleteDialog"
            persistent
            max-width="290"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Are You Sure Want To Delete This Icon?
                </v-card-title>
                <v-card-text>The icon data you deleted can't be recovered.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red darken-1"
                        text
                        @click="$emit('closeDel')"
                    >
                        No
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="$emit('saveDel', paramsDelete)"
                    >
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>

</template>

<script>
export default {
    name: 'Delete',
    props: [
        'id',
        'deleteDialog'
    ],
    computed: {
        paramsDelete() {
            return {
                id: this.id
            }
        }
    }
}
</script>

<style>

</style>