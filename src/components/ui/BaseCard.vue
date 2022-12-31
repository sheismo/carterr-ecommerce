<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  /* width: clamp(300px, 100%, 600px); */
  width: 100%;
  height: 200px;
  padding: 0.5rem;
  background: #E6E6E6;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>