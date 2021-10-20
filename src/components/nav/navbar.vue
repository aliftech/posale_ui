<template>
  
    <v-app-bar
        app
    >
    
        <v-toolbar-title>POSALE</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="notifications" color="black">
                <v-icon>mdi-bell</v-icon>
            </v-btn>



            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-btn @click="profile" class="ma-1" plain>
                            <v-list-item-icon>
                                <v-icon> mdi-account-circle </v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Profile</v-list-item-title>
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn @click="setting" class="ma-1" plain>
                            <v-list-item-icon>
                                <v-icon> mdi-cog </v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>setting</v-list-item-title>
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn @click="logout" class="ma-1" plain>
                            <v-list-item-icon>
                                <v-icon> mdi-logout </v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Log Out</v-list-item-title>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
    
    </v-app-bar>

</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>