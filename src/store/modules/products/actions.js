export default {
    addToCart(context, payload) {
        context.commit('addToCart', payload)
    },
    increaseCartQty(context, payload) {
        context.commit('increaseCartQty', payload)
    },
    reduceCartQty(context, payload) {
        context.commit('reduceCartQty', payload)
    },
    removeItemFromCart(context, payload) {
        context.commit('removeItemFromCart', payload)
    },
    calculateSumTotal(context) {
        context.commit('calculateSumTotal')
    }
}