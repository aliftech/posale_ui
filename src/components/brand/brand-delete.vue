<template>
  
    <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="dialog"
    >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Do you really want to delete this brand ?</v-toolbar>
            <v-card-text>
              <div class="text-h6 pa-5">The brand you deleted can't be recovered</div>
            </v-card-text>
            <v-card-actions class="justify-end">
                <v-btn
                    text
                    @click="deleted"
                >Yes</v-btn>
                <v-btn
                    text
                    @click="$emit('close', dialog = false)"
                >No</v-btn>
            </v-card-actions>
          </v-card>
        </template>
    </v-dialog>

</template>

<script>
export default {
    name: 'brandDelete',
    props: [
        'id',
        'dialog'
    ],

    computed: {
        paramId () {
            return {
                id: this.id
            }
        }
    },

    methods: {
        deleted () {
            this.$emit('deleted', this.paramId)
        }
    }
}
</script>

<style>

</style>