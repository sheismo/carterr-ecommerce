<template>
  <div>
    <all-products></all-products>
    <the-cart></the-cart>
  </div>
  
</template>

<script>
import AllProducts from '@/components/products/AllProducts.vue'
import TheCart from '@/components/user/TheCart.vue'

export default {
  name: 'UserCart',
  components: {
    AllProducts,
    TheCart
  }
}
</script>

<style scoped>
div {
  height: 100vh;
  overflow-y: hidden;
}
</style>
