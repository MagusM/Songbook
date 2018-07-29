<template>
    <v-layout app grow wrap justify-space-around>
        <v-flex> 
            <v-toolbar-title class="title">{{title}}</v-toolbar-title>
            <slot>
                No slot content defined;
            </slot>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: [
        'title'
    ],
    data () {
        return {

        }
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>

<style scoped>
    .title {
        
    }
</style>

