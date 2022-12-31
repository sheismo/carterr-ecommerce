import { createStore } from 'vuex'

//import authModule from './modules/auth/index.js
import productsModule from './modules/products/index.js'

 const store = createStore({
  state: {
  },
  getters: {
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
