<template>
    <panel title="Songs">
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
    </panel>
</template>

<script>
import Panel from '@/components/Panel.vue';
import SongsService from '@/services/SongService';

  export default {
      name: 'Songs',
      components: {
          Panel
      },
    data () {
      return {
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
      this.songs = this.getSongs();
      this.loading = false;
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

