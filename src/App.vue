<template>
  <the-header v-if="!authPageActive"></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <the-footer v-if="!authPageActive"></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    authPageActive() {
      return this.$route.path === '/auth'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Work+Sans&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-active {
  transition: all 0.5s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

#app {
  /* font-family: 'Poppins', sans-serif;
  font-family: 'Inter', sans-serif; */
}
</style>
