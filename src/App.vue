<template>
  <the-header v-if="!noHeaderPage" :stickyHeader="stickyHeader"></the-header>

  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <the-footer v-if="!noFooterPage"></the-footer>

  <button @click="scrollUp()" class="scroll" v-if="showScrollButton">
    <font-awesome-icon icon="fa-solid fa-arrow-up" size="sm" class="icon" :class="categoryOfCartItems" /> 
  </button>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  data() {
    return {
      stickyHeader: '',
      showScrollButton: false
    }
  },
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
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        this.showScrollButton = true
      } else {
        this.showScrollButton = false
      }

      if (this.$route.path !== '/contact-us')
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          this.stickyHeader = 'sticky'
        } else {
          this.stickyHeader = ''
        }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    setTimeout(() => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }, 300);
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
  scroll-behavior: smooth;
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
  width: 45px;
  height: 45px;
  padding: 10px; 
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 48;
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

@media (max-width: 767px) {
  button.scroll {
    width: 50px;
    height: 50px; 
  }

  button.scroll .icon {
    font-size: 1.5rem; 
  }
}
</style>
