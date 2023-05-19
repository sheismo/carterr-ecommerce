<template>
    <section class="backdrop">
        <div class="cart">
            <div class="title">

                <div class="back-button" title="Click to go back" @click="goBack">
                    <font-awesome-icon icon="fa-solid fa-arrow-left"  size="sm" class="icon" />
                </div>
                <div>
                    <p>My Cart  -  <span>{{ noOfCartItems }}</span> items.</p>
                </div>
            </div>

            <div v-if="notEmptyCart" class="items">
                <ul>
                    <li v-for="product in cartItems" :key="product.id">

                        <div class="product-image">
                            <img :src="product.image" :alt="product.name" class="image">
                        </div>

                        <div class="product-info ">
                            <p>{{ product.name }}</p>
                            <p>${{ product.price }}</p>
                            <p>=>  ${{ (product.qty * product.price).toFixed(2) }}</p>
                        </div>

                        <div class="counter-row">
                            <div class="counter">
                                <p class="minus" @click="decrement(product.id)">-</p>
                                <p class="count">{{ product.qty }}</p>
                                <!-- <input class="count" type="number" name="count"  v-model="product.qty"> -->
                                <p class="plus" @click="increment(product.id)">+</p>
                            </div>
                            <button @click="removeItem(product.id)">Remove</button>
                        </div>
                    </li>
                </ul>

                <div  class="total-row">
                    <p>Total:     <span>${{ sumTotal }}</span></p>
                </div>

                <div class="actions">
                    <div>
                        <base-button link to="/shop">
                            <button>Back to shop</button>
                        </base-button>
                    </div>
                    <div>
                        <base-button link to="/checkout">
                            <button>Proceed to Checkout</button>
                        </base-button>
                    </div>
                </div>
            </div>
            
            <div v-else class="no-items">
                <p>Hi, you currently do not have any items in your cart.</p>
                <base-button link to="/shop" mode="red">Start shopping</base-button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheCart',
    data() {
        this.publishableKey = 'pk_test_51N47sxJ5hfFcchJkjxzyyDXYRoHtRunGCtH0rSK2Why9PfwP6arNsfhBmtFPVvqDiPgRYqCjZlwSqjl6N0hxZ3Zt00n9I7NBJg'
        return {
            // loading: false,
        }
    },
    computed: {
        noOfCartItems() {
            return this.$store.getters['products/userCartQty']
        },
        cartItems() {
            return this.$store.getters['products/userCartItems']
        },
        notEmptyCart() {
            return this.cartItems && this.cartItems.length > 0
        },
        sumTotal() {
            return this.$store.getters['products/sumTotal']
        },
    },
    methods: {
        goBack() {
            window.history.back()
            // this.$router.go(-1)
        },
        increment(id) {
            const product = this.cartItems.find(product => product.id === id)
            product.qty += 1
            this.$store.dispatch('products/increaseCartQty', 1)
            this.$store.dispatch('products/calculateSumTotal')
        },
        decrement(id) {
            const product = this.cartItems.find(product => product.id === id)
            if (product.qty === 0) {
                this.$store.dispatch('products/removeItemFromCart', id)
                this.$store.dispatch('products/calculateSumTotal')
            } else {
                product.qty -= 1
                this.$store.dispatch('products/reduceCartQty', 1)
                this.$store.dispatch('products/calculateSumTotal')
            }
        },
        removeItem(id) {
            const product = this.cartItems.find(product => product.id === id)
            this.$store.dispatch('products/removeItemFromCart', id)
            this.$store.dispatch('products/reduceCartQty',product.qty)
            this.$store.dispatch('products/calculateSumTotal')
        }
    },
    mounted() {
        this.$store.dispatch('products/calculateSumTotal')
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

.cart {
    width: 50%;
    height: 100%;
    padding: 1.5rem;
    background: #FFF; 
    z-index: 15;
    overflow-y: auto;
}

/* cart-heading */
.title{
    margin: 0 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.title p {
    margin-left: 50px;
    font-size: 1rem;
    color: #222;
    text-transform: uppercase;
}

.title p span {
    color: #EF2E3B;
}

.title .back-button {
    margin: 10px 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #147CFF;
    color: #FFF;
}

.title .back-button .icon {
    padding: 0;
    margin: 0;
    color: #FFF;
    font-size: 1rem;
}

/* cart-items */
.items {
    width: 100%;
    margin: 0 auto;
}

ul {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

li {
    width: 100%;
    max-height: 200px;
    padding: 20px;
    margin: 10px 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
    background: #F5F1E1;
    border-radius: 5px;
}

.product-image {
    width: 25%;
}

.image {
    max-width: 90%;
    height: auto;
}

.product-info {
    width: 45%;
    text-align: left;
}

.product-info p {
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 600;
}

.product-info p:last-of-type {
    margin-top: 10px;
    color: #2DCC70;
}

/* button */
button {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
}

/* counter */
.counter-row {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.counter {
    width: 100%;
    padding: 10px;
    background: #EEEFF7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

.count,
.plus,
.minus {
    margin: 0;
    font-size: 1rem;
    cursor: pointer;
}

.plus,
.minus {
    color: #EF2E3B;
}

.counter-row button {
    border-radius: 5px;
    border: none;
    color: #FFF;
    background: #EF2E3B;
}

.counter-row button:hover {
    box-shadow: #FCE7D8 0px 7px 25px 10px;
    transform: scale(1.01);
}

.total-row {
    margin: 30px 0;
    text-align: center;
}

.total-row p {
    font-size: 1.5rem;
}

.total-row span {
    color: #EF2E3B;
}

.actions {
    width: 100%;
    margin: 15px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-content: space-evenly;
    align-items: center;
}

.actions div:first-of-type button{
    color: #EF2E3B;
    border: 1px solid #EF2E3B;
}

.actions div:last-of-type button {
    color: #FFF;
    border: 1px solid #EF2E3B;
    background: #EF2E3B;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    .cart {
        width: 75%;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .cart {
        width: 80%;
    }

    li {
        padding: 10px;
        align-items: center;
    }

    .product-info p {
        font-size: 0.8rem;
    }

    .counter {
        padding: 5px;
    }

    .count,
    .plus,
    .minus {
        font-size: 0.8rem;
    }

    button {
        padding: 5px;
        font-size: 0.8rem;
    }

}

/* Mobile screens styling */
@media (max-width: 480px) {
    .cart {
        width: 100%;
        padding: 5%;
    }

    li {
        padding: 10px;
    }

    .product-info p {
        font-size: 0.7rem;
    }

    .counter {
        padding: 5px;
    }

    .count,
    .plus,
    .minus {
        font-size: 0.7rem;
    }

    button {
        padding: 5px;
        font-size: 0.7rem;
    }
}

/* link */
.actions a {
    width: 100%;
    text-decoration: none;
}
</style>