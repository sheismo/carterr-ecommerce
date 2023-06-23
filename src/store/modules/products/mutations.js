export default {
    addToCart(state, payload) {
        state.cart.items.push(payload.value)  
    },
    removeItemFromCart(state, payload) {
        state.cart.items = state.cart.items.filter(p => p.id !== payload)
    },
    emptyUserCart(state) {
        state.cart.items = []
        //save the cart data when cart gets emptied after successful payment 
        this.saveCartData()
    },
    saveCartData(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    getCartData(state) {
        let newCartData = JSON.parse(window.localStorage.getItem('cart'))
        state.cart = newCartData === null ? state.cart : newCartData
    }
}