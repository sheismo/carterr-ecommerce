<template>
  <div class="card" :class="product.category">
    <div>
        <p>{{ tag }}</p>
        <p>{{ product.category }}</p>
        <base-button link to="/shop" :mode="mode" >Browse</base-button>
    </div>
    <div>
        <img :src="product.image" :alt="product.category">
    </div>
  </div>
</template>

<script>
export default {
    name: 'DisplayedProduct',
    props: [ 'product' ],
    computed: {
        mode() {
            if (this.product.category === 'laptops' || this.product.category === 'headphones') {
                return 'white'
            } else if (this.product.category === 'phones' || this.product.category === 'consoles') {
                return 'red'
            } else {
                return 'red'
            }
        },
        tag() {
            if (this.product.category === 'laptops') {
                return 'trendy'
            } else if (this.product.category === 'phones') {
                return 'mobile'
            } else if (this.product.category === 'consoles') {
                return 'gaming'
            } else {
                return 'wireless'
            }
        }
    }
}
</script>

<style scoped>
/* Base styling for all cards */
.card {
    width: 48%;
    height: 250px;
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card div {
    width: 49%;
}

/* Styling cards for Phones Category */
.card.phones {
    background: #222222;
    background: #313131;
}

.card.phones p:last-of-type {
    margin: 10px auto;
    color: #444444;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
}

/* Styling cards for Laptops Category */
.card.laptops {
    background: #F42C37;
}

.card.laptops p:last-of-type {
    margin: 10px auto;
    color: #F55760;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
}

/* Styling cards for Consoles Category */
.card.consoles {
    background: #EAEAEA;
}

.card.consoles p:last-of-type {
    margin: 10px auto;
    color: #FFF;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
}

/* Styling cards for HeadPhones Category */
.card.headphones {
    background: #147CFF;
}

.card.headphones p:last-of-type {
    margin: 10px auto;
    color: #ECECEC;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
}

p:first-of-type {
    margin: 10px auto;
    color: #FFFFFF;
    font-size: 1rem;
}

img {
    max-width: 90%;
    height: auto;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    .card {
        width: 47%;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .card {
        width: 100%;
        height: 280px;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    .card {
        width: 100%;
    }

    .card.headphones p:last-of-type {
        font-size: 1.5rem;
    }
}

/* Smaller mobile screens styling */
@media (max-width: 300px) {
    .card {
        flex-direction: column;
        padding: 1rem;
    }

    .card div {
        width: 95%;
        margin: 5px 0;
    } 
}
</style>