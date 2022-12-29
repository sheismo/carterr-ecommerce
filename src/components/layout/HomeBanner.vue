<template>
  <section>
    <div class="banner">
        <div class="text">
            <p>Beats Solo 3</p>
            <p>Wireless On-Ear</p>
            <p>HeadPhones</p>
            <base-button link to="/shop" mode="red">Shop By Category</base-button>
        </div>
        <div class="image">
            <img src="@/assets/products-images/headphones/BeatsSolo3.png" alt="Beats Solo 3 Wireless On-Ear HeadPhones">
            <div class="description">
                Beats Solo³ Wireless headphone delivers premium playback with fine-tuned acoustics
                that maximize clarity, breadth, and balance.
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'HomeBanner'
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
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    width: 50%;
}

.text p:first-of-type {
    margin: 0;
    color: #030303;
    font-size: 1.5rem;
    font-weight: 300;
}

.text p:nth-of-type(2) {
    margin: 0;
    color: #030303;
    font-size: 1.8rem;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
}

.text p:last-of-type {
    margin: 20px auto;
    color: #F8F8F8;
    font-size: 4rem;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
}

.image {
    width: 45%;
    display: flex;
    flex-direction: column;
}


img {
    max-width: 90%;
    height: auto;
    justify-self: center;
    align-self: flex-start;
    z-index: 5;
}

.description {
    max-width: 70%;
    justify-self: end;
    align-self: flex-end;
    font-size: 0.7rem;
    text-align: right;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    section {
        width: 85%;
    }

    img {
        max-width: 90%;
    }

    .description {
        max-width: 90%;
        font-size: 0.7rem;
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

    .text, .image {
        width: 100%;
        margin-bottom: 2rem;
    }

    .text p:first-of-type {
        font-size: 1.5rem;
    }

    .text p:nth-of-type(2) {
        font-size: 2rem;
    }

    .text p:last-of-type {
        margin-top: 20px;
        font-size: 3rem;
    }

    img {
        max-width: 90%;
        align-self: center;
    }

    .description {
        max-width: 60%;
        font-size: 0.75rem;
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

    .text, .image {
        width: 100%;
        margin-bottom: 2rem;
    }

    .text p:first-of-type {
        font-size: 1.2rem;
    }

    .text p:nth-of-type(2) {
        font-size: 1.5rem;
    }

    .text p:last-of-type {
        margin-top: 20px;
        font-size: 2rem;
    }

    img {
        max-width: 90%;
        align-self: center;
    }

    .description {
        max-width: 60%;
        font-size: 0.75rem;
    }
}

/* Smaller mobile screens styling */
@media (max-width: 300px) {
    .description {
        max-width: 95%;
        font-size: 0.75rem;
    }
}
</style>