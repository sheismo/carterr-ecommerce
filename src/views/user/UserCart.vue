<template>
  <div>
    <all-products></all-products>
    <my-cart></my-cart>
  </div>
</template>

<script>
import AllProducts from '@/components/products/AllProducts.vue';
import MyCart from '@/components/user/MyCart.vue';

export default {
  name: 'UserCart',
  components: {
    AllProducts,
    MyCart
  }
}
</script>

<style scoped>
div {
  height: 100vh;
  overflow-y: hidden;
}
</style>
