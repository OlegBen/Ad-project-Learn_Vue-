<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form v-model="valid" ref="form" validation>
                    <v-text-field
                            name="title"
                            label="Ad title"
                            type="title"
                            :rules="[v => !!v || 'Ad title is required']"
                            v-model="title"
                    ></v-text-field>
                    <v-text-field
                            name="description"
                            label="Ad description"
                            type="description"
                            :rules="[v => !!v || 'Ad description is required']"
                            v-model="description"
                            multi-line
                    ></v-text-field>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                color="primary"
                                label="Add to promo?"
                                v-model="promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                :loading="loading"
                                :disabled="!valid || loading"
                                class="success"
                                @click="createAd">Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }

          this.$store.dispatch('createAd', ad).then(() => {
            this.$router.push('/list')
          }).catch(() => {})
        }
      }
    }
  }
</script>