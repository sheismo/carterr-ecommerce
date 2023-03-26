<template>
    <section>
        <!-- Search Bar -->
       <the-searchbar @search="returnSearchResults"></the-searchbar>
       <h1>Your search results will be displayed below&#10024;</h1>
       <!-- Search Results -->
        <div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <div v-else-if="resultsAreAvailable" class="products">
                <div class="items">
                    <product-item v-for="product in searchResults" :key="product.id" :product="product"></product-item>
                </div>
            </div>
            <div v-else>
                <h3>{{ feedbackText }}</h3>
            </div>
        </div>
    </section>
</template>

<script>
import TheSearchbar from '@/components/layout/TheSearchbar.vue'
import ProductItem from '@/components/products/ProductItem.vue'

export default {
    name: 'SearchProducts',
    components: {
        TheSearchbar, ProductItem
    },
    data() {
        return {
            isLoading: false,
            activeSearch: false,
            searchResults: []
        }
    },
    methods: {
        returnSearchResults(searchTerm) {
            this.activeSearch = true;
            this.isLoading = true
            setTimeout(() => {
                this.isLoading = false
            }, 1000)  
            if (this.$store.getters['products/hasProducts']) {
                const products = this.$store.getters['products/allProducts']
                this.searchResults = products.filter((product) =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }
        }
    },
    computed: {
        resultsAreAvailable() {
            return this.searchResults && this.searchResults.length > 0
        },
        feedbackText() {
            if (!this.results && this.activeSearch) {
                return 'No item matches your search!'
            }
            return 'Search for an item or check out our bestsellers.'
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