export default {
    allProducts(state) {
        return state.allProducts
    },
    hasProducts(state) {
        return state.allProducts && state.allProducts.length > 0
    },
    userCartQty(state) {
        return state.cart.qty
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
        return state.cart.sumTotal
    },
    notEmptyCart(state) {
        return state.cart.items && state.cart.items.length > 0
    }
}