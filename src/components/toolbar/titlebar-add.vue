<template>
  
    <v-toolbar
        elevation="4"
    >
    
        <div class="flex-container">

            <div class="flex-left">

                <h3> {{ title }} </h3>

            </div>

        </div>
        
    </v-toolbar>

</template>

<script>
export default {
    name: 'titlebarAdd',
    props: [
        'title'
    ],
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