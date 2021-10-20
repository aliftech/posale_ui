<template>
  
            <v-navigation-drawer
                app
                permanent
                expand-on-hover
                color="success"
                dark
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
                        class="item_menu"
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
                        >
                            <v-list-item-icon>
                                <v-icon>{{ itemSub.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{ itemSub.text }}</v-list-item-title>
                        </v-list-item>
                    
                    </v-list-group>
                </template>
            </v-navigation-drawer>

</template>

<script>
export default {
    name: 'Drawer',
    data() {
        return {
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

            ]
        }
    }
}
</script>

<style scoped>
    .item_menu {
        padding-left: 15px;
    }
</style>