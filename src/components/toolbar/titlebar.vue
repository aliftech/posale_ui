<template>
  
    <v-toolbar
            elevation="4"
        >
    
            <div class="flex-container">

                <div class="flex-left">

                    <h3> {{ title }} </h3>

                </div>

                <div class="flex-right">

                    <v-btn
                        fab
                        dark
                        color="blue"
                        class="mx-2"
                        small
                        @click="add"
                    >

                        <v-icon
                            dark
                        >
                            mdi-pencil
                        </v-icon>
                        
                    </v-btn>

                </div>

            </div>
        
        </v-toolbar>

</template>

<script>
export default {
    name: 'titlebar',
    props: [
        'title',
        'link'
    ],
    methods: {
        add () {
            this.$router.push(this.link)
        }
    }
}
</script>

<style scoped>
    .flex-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
    }

    .flex-container div.flex-left {
        flex-direction: 60%;
    }

    .flex-container div.flex-right {
        flex-direction: 40%;
    }
</style>