<template>
  
    <div>

        <titlebar-add :title="title"></titlebar-add>

        <v-card
            elevation="4"
            class="mt-3"
        >
            <div class="flex-container">

                <div class="flex-item">

                    <v-row class="mb-5 mt-10" align="center">

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Submenu"
                                clearable
                                v-model="submenu"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.subMenu}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >
                            <i :class="icon" class="zmdi-hc-2x"></i>
                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-autocomplete
                                label="Icon"
                                clearable
                                v-model="icon"
                                :items="icons"
                            ></v-autocomplete>

                            <small class="red--text">
                                {{msg.icon}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Link"
                                clearable
                                v-model="link"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.link}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-text-field
                                label="Number"
                                clearable
                                v-model="number"
                            ></v-text-field>

                            <small class="red--text">
                                {{msg.number}}
                            </small>

                        </v-col>

                        <v-col
                            md="12"
                            sm="12"
                            lg="12"
                        >

                            <v-autocomplete
                                label="Parent Menu"
                                clearable
                                v-model="parent"
                                :items="parents"
                            ></v-autocomplete>

                            <small class="red--text">
                                {{msg.parent}}
                            </small>

                        </v-col>

                    </v-row>

                </div>

            </div>


            <div class="mybutton">

                <div class="mybutton-item mb-10">
                    <v-btn
                        dark
                        color="blue"
                        class="mx-2"
                        small
                        @click="save"
                    >

                        <v-icon
                            dark
                        >
                            mdi-content-save
                        </v-icon>

                            Save
                                    
                    </v-btn>

                    <v-btn
                        color="light"
                        class="mx-2"
                        small
                        @click="cancel"
                    >

                        <v-icon
                            dark
                        >
                            mdi-close-thick
                        </v-icon>

                            Cancel
                                    
                    </v-btn>
                </div>

            </div>


        </v-card>

        <Footer class="mt-12"></Footer>

    </div>

</template>

<script>

import titlebarAdd from '../toolbar/titlebar-add.vue'
import Footer from '../footer/footer.vue'

export default {
    name: 'submenuAdd',
    components: {
        titlebarAdd,
        Footer
    },
    data() {
        return {
            msg: '',
            status: '',
            title: 'Add Submenu',
            submenu: '',
            icon: '',
            link: '',
            parent: '',
            number: '',
            icons: '',
            parents:  ''
        }
    },
    computed: {
        params () {
            return {
                subMenu: this.submenu,
                icon: this.icon,
                link: this.link,
                number: this.number,
                parent: this.parent
            }
        }
    },
    created () {
        this.loadIcon()
        this.loadParent()
    },
    methods: {
        loadIcon () {
            this.$axios.get('icon')
                .then((res) => {
                    this.icons = res.data.data.map(item => (item.icon))
                })
        },

        loadParent () {
            this.$axios.get('menu')
                .then((res) => {
                    this.parents = res.data.data.map(item => (item.menu))
                })
        },

        cancel () {
            this.$router.push('/submenu')
        },

        save () {
            this.$axios.post('submenu_add', this.params)
                .then((res) => {
                    this.status = res.data.status
                    if(this.status === 200) {
                        this.msg = res.data.msg
                        this.$swal.fire({
                            icon: 'success',
                            title: this.msg
                        })
                        setTimeout(() => {
                            this.$router.push('/submenu')
                        }, 1000)
                    } else {
                        this.msg = res.data.msg
                    }
                })
        }
    }
}
</script>

<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin: auto auto;
        padding: 10px;
    }

    .flex-container div.flex-item {
        flex: 1 1 400px;
    }

    .mybutton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
        margin: auto auto;
    }
</style>