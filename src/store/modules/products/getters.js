export default {
    allProducts(state) {
        return state.allProducts
    },
    hasProducts(state) {
        return state.allProducts && state.allProducts.length > 0
    }
}