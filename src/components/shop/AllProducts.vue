<template>
    <section>
        <h1>Welcome to our shop&#10024;</h1>
        <div v-if="isLoading">
            <base-spinner></base-spinner>
        </div>
        <div v-else-if="hasProducts" class="products">
            <div v-if="phones">
                <h2>PHONES</h2>
                <div class="items">
                    <product-item v-for="product in phones" :key="product.id" :product="product"></product-item>
                </div>
            </div>
            
            <div v-if="laptops">
                <h2>LAPTOPS</h2>
                <div class="items">
                    <product-item v-for="product in laptops" :key="product.id" :product="product"></product-item>
                </div>
            </div>
            
            <div v-if="headphones">
                <h2>HEADPHONES</h2>
                <div class="items">
                    <product-item v-for="product in headphones" :key="product.id" :product="product"></product-item>
                </div>
            </div>
            
            <div v-if="consoles">
                <h2>GAMING CONSOLES</h2>
                <div class="items">
                    <product-item v-for="product in consoles" :key="product.id" :product="product"></product-item>
                </div>
            </div>
        </div>
        <div v-else>
            <h3>No Products Available In The Shop Yet</h3>
        </div>
    </section>
</template>

<script>
import ProductItem from '@/components/products/ProductItem.vue'

export default {
    name: 'AllProducts',
    components: {
        ProductItem
    },
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        laptops() {
            const products = this.$store.getters['products/allProducts']
            const laptops = products.filter(product => {
                return product.category === 'laptops'
            })
            return laptops
        },
        phones() {
            const products = this.$store.getters['products/allProducts']
            const phones = products.filter(product => {
                return product.category === 'phones'
            })
            return phones
        },
        headphones() {
            const products = this.$store.getters['products/allProducts']
            const headphones = products.filter(product => {
                return product.category === 'headphones'
            })
            return headphones
        },
        consoles() {
            const products = this.$store.getters['products/allProducts']
            const consoles = products.filter(product => {
                return product.category === 'consoles'
            })
            return consoles
        },
        hasProducts() {
            return this.$store.getters['products/hasProducts']
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

h1 {
    font-size: 1.5rem;
    text-align: center;
}

h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #EF2E3B;
}

h3 {
    font-size: 1rem;
    font-weight: 300;
    color: #EF2E3B;
    text-align: center;
}

.products div {
    margin-bottom: 20px;
}

.items {
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

    .items {
        flex-direction: column;
    }
}
</style>