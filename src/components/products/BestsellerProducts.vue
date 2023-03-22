<template>
  <section>
    <h2>Our Best Sellers</h2>
    <div class="best">
        <product-item
            v-for="product in bestsellerProducts" 
            :key="product.id" 
            :product="product"
        ></product-item>
    </div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    name: 'BestsellerProducts',
    components: {
        ProductItem
    },
    computed: {
        bestsellerProducts() {
            const  products = this.$store.getters['products/allProducts']
            const filteredProducts =  products.filter(product => {
                if(product.name.includes('h') && product.price < 1200) {
                    return true;
                }
            })
            return filteredProducts.splice(0,8)
        }
    }
}
</script>

<style scoped>
section {
    width: 75%;
    margin: 2% auto 5%;
    padding: 0;
}

h2 {
    font-size: 1.5rem;
    text-align: center;
}

.best {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    section {
        width: 85%;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    section {
        width: 90%;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    section {
        width: 100%;
        padding: 5%;
    }

    .best {
        flex-direction: column;
    }
}
</style>