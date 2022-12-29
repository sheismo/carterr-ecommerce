<template>
  <section>
    <div class="banner">
        <div>
            <p>{{ percentageOff }}</p>
            <h3>CARTERR HAPPY HOURS</h3>
            <time datetime="2023-25-02">{{ dateValid }}</time>
        </div>
        <div>
            <img src="@/assets/products-images/gaming-consoles/sonyps4slimplaystation.png" :alt="productName">
        </div>
        <div>
            <h3>{{ discountName }}</h3>
            <p><em>{{ productName }}</em></p>
            <base-button link to="/shop" mode="green">Shop</base-button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'DiscountSale',
    // props: ['product'],
    data() {
        return {
            percentageOff: '25% OFF',
            discountName: 'Valentines Day Sale',
            productName: 'Sony PS4 Slim PlayStation',
            dateValid: '12 Feb to 05 March'
        }
    }
}
</script>

<style scoped>
section {
    width: 75%;
    margin: 5% auto;      
}

.banner {
    width: 100%;
    padding: 5% 10%;
    background-color: #DCDCDC;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #2DCC70;
}

.banner div {
    width: 32%;
}

.banner div img {
    width: 90%;
    height: auto;
}

.banner div:first-of-type p, .banner div:first-of-type time {
    margin: 0 auto;
    color: #FFF;
    font-size: 1rem;
    font-weight: 300;
}

.banner div h3 {
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Work Sans', sans-serif;
    text-transform: capitalize;
}

.banner div:last-of-type p {
    color: #222;
    font-size: 1.5rem;
    font-weight: 300;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    section {
        width: 85%;
    }

}

/* Tabs and iPads screens */
@media (min-width: 481px) and (max-width: 768px) {
    section {
        width: 90%;
    }

    .banner {
        flex-direction: column;
    }

    .banner div {
        width: 95%;
        margin: 20px auto;
        text-align: center;
    }

}

/* Mobile screens styling */
@media (max-width: 480px) {
    section {
        width: 100%;
        padding: 5%;
    }

    .banner {
        flex-direction: column;
    }

    .banner div {
        width: 90%;
        margin: 20px auto;
        text-align: center;
    }
}
</style>