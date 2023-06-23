export default {
    addToCart(context, payload) {
        context.commit('addToCart', payload)
    },
    removeItemFromCart(context, payload) {
        context.commit('removeItemFromCart', payload)
    },
    emptyUserCart(context) {
        context.commit('emptyUserCart')
    },
    saveCartData(context) {
        context.commit('saveCartData')
    },
    getCartData(context) {
        context.commit('getCartData')
    }
}