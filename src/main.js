import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue(
  {
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    created () {
      fb.initializeApp({
        apiKey: 'AIzaSyDUbMaMm5YctF6oAFuov5TUCo3DGSsnx7U',
        authDomain: 'ad-project-bdd33.firebaseapp.com',
        databaseURL: 'https://ad-project-bdd33.firebaseio.com',
        projectId: 'ad-project-bdd33',
        storageBucket: 'ad-project-bdd33.appspot.com',
        messagingSenderId: '996281839257'
      })

      fb.auth().onAuthStateChanged(user => {
        if (user) {
          this.$store.dispatch('autoLoginUser', user)
        }
      })
    }
  }
)
