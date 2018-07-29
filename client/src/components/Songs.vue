<template>
    <v-layout row wrap>
        <v-flex>
            <panel title="Songs">  
                <v-card-text style="height: 100px; position: relative">
                    <!-- <v-btn
                        dark
                        right
                        small
                        absolute
                        round
                        @click="navigateTo('create')"
                    >
                        <v-icon dark>add</v-icon>
                    </v-btn> -->
                    <v-dialog v-model="dialog" persistent max-width="500px">
                        <v-btn 
                            slot="activator" 
                            flat
                            right
                            absolute
                        >
                        <v-icon large color="blue darken-2">chat</v-icon>
                        </v-btn>
                        <v-card>
                            <v-btn flat right @click.native="dialog = false">
                                <v-icon>close</v-icon>
                            </v-btn>
                            <v-card-text>
                                <Create>
                                </Create>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-card-text>
                <div>
                <v-card>
                    <v-card-title>
                        Search songs
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="search"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="songs"
                        :search="search"
                        hide-actions
                        :loading="loading"
                        class="elevation-1"
                    >
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-left">{{ props.item.title }}</td>
                            <td class="text-xs-left">{{ props.item.artist }}</td>
                            <td class="text-xs-left">{{ props.item.album }}</td>
                        </template>
                        <v-alert slot="no-results" :value="true" color="error" icon="warning">
                            Your search for "{{ search }}" found no results.
                        </v-alert>
                    </v-data-table>
                </v-card>
              </div>    
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue';
import SongsService from '@/services/SongService';
import Create from '@/components/CreateSong.vue';

  export default {
      name: 'Songs',
      components: {
          Panel,
          Create
      },
    data () {
      return {
        dialog: false,
        search: '',
        songs: [],
        loading: true,
        headers: [
            {
                text: 'Song Name',
                align: 'left',
                value: 'name'
            },
            { 
                text: 'Artist', 
                value: 'artist', 
                align: 'left'
            },
            { 
                text: 'album', 
                value: 'album', 
                align: 'left' 
            }
        ]
      }
    },
    watch: {
      
    },
    mounted () {
        this.getSongs()
            .then(result => {
                this.songs = result.data;
                this.loading = false;
            })
            .catch(error => {
                //TODO: something
            });
    },
    methods: {
      getSongs () {
          return SongsService.index();
      },
      renderSong (song) {
             
       }
    }
  }
</script>

<style scoped>
    td {
        cursor: pointer;
    }
</style>

