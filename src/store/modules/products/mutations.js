export default {
    addToCart(state, payload) {
        state.cart.qty += payload.value.qty
        state.cart.items.push(payload.value)  
    },
    increaseCartQty(state, payload) {
        state.cart.qty += payload
    },
    reduceCartQty(state, payload) {
        state.cart.qty -= payload
        if (state.cart.qty < 0) {
            state.cart.qty = 0
        }
    },
    removeItemFromCart(state, payload) {
        state.cart.items = state.cart.items.filter(p => p.id !== payload)
    },
    calculateSumTotal(state) {
        let totalPrice = 0
        for (const item of state.cart.items) {
            const itemTotal = item.qty * item.price
            totalPrice += itemTotal
        }
        state.cart.sumTotal = totalPrice.toFixed(2)
    },
    emptyUserCart(state) {
        state.cart.qty = 0
        state.cart.items = []
    },
    saveCartData(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    getCartData(state) {
        let newCartData = window.localStorage.getItem('cart')
        newCartData = newCartData === [] ? [] : newCartData

        state.cart = JSON.parse(newCartData)
    }
}