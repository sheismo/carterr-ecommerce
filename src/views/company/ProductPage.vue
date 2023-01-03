<template>
  <div>
    <product-info :productId="id"></product-info>
  </div>
</template>

<script>
import ProductInfo from '@/components/products/ProductInfo.vue';

export default {
    name: 'ProductPage',
    props: ['id'],
    components: {
        ProductInfo
    }
}
</script>

<style>

</style>