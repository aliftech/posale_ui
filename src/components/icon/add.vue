<template>
  
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
              v-bind="attrs"
              v-on="on"
              color="primary"
              dark
          >Add</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Icon</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>        
                  <v-col cols="12">
                      <v-text-field
                          label="Icon*"
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
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="$emit('add', params)"
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
    name: 'Add',
    props: [
        'icon',
        'msg', 
        'dialog'
    ],
    computed: {
        params() {
            return {
                icon: this.icon
            }
        }
    }
}
</script>

<style>

</style>