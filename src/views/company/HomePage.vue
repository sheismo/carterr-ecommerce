<template>
    <div>
      <home-banner></home-banner>
      <displayed-products></displayed-products>
      <the-features></the-features>
      <discount-sale></discount-sale>
      <!-- <bestseller-products></bestseller-products> -->
      <partner-brands></partner-brands>
    </div>
</template>

<script>
import HomeBanner from '@/components/layout/HomeBanner.vue'
import DisplayedProducts from '@/components/products/DisplayedProducts.vue'
import TheFeatures from '@/components/layout/TheFeatures.vue'
import PartnerBrands from '@/components/layout/PartnerBrands.vue'
import DiscountSale from '@/components/products/DiscountSale.vue'
// @ is an alias to /src

export default {
  name: 'HomePage',
  components: {
    HomeBanner,
    DisplayedProducts,
    TheFeatures,
    PartnerBrands,
    DiscountSale
  }
}
</script>

<style scoped>

</style>
