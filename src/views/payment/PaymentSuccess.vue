<template>
    <section class="backdrop">
        <base-modal :show="showModal" :message="message" :loading="loading" mode="success">
            <div>
                <font-awesome-icon icon="fa-solid fa-check" class="success-icon"/>
                <p>Thank you for your purchase</p>
                <span>You'll now be redirected to the home page.</span>
            </div>
        </base-modal>
    </section>
</template>

<script>
export default {
    name: 'PaymentSuccess',
    data() {
        return {
            showModal: true,
            message: 'Payment Successful!',
            loading: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.$router.replace('/')
        }, 5000);
    }
}
</script>

<style scoped>
/* Background */
.backdrop {
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.success-icon {
    padding: 10px;
    color: #2DCC70;
    border: 1px solid #2DCC70;
    border-radius: 50%;
}

div {
    text-align: center;
}
</style>