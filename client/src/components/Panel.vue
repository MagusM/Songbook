<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <slot>
            No slot content defined;
        </slot>
    </div>    
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style scoped>

</style>

