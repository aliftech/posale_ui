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
            <span class="text-h5">Add Role Menu</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>        
                  <v-col cols="12">
                      <v-autocomplete
                        label="Role*"
                        v-model="role"
                        :items="roles"
                      ></v-autocomplete>
                      <small class="red--text">
                          {{msg.role}}
                      </small>
                  </v-col>
              </v-row>

              <v-row>
                  
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
        'msg',
        'dialog',
        'role',
        'menus'
    ],
    data() {
        return {
            roles: []
        }
    },
    mounted() {
        this.getMenu()
        this.getRole()
    },
    methods: {
        getMenu() {
            this.$axios.get('menu')
                .then((res) => {
                    this.menus = res.data.data
                })
        },
        getRole() {
            this.$axios.get('role')
                .then((res) => {
                    this.roles = res.data.data.map(item => (item.role))
                })
        }
    }
}
</script>

<style>

</style>