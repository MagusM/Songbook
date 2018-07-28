<template>
    <v-layout column>
      <v-flex xs3>  <!-- offset-xs3 -->
        <panel title="Create Song">
            <div class="pd-4 pr-4 pt-2 pb-2">
                <v-layout row>
            <v-flex xs4>
              <v-subheader>Title</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="title"
                v-model="song.title"
                name="title"
                label="Song Title"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Artist</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="password"
                v-model="song.artist"
                name="artist"
                label="Artist"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Genre</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="genre"
                v-model="song.genre"
                name="genre"
                label="Genre"
                :rules="[]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Album</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="album"
                v-model="song.album"
                name="album"
                label="Album"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Album Image URL</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="albumImageUrl"
                v-model="song.albumImageUrl"
                name="albumImageUrl"
                label="Album Image URL"
                :rules="[]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Youtube Id</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                id="youtubeId"
                v-model="song.youtubeId"
                name="youtubeId"
                label="Youtube Id"
                :rules="[]"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-container fluid grid-list-md>
              <v-layout row>
                <v-flex xs4>
                <v-subheader>Tab</v-subheader>
                </v-flex>
                <v-flex xs8>
                <v-text-field
                    id="tab"
                    v-model="song.tab"
                    name="tab"
                    label="Tab"
                    :rules="[]"
                ></v-text-field>
                </v-flex>
              </v-layout>
          </v-container>

          <v-container fluid grid-list-md>
              <v-layout row>
                <v-flex xs4>
                <v-subheader>Lyrics</v-subheader>
                </v-flex>
                <v-flex xs8>
                <v-text-field
                    id="lyrics"
                    v-model="song.lyrics"
                    name="lyrics"
                    label="Lyrics"
                    :rules="[]"
                    multi-line
                ></v-text-field>
                </v-flex>
              </v-layout>
          </v-container>
          

          <v-btn 
            class="cyan"
            ripple dark
            @click="create()"
          >
            create
          </v-btn>
          <br>
          <div>
            <v-alert
                :value="this.success"
                type="success"
            >
                {{success}}
            </v-alert>
            <v-alert 
                :value="this.error" 
                type="error" 
            >
                {{error}}
            </v-alert>
            </div>
          
          </div>
        </panel>
      
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel.vue';
import SongService from "@/services/SongService";

function checkSong(song) {
    const valueArr = [song.title, song.artist, song.album];
    for (let iterator of valueArr) {
        if (null == iterator || '' == iterator) {
            return false;
        }
    }

    return true;
}

export default {
    name: 'createSong',
    components: {
        Panel
    },
    data () {
        return {
            error: null,
            success: null,
            song: {},
            rules: {
                required: (value) => !!value || 'Required.'
            }
        }
    },
    methods: {
        async create () {
            try {
                // if (!checkSong(this.song)) {
                    if (false) {
                    this.error = 'Please fill required inputs.';    
                } else {
                    // const answer = await SongService.create(this.song);
                    // if (200 == answer.status) {
                    //     this.success = 'Song successfully created';
                    // } else {
                    //     this.success = `${answer.status}: ${answer.statusText}`;
                    // } // just to track possible answers
                    this.success = 'Song successfully created';
                    await setTimeout(() => {
                        this.success = null;
                        this.$router.push('create')
                    }, 5000);
                }
            } catch (error) {
                this.error = error.response.data.error;
            }
        }
    },
    mounted () {
        this.song = {
            title: null,
            artist: null,
            genre: null,
            album: null,
            albumImageUrl: null,
            youtubeId: null,
            lyrics: null,
            tab: null
        }
    }
}
</script>

<style scoped>

</style>

