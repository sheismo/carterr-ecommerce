<template>
  <section>
    <base-card>
      <div>
        <h2>Page not found!</h2>
        <p>This page you requested for could  not be found - checkout a list of all available <router-link to="/shop">products</router-link>.</p>
      </div>   
    </base-card>
  </section>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
section {
  width: 75%;
  margin: 2% auto 5%;
  padding: 0;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
  section {
    width: 85%;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  section {
    width: 90%;
  }
}

/* Mobile screens styling */
@media (max-width: 480px) {
  section {
    width: 100%;
    padding: 5%;
  }
}
</style>