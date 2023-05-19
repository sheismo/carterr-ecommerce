<template>
    <section class="backdrop">
        <base-modal :show="showModal" :message="message" :loading="loading" mode="danger">
            <div>
                <font-awesome-icon icon="fa-solid fa-xmark" class="error-icon" />
                <p>Payment window closed before the transaction was completed</p>
                <span>Unable to make payment, please try again after a few minutes.</span>
            </div>
        </base-modal>
    </section>
</template>

<script>
export default {
    name: 'PaymentError',
    data() {
        return {
            showModal: true,
            message: 'Payment Error!',
            loading: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.$router.replace('/cart')
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

.error-icon {
    padding: 20px;
    color: #EF2E3B;
    border: 1px solid #EF2E3B;
    border-radius: 50%;
}

div {
    text-align: center;
}
</style>