<template>
  
    <div>

        <div class="flex-container">
            <div class="flex-items">
                <brand-panel></brand-panel>
            </div>
            <div class="flex-items">
                <category-panel></category-panel>
            </div>
            <div class="flex-items">
                <product-panel></product-panel>
            </div>
            <div class="flex-items">
                <inventory-panel></inventory-panel>
            </div>
        </div>

    </div>

</template>

<script>

import brandPanel from '../../components/panel/brand-panel.vue'
import categoryPanel from '../../components/panel/category-panel.vue'
import productPanel from '../../components/panel/product-panel.vue'
import inventoryPanel from '../../components/panel/inventory-panel.vue'

export default {
    name: 'Dashboard',
    components: {
        brandPanel,
        categoryPanel,
        productPanel,
        inventoryPanel
    }
}
</script>

<style scoped>
    .flex-container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 5px;
        flex-wrap: wrap;
    }

    .flex-container div.flex-items {
        flex: 1 0 250px;
        padding: 5px;
    }
</style>