<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition>
      <dialog open v-if="show">
        <header :class="mode">
            <h2>{{ message }}</h2>
        </header>
        <section v-if="loading">
          <base-spinner></base-spinner>
        </section>
        <section>
          <slot></slot>
        </section>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: true
    },
    mode: {
      type: String,
      required: false,
    }
  },
  emits: ['close'],
  methods: {
    tryClose() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  width: 100%;
  padding: 1rem;
  color: white;
}

header.primary {
   background-color: #147BFE;
}

header.success {
   background-color: #2DCC70;
}

header.danger {
   background-color: #EF2E3B;
}

header h2 {
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
}

section {
  padding: 1rem;
}

.dialog-enter-from,
.dialog-leave-to{
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active{
  transition: all 0.5s  ease-out;
}

.dialog-leave-active {
  transition: all 0.5s ease-in;
}

.dialog-enter-to,
.dialog-leave-from{
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }

  /* header h2 {
  margin: 0;
  font-weight: 500;
} */
}
</style>