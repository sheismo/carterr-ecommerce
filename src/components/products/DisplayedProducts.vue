<template>
  <section>
    <div class="display">
        <displayed-product
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
        ></displayed-product>
    </div>
  </section>
</template>

<script>
import DisplayedProduct from './DisplayedProduct.vue'

export default {
    name: 'DisplayedProducts',
    components: { 
        DisplayedProduct
    },
    data() {
        return {
            displayedProducts: [
                {
                    id: '01',
                    category: 'phones',
                    image: '@/assets/products-images/phones/iPhone14.png'
                },
                {
                    id: '02',
                    category: 'laptops',
                    // image: ''
                },
                {
                    id: '03',
                    category: 'consoles',
                    // image: ''
                },
                {
                    id: '01',
                    category: 'headphones',
                    // image: ''
                }
            ]
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

.display {
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

    .display {
        flex-direction: column;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    section {
        width: 100%;
        padding: 5%;
    }

    .display {
        flex-direction: column;
    }
}
</style>