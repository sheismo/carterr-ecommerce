export default {
    addToCart(state, payload) {
        state.userCartQty += payload.value
    }
}