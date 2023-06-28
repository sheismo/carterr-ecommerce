import { createStore } from 'vuex'

import productsModule from './modules/products/index.js'

 const store = createStore({
  state: {
    paystackKey: process.env.VUE_APP_PAYSTACK_KEY,
    emailKey: process.env.VUE_APP_EMAIL_KEY
  },
  getters: {
    paystackKey(state) {
        return state.paystackKey
    },
    emailKey(state) {
      return state.emailKey
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productsModule
  }
})

export default store
