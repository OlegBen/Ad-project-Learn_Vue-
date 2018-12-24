export default {
  state: {
    ads: [
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
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}
