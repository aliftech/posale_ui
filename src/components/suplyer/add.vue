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
          >Add</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Suplyer</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>        
                  <v-col cols="12">
                      <v-text-field
                          label="Suplyer Code*"
                          v-model="code"
                      ></v-text-field>
                      <small class="red--text">
                          {{msg.code}}
                      </small>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field
                          label="Suplyer Name*"
                          v-model="suplyer_name"
                      ></v-text-field>
                      <small class="red--text">
                          {{msg.suplyer_name}}
                      </small>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field
                          label="Suplyer Address*"
                          v-model="address"
                      ></v-text-field>
                      <small class="red--text">
                          {{msg.address}}
                      </small>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field
                          label="Suplyer Phone*"
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
        'id',
        'msg',
        'dialog',
        'phone',
        'code',
        'suplyer_name',
        'address'
    ],
    computed: {
        params() {
            return {
                code: this.code,
                suplyer_name: this.suplyer_name,
                address: this.address,
                phone: this.phone
            }
        }
    },
}
</script>

<style>

</style>