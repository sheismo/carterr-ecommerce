import { createStore } from 'vuex'

import productsModule from './modules/products/index.js'

 const store = createStore({
  state: {
    paystackKey: 'pk_test_3183a38290015f031e5cc3b6b8fb3d1f20560fa0'
  },
  getters: {
    paystackKey(state) {
        return state.paystackKey
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
