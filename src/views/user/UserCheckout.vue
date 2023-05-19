<template>
    <div>
        <all-products></all-products>
        <the-checkout></the-checkout>
    </div>
</template>

<script>
import AllProducts from '@/components/products/AllProducts.vue'
import TheCheckout from '@/components/user/TheCheckout.vue'

export default {
    name: 'UserCheckout',
    components: {
        AllProducts,
        TheCheckout
    }
}
</script>

<style scoped>
div {
    height: 100vh;
    overflow-y: hidden;
}
</style>
