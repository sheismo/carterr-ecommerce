export default {
    allProducts(state) {
        return state.allProducts
    },
    hasProducts(state) {
        return state.allProducts && state.allProducts.length > 0
    },
    userCartQty(state) {
        return state.userCartQty
    },
    userCartItems(state) {
        return state.userCartItems
    },
    bestsellerProducts(getters) {
        const  products = getters.allProducts
        const filteredProducts =  products.filter(product => {
            if(product.name.includes('h') && product.price < 1200) {
                return true;
            }
        })
        return filteredProducts.splice(0,8)
    }
}