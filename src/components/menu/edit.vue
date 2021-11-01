<template>
  
    <v-row justify="center">
        <v-dialog
            v-model="editDialog"
            persistent
            max-width="600px"
        >

            <v-card>
                <v-card-title>
                    <span class="text-h5">Edit Menu</span>
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
                                    :items="icon"
                                    @click="appendIcon"
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
                                    :items="parent"
                                    @click="appendParent"
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
        'menu',
        'icon',
        'link',
        'parent'
    ],
    computed: {
        paramsEdit() {
            return {
                id: this.id,
                menu: this.menu,
                icon: this.icon,
                link: this.link,
                parent: this.parent
            }
        }
    },
    methods: {
        appendIcon() {
            this.$axios.get('icon')
                .then((res) => {
                    this.icon = res.data.data.map(item => (item.icon))
                })
        },
        appendParent() {
            this.$axios.get('menu')
                .then((res) => {
                    this.parent = res.data.data.map(item => (item.menu))
                })
        }
    }
}
</script>

<style>

</style>