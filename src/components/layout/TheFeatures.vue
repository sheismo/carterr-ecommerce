<template>
  <section>
    <div class="features">
        <div>
            <font-awesome-icon icon="fa-solid fa-truck" size="sm" class="icon" />
            <div class="feature">
                <p>Free shipping</p>
                <p>Free delivery on all orders</p>
            </div>
        </div>
        <div>
            <font-awesome-icon icon="fa-solid fa-shield-halved" size="sm" class="icon" />
            <div class="feature">
                <p>Money Guarantee</p>
                <p>28 days money back</p>
            </div>
        </div>
        <div>
            <font-awesome-icon icon="fa-solid fa-headset" size="sm" class="icon" />
            <div class="feature">
                <p>Customer Support</p>
                <p>24/7 Online support</p>
            </div>
        </div>
        <div>
            <div class="feature">
                <p>Secure Payment</p>
                <p>Secure Payment methods</p>
            </div>
            <font-awesome-icon icon="fa-solid fa-wallet" size="sm" class="icon" />
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
    width: 75%;
    margin: 5% auto;
}

.features {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.features > div {
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.feature {
    width: 80%;
}

.feature p:first-of-type {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
    color: #222;
}

.feature p:last-of-type {
    margin: 0;
    font-size: 0.7rem;
    color: #BCBCBC;
}

.icon {
    width: 15%;
    color: #EF2E3B;
    font-size: 2rem;
    font-weight: 300;
    /* #F42C37 */
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    section {
        width: 85%;
    }

    .features > div {
        width: 24%;
    }

}

/* Tabs and iPads screens */
@media (min-width: 481px) and (max-width: 768px) {
    section {
        width: 90%;
    }

    .features {
        flex-wrap: wrap;
    }

    .features > div {
        width: 49%;
        margin: 30px auto;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    section {
        width: 100%;
        padding: 5%;
    }

    .features {
        flex-direction: column;
        align-items: center;
    }

    .features > div {
        width: 100%;
        margin: 30px auto;
    }

    .feature p:first-of-type, .feature p:last-of-type {
        font-size: 1rem;
    }
}
</style>