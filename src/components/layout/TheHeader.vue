<template>
  <header :class="stickyHeader">
    <!-- Brand Name or Logo -->
    <div class="hello">
      <base-button link  to="/">
        <h1 title="Click me to go to Home Page">{{ name }}</h1>
      </base-button>
    </div>

    <!-- Navigation Menu and Links -->
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact-us">Contact Us</router-link></li>
      </ul>
    </nav>

    <!-- Search, Menu & Cart Icons Login Button -->
    <div class="icons">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="sm" beat class="icon" @click="goToSearch" title="click to search"/>
      <div>
        <router-link to="/cart">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" size="sm" class="icon" :class="categoryOfCartItems" /> 
          <base-badge :title="noOfCartItems" :type="categoryOfCartItems"></base-badge>
        </router-link>  
      </div>
      <base-button class="login" link to="/auth" mode="login">login</base-button>
      <font-awesome-icon icon="fa-solid fa-bars" size="sm" class="icon mobileMenuIcon" @click="toggleMobileNavBar"
        title="click me to hide/show navbar" />
    </div>
  </header>

  <!-- Mobile Navigation Menu and Menu -->
  <div v-if="mobileNavBarActive" class="mobile-menu" @click="toggleMobileNavBar">
    <nav>
      <ul>
        <!-- Icon & Text for link to Home Page  -->
        <li>
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-house" size="sm" class="mIcon" />
            <span>Home</span>
          </router-link>
        </li>

        <!-- Icon & Text for link to Shop Page  -->
        <li>
          <router-link to="/shop">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" size="sm" class="mIcon" />
            <span>Shop</span>
          </router-link>
        </li>

        <li>
          <router-link to="/about">
            <font-awesome-icon icon="fa-solid fa-message" size="sm" class="mIcon" />
            <span>About</span>
          </router-link>
        </li>

        <li>
          <router-link to="/contact-us">
            <font-awesome-icon icon="fa-solid fa-address-card" size="sm" class="mIcon" />
            <span>Contact Us</span>
          </router-link>
        </li>
        
        <li>
          <base-button link to="/auth" mode="login">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket" size="sm" class="mIcon" />
            <span>login</span>
          </base-button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    stickyHeader: {
      type: String,
      required: true,
      default: ''
    },
  },
  data() {
    return {
      name: 'Carterr',
      mobileNavBarActive: false,
    }
  },
  // computed: {
  //   mobile() {
  //     return window.matchMedia("(max-width: 480px)").matches
  //   }
  // },
  methods: {
    goToSearch() {
      this.$router.push('/search')
    },
    toggleMobileNavBar() {
      this.mobileNavBarActive = !this.mobileNavBarActive
    }
  },
  computed : {
    noOfCartItems() {
      const noOfItems = this.$store.getters['products/userCartQty']
      return  noOfItems > 99 ? '99+' : noOfItems
    },
    categoryOfCartItems() {
      if (this.noOfCartItems >= 0 && this.noOfCartItems <= 5) {
        return 'lessThanFive'
      } else if (this.noOfCartItems > 5 && this.noOfCartItems <= 10) {
        return 'upToTen'
      } else if (this.noOfCartItems > 10 && this.noOfCartItems <= 99)  {
        return 'overTen'
      } else {
        return 'overTen overNinetyNine'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Desktop screens styling */
header{
  width: 75%;
  max-height: 11vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
}

header h1 {
  color: #EF2E3B;
  text-transform: uppercase;
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 5px;
}

header nav{
  width: 45%;
}

header nav ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Styling for the Nav items */
nav ul li{
  list-style: none;
}

a {
  color: #C5C5C5;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
}

a:hover {
  color: #030303;
}

nav a.router-link-exact-active {
  color: #EF2E3B;
}

/* Styling for Navbar icons */
.icons {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons > div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  color: #C5C5C5;
  font-size: 1.1rem;
}

.icon.mobileMenuIcon {
  display: none;
}

.lessThanFive:hover,
.lessThanFive:active {
  color: #147BFE;
}

.upToTen:hover,
.upToTen:active {
  color: #2DCC70;
}

.overTen:hover,
.overTen:active {
    color: #F42C37; 
}

/* Styling the mobile navigation menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.mobile-menu nav{
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  z-index: 20;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu nav ul {
  width: 90%;
  height: 100%;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  
}

.mobile-menu nav ul li a {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
}

.mobile-menu .mIcon {
  font-size: 1.2rem;
}

.mobile-menu span {
  text-align: center;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
  header {
    width: 85%;
  }
}

/* Tabs and iPads screens */
@media (min-width: 481px) and (max-width: 768px) {
  header {
    width: 90%;
  }

  header nav {
    display: none;
  }

  header h1 {
    letter-spacing: 3px;
  }

  .icons {
    width: 30%;
  }

  .icons .login {
    display: none;
  }

  .icon.mobileMenuIcon {
    display: inline-flex;
    color: #EF2E3B;
  }
}

/* Mobile screens styling */
@media (max-width: 480px) {
  header {
    width: 100%;
    padding: 1% 5%;
  }

  header h1{
    letter-spacing: 1px;
  }

  header nav {
    display: none;
  }

  .icons {
    width: 35%;
  }

  .icons .login {
    display: none;
  }

  .icon.mobileMenuIcon {
    display: inline-flex;
    color: #EF2E3B;
  }
}

/* style rules for sticky header */
header.sticky {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid #DCDCDC;
}
</style>
