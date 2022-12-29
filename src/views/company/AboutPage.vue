<template>
  <div>
    <about-us></about-us>
    <the-features></the-features>
    <partner-brands></partner-brands>
  </div>
</template>

<script>
import AboutUs from '@/components/layout/AboutUs.vue';
import TheFeatures from '@/components/layout/TheFeatures.vue'
import PartnerBrands from '@/components/layout/PartnerBrands.vue';

export default {
  name: 'AboutPage',
  components: {
    AboutUs,
    TheFeatures,
    PartnerBrands
  }
}
</script>
