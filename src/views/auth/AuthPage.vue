<template>
  <section>
    <div>
      <carterr-page></carterr-page>
    </div>

    <div>
      <!-- sign up & sign it tabs switch -->
      <div class="tabs">
        <base-button @click="setSelectedTab('sign-up')" :class="signUpTabActive">Sign Up</base-button>
        <base-button @click="setSelectedTab('sign-in')" :class="signInTabActive">Sign In</base-button>
      </div>

      <!-- selected Tab component -->
      <div class="component">
        <keep-alive>
          <component :is="selectedTab"></component>
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script>
import CarterrPage from '@/components/ui/CarterrPage.vue'
import SignUp from '@/components/auth/SignUp.vue'
import SignIn from '@/components/auth/SignIn.vue'

export default {
  name: 'AuthPage',
  components: {
    CarterrPage,
    SignUp,
    SignIn
  },
  data() {
    return {
      selectedTab: 'sign-up',
    }
  },
  computed: {
    signUpTabActive() {
      return this.selectedTab === 'sign-up' ? 'active' : ''
    },
    signInTabActive() {
      return this.selectedTab === 'sign-in' ? 'active' : ''
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
  },
  mounted() {
    this.selectedTab = 'sign-up'
  }

}
</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

section > div:first-of-type {
  width: 40%;
  height: 100%;
}

section > div:last-of-type {
  width: 60%;
  padding: 1rem;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs {
  width: 40%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  max-width: 40%;
  margin: auto;
  padding: 5px 3px;
  background: none;
  color: #222;
}

button.active{
  border-bottom: 2px solid #EF2E3B;
}

.component {
  width: 100%;
  margin: 0 auto;
}


/* iPads and laptop screens */
@media (min-width: 768px) and (max-width: 1024px) {
  section {
    height: 100vh;
  }

  section > div:first-of-type {
    width: 35%;
    height: 100vh;
  }

  section > div:last-of-type {
    width: 65%;
    height: 100vh;
  }
}

@media (min-width: 481px) and (max-width: 767px) {
  section {
    height: 100%;
    flex-direction: column;
    background-color: rgb(239, 46, 59, .6);
  }

  section > div:first-of-type{
    width: 100%;
    height: 20vh;
  }

  section > div:last-of-type {
    width: 100%;
    height: 100%;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    background-color: #FFF;
  }

  .tabs {
    width: 75%;
  }
}

/* Mobile screens styling */
@media (max-width: 480px) {
  section {
    height: 100%;
    flex-direction: column;
    background-color: rgb(239, 46, 59, .6);
  }

  section > div:first-of-type{
    width: 100%;
    height:20vh;
  }

  section > div:last-of-type {
    width: 100%;
    height: 80vh;
    justify-content: flex-start;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #FFF;
  }

  .tabs {
    width: 75%;
  }
}

/**extra small screens */
@media (max-width: 300px) {
  .tabs {
    margin: 20px auto;
  }
}
</style>