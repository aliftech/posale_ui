<template>

    <div>

        <v-navigation-drawer
                app
                relative
                v-model="drawer"
                color="blue"
                dark
                height="100%"
            >
                <v-list>
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title class="text-h6">
                            Sandra Adams
                        </v-list-item-title>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <template v-for="(item, idx) in menus">
                    <v-list-item
                        v-if="!item.subMenu"
                        :key="idx"
                        :to="item.to"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                    <v-list-group
                        v-else
                        :key="idx"
                        :prepend-icon="item.icon"
                        :group="item.to"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="(itemSub, i) in item.subMenu"
                            :key="i"
                            :to="itemSub.to"
                            class="item_menu"
                        >
                            <v-list-item-icon>
                                <v-icon>{{ itemSub.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{ itemSub.text }}</v-list-item-title>
                        </v-list-item>
                    
                    </v-list-group>
                </template>
        </v-navigation-drawer>



        <v-app-bar
            app
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>CORECT-ERP</v-toolbar-title>

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

    </div>

</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            drawer: false,
            menus: [
                {
                    to: '/dashboard',
                    icon: 'mdi-view-dashboard',
                    text: 'Dashboard'
                },
                {
                    icon: 'mdi-cart',
                    text: 'Sales',
                    subMenu: [
                        {
                            to: '/pos',
                            icon: 'mdi-printer-pos',
                            text: 'POS'
                        },
                        {
                            to: '/sale_list',
                            icon: 'mdi-clipboard-list',
                            text: 'Sales List'
                        },
                        {
                            to: '/sale_return_list',
                            icon: 'mdi-clipboard-list',
                            text: 'Sales Return List'
                        }
                    ]
                },
                {
                    to: '/customer_list',
                    icon: 'mdi-account-multiple',
                    text: 'Customers'
                },
                {
                    icon: 'mdi-currency-usd',
                    text: 'Purchases',
                    subMenu: [
                        {
                            to: '/purchase_list',
                            icon: 'mdi-clipboard-list',
                            text: 'Purchases List'
                        },
                        {
                            to: '/purchase_return_list',
                            icon: 'mdi-clipboard-list',
                            text: 'Purchases Return List'
                        }
                    ]
                },
                {
                    icon: 'mdi-charity',
                    text: 'Suplyers',
                    to: '/suplyer_list'
                },
                {
                    icon: 'mdi-cube',
                    text: 'Items',
                    subMenu: [
                        {
                            to: '/inventory',
                            icon: 'mdi-store',
                            text: 'Inventories'
                        },
                        {
                            to: '/product',
                            icon: 'mdi-billiards-rack',
                            text: 'Products'
                        },
                        {
                            to: '/category',
                            icon: 'mdi-shape',
                            text: 'Categories'
                        }, 
                        {
                            to: '/type',
                            icon: 'mdi-call-merge',
                            text: 'Types'
                        },
                        {
                            to: '/brand',
                            icon: 'mdi-watermark',
                            text: 'Brands'
                        }
                    ]
                },
                {
                    icon: 'zmdi zmdi-key',
                    text: 'Authorization',
                    subMenu: [
                        {
                            to: '/icon',
                            icon: 'zmdi zmdi-collection-image',
                            text: 'Icon'
                        },
                        {
                            to: '/menu',
                            icon: 'zmdi zmdi-menu',
                            text: 'Menu'
                        },
                        {
                            to: '/role',
                            icon: 'zmdi zmdi-lock',
                            text: 'Role'
                        },
                        {
                            to: '/role-menu',
                            icon: 'zmdi zmdi-link',
                            text: 'Role Menu'
                        },
                    ]
                }
            ]
        }
    },
    methods: {
        profile () {
            console.log('profile')
        },
        setting () {
            console.log('setting')
        },
        logout () {
            console.log('logout')
        },
        notifications () {
            console.log('notifications')
        }
    }
}
</script>

<style scoped>
    .item_menu {
        padding-left: 15px;
        margin-left: 15px;
    }
</style>