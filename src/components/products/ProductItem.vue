<template>
    <div class="product" @click="viewProduct()">
        <base-card class="card">
            <img :src="product.image" :alt="product.name">
        </base-card>
        <div>
            <p>{{ product.name }}</p>
            <p>${{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: ['product'],
    methods: {
        viewProduct() {
            this.$router.push('/shop/' + this.product.id)
        }
    }

}
</script>

<style scoped>
.product {
    width: 24%;
    margin-bottom: 20px;
}

div > p:first-of-type {
    color: #222;
    font-size: 0.8rem;
    font-weight: 300;
}

div > p:last-of-type {
    color: #010101;
    font-size: 0.8rem;
    font-weight: 600;
}

img {
    max-width: 90%;
    max-height: 95%;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    .product {
        width: 31%;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .product {
        width: 45%;
    }

}

/* Mobile screens styling */
@media (max-width: 480px) {
    .product {
        width: 95%;
    }

}
</style>