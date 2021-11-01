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
                          label="Menu*"
                          v-model="menu"
                      ></v-text-field>
                      <small class="red--text">
                          {{msg.menu}}
                      </small>
                  </v-col>  
                  <v-col cols="12">
                      <i :class="icon" class="zmdi-hc-2x"></i>
                  </v-col>   
                  <v-col cols="12">
                      <v-autocomplete
                        label="Icon*"
                        v-model="icon"
                        :items="icons"
                        clearable
                      ></v-autocomplete>
                      <small class="red--text">
                          {{msg.icon}}
                      </small>
                  </v-col>
                  <v-col cols="12">
                      <v-text-field
                          label="Link*"
                          v-model="link"
                      ></v-text-field>
                      <small class="red--text">
                          {{msg.link}}
                      </small>
                  </v-col>
                  <v-col cols="12">
                      <v-autocomplete
                        label="Parent"
                        v-model="parent"
                        :items="parents"
                      ></v-autocomplete>
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
        'dialog',
        'menu',
        'icon',
        'link',
        'parent',
        'msg'
    ],
    computed: {
        params() {
            return {
                menu: this.menu,
                icon: this.icon,
                link: this.link,
                parent: this.parent
            }
        }
    },
    data() {
        return {
            parents: [],
            icons: []
        }
    },
    mounted() {
        this.getParents()
        this.getIcon()
    },
    methods: {
        getParents() {
            this.$axios.get('menu')
                .then((res) => {
                    this.parents = res.data.data.map(item => (item.menu))
                })
        },
        getIcon() {
            this.$axios.get('icon')
                .then((res) => {
                    this.icons = res.data.data.map((item) => item.icon)
                })
        }
    }
}
</script>

<style>

</style>