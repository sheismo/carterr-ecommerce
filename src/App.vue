<template>
  <the-header v-if="!noHeaderPage"></the-header>

  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <the-footer v-if="!noFooterPage"></the-footer>

  <button @click="scrollUp()" class="scroll" ref="scrollButton">
    <font-awesome-icon icon="fa-solid fa-arrow-up" size="sm" class="icon" :class="categoryOfCartItems" /> 
  </button>
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
    noHeaderPage() {
      return this.$route.path === '/auth' || this.$route.path === '/cart' || this.$route.path === '/checkout'
    },
    noFooterPage() {
      return this.$route.path === '/auth' || this.$route.path === '/cart' || this.$route.path === '/checkout'
    }
  },
  methods: {
    scrollUp() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    handleScroll() {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        this.$refs.scrollButton.style.display = "block";
      } else {
        this.$refs.scrollButton.style.display = "none";
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
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
  transition: all 0.4s ease-out;
}

.route-leave-active {
  transition: all 0.4s ease-in;
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

button.scroll {
  /* display: none; */
  width: 50px;
  height: 50px;
  padding: 15px; 
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: #EF2E3B; 
  color: #FFF; 
  cursor: pointer; 
}

button.scroll .icon {
  margin: 0;
  padding: 0;
  font-size: 1.3rem; 
}

button.scroll:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  button.scroll {
    width: 70px;
    height: 70px; 
    padding: 10px;
  }

  button.scroll .icon {
    font-size: 1.5rem; 
  }
}
</style>
