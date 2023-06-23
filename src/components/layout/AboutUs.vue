<template>
    <section>
        <div class="banner">
            <p>
                Our e-commerce company offers a wide range of high-quality products at affordable prices. 
                We have gadgets ranging from iPhones to gaming consoles and laptops, 
                we have everything you need to make your life easier and more enjoyable. 
                With fast shipping and excellent customer service, shopping with us is a breeze. 
                Join our community of satisfied customers today! 
            </p>
            <p v-if="!mobileScreen">
                Discover our online store, where we offer a variety of electronic devices/products that cater to all your needs. 
                Our focus is to provide you with the best shopping experience by offering quality products, 
                best prices, and exceptional customer service. Shop now and experience the difference with us.
            </p>
            <p>
                Our mission is to provide our customers with a convenient, hassle-free online shopping experience. 
                We strive to offer a diverse range of high-quality products at the lowest prices possible, coupled with excellent customer service. 
                Our goal is to become the go-to destination for all your shopping needs, all while exceeding your expectations.
            </p>
            <p><i>All Rights Reserved. Carterr &copy; {{ currentYear }}</i></p>
            <base-button link to="/shop" mode="red">Start shopping</base-button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            mobileScreen: null
        }
    },
    methods: {
        isMobileScreen() {
            if (window.matchMedia("(max-width: 480px)").matches) {
                this.mobileScreen = true
            } else {
                this.mobileScreen = false
            }
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    },
    created() {
        this.isMobileScreen()
        window.addEventListener('resize', this.isMobileScreen)
    }

}
</script>

<style scoped>
section {
    width: 75%;
    margin: auto;
}

.banner {
    width: 100%;
    padding: 5% 10%;
    background-color: #DCDCDC;
    border-radius: 1rem;
}

p {
    color: #030303;
    font-size: 1rem;
    font-weight: 300;
}

a {
    margin-top: 15px;
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
        padding: 10%;
        border-radius: 1rem;
        flex-direction: column;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    section {
        width: 100%;
    }

    .banner {
        padding: 10%;
        border-radius: 0;
        flex-direction: column;
    }
}
</style>