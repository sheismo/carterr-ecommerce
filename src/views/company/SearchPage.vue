<template>
  <div>
    <search-products></search-products>
    <bestseller-products></bestseller-products>
  </div>
</template>

<script>
import SearchProducts from '@/components/products/SearchProducts.vue'
import BestsellerProducts from '@/components/products/BestsellerProducts.vue'

export default {
  name: 'SearchPage',
  components: {
    SearchProducts,
    BestsellerProducts
  }
}
</script>

<style scoped>

</style>