<template>
  <div class="bg">
    <div class="overlay">
      <h2>CARTERR</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarterrPage'

}
</script>

<style scoped>
div.bg {
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: url('../../assets/logo-images/carterr-image-large.jpg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  /* display: flex;
  justify-content: center;
  align-items: center;
  background: #EF2E3B; */
}

div.overlay {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(239, 46, 59, .7);
}

h2 {
  color: #FFF;
}


@media (max-width: 767px) {
  div.bg {
    background-image: url('../../assets/logo-images/carterr-image-small.jpg');
  }
}
</style>