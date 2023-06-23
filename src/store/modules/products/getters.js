export default {
    allProducts(state) {
        return state.allProducts
    },
    hasProducts(state) {
        return state.allProducts && state.allProducts.length > 0
    },
    userCartQty(state) {
        let totalQty = 0
        for (const item of state.cart.items) {
            totalQty += item.qty
        }
        return totalQty
    },
    userCartItems(state) {
        return state.cart.items
    },
    bestsellerProducts(getters) {
        const  products = getters.allProducts
        const filteredProducts =  products.filter(product => {
            if(product.name.includes('h') && product.price < 1200) {
                return true;
            }
        })
        return filteredProducts.splice(0,8)
    },
    sumTotal(state) {
        let totalPrice = 0
        for (const item of state.cart.items) {
            const itemTotal = item.qty * item.price
            totalPrice += itemTotal
        }
        return totalPrice.toFixed(2)
    },
    notEmptyCart(state) {
        return state.cart.items && state.cart.items.length > 0
    }
}