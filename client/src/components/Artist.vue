<template>
    <v-layout row wrap>
        <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/lists/1.jpg"
                >
              </v-avatar>
              <div class="headline">Artist <span style="font-weight:bold">Artist</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">Artist page</div>
              <v-layout justify-space-between>
                <a href="javascript:;" class="body-2">Home</a>
                <a href="javascript:;" class="body-2">About</a>
                <a href="javascript:;" class="body-2">Github</a>
                <a href="javascript:;" class="body-2">Other</a>
              </v-layout>
            </div>
          </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "Artist",
    components: {},
    data() {
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

</style>

