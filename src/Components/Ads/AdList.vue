<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card
                        class="elevation-10 mb-3"
                        v-for="ad in myAds"
                        :key="ad.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media
                                    :src="ad.imageSrc"
                                    height="160"
                            >

                            </v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--secondary">{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        class="info"
                                        :to="'/ad/'+ad.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        myAds: [
          {
            title: 'First Add',
            description: 'First Description',
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '123'
          },
          {
            title: 'Second Add',
            description: 'Second Description',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: '124'
          },
          {
            title: 'Third Add',
            description: 'Third Description',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '125'
          }
        ]
      }
    }
  }
</script>
