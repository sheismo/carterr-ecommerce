<template>
    <section class="backdrop">
        <div v-if="cartItems && cartItems.length > 0" class="checkout">
            <div class="title">
                <div>
                    <h2>Checkout</h2>
                </div>
            </div>

            <div class="order-details">
                <h3>Order Details</h3>
                <p>Here's your order summary.</p>
                <ul>
                    <li v-for="product in cartItems" :key="product.id">
                        <div class="success">
                            <font-awesome-icon icon="fa-solid fa-check" class="success-icon"/>
                        </div>

                        <div class="product-image">
                            <img :src="product.image" :alt="product.name" class="image">
                        </div>

                        <div class="product-info ">
                            <p>{{ product.name }}</p>
                            <p>Qty: {{ product.qty }}</p>
                        </div>

                        <div class="product-info">
                            <p>${{ product.price }} each</p>
                            <p>=> ${{ (product.qty * product.price).toFixed(2) }}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="delivery-details">
                <h3>Delivery Details</h3>
                <p>Please enter your name, a valid email address and your delivery address.</p>
                <form class="delivery">
                    <div>
                        <div class="input-half">
                            <label for="name"></label>
                            <input type="text" name="name" id="name" autofocus required placeholder="Your name" v-model="user.name">
                        </div>

                        <div class="input-half">
                            <label for="email"></label>
                            <input type="email" name="email" id="email" required placeholder="Your email" v-model="user.emailAddress">
                        </div>
                    </div>

                    <div>
                        <div class="input-full">
                            <label for="address"></label>
                            <input type="text" name="address" id="address" required placeholder="Your home address" v-model="user.deliveryAddress">
                        </div>
                    </div>
                </form>
            </div>

            <div class="shipping-details">
                <h3>Shipping Details</h3>
                <p>Please select your preferred shipping option.</p>
                <form action="#" class="shipping">
                    <div>
                        <label for="free" class="shipping-name">
                            <input type="radio" name="shipping" id="free" value="free" v-model="user.shippingMode">
                            <span class="bubble"></span>
                            <div>
                                <p>Free shipping </p>
                                <p>9 - 12 business days</p>
                            </div>
                        </label>
                        <p class="shipping-price"> $0 </p>
                    </div>

                    <div>
                        <label for="standard" class="shipping-name">
                            <input type="radio" name="shipping" id="standard" value="standard" v-model="user.shippingMode">
                            <span class="bubble"></span>
                            <div>
                                <p>Standard shipping</p>
                                <p>5 - 7 business days</p>
                            </div>
                        </label>
                        <p class="shipping-price"> $25 </p>
                    </div>

                    <div>
                        <label for="fast" class="shipping-name">
                            <input type="radio" name="shipping" id="fast" value="fast" v-model="user.shippingMode">
                            <span class="bubble"></span>
                            <div>
                                <p>Fast shipping </p>
                                <p>1 - 3 business days</p>
                            </div>
                        </label>
                        <p class="shipping-price"> $50 </p>
                    </div>
                </form>
            </div>

            <div>
                <div class="total-row">
                    <p>Sub Total: <span>${{ sumTotal }}</span></p>
                    <p>Total: <span>${{ (amount).toFixed(2) }}</span></p>
                </div>

                <div class="actions">
                    <div>
                        <base-button link to="/cart">
                            <button>Back to cart</button>
                        </base-button>
                    </div>
                    <div>
                        <paystack
                            :buttonClass="buttonClass"
                            buttonText="Proceed to Pay"
                            :publicKey="paystackKey"
                            :email="user.emailAddress"
                            :amount="parseInt((amount * 1) * 100)"
                            :reference="reference"
                            :onSuccess="onSuccessfulPayment"
                            :onCancel="onCancelledPayment"
                        ></paystack>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="checkout">
            <h3>You have an empty cart</h3>
            <p>No items to check out!!</p>
            <base-button link to="/shop" mode="red">Shop items</base-button>
        </div>

    </section>
</template>

<script type="text/javascript">
import paystack from "vue3-paystack"
import { mapGetters } from "vuex"

export default {
    name: 'TheCheckout',
    data() {
        return {
            user: {
                name: '',
                emailAddress: '',
                deliveryAddress: '',
                shippingMode: ''
            },
        }
    },
    components: {
        paystack
    },
    computed: {
        ...mapGetters({
            paystackKey: 'paystackKey',
            cartItems: 'products/userCartItems',
            sumTotal: 'products/sumTotal'
        }),
        shippingFee() {
            if (this.user.shippingMode === "free") return 0
            if (this.user.shippingMode === "standard") return 25
            if (this.user.shippingMode === "fast") return 50
            return 0
        },
        amount() {
            return parseInt(this.sumTotal) + parseInt(this.shippingFee)
        },
        validDeliveryDetails() {
            const regex = /\S+@\S+\.\S+/ 
            return this.user.emailAddress.length > 0 && regex.test(this.user.emailAddress) && this.user.name !== '' && this.user.deliveryAddress !== ''
        },
        validShippingDetails() {
            return this.user.shippingMode !== ''
        },
        reference() {
            let text = ""
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            for (let i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        },
        buttonClass() {
            const allValid = !this.validDeliveryDetails || !this.validShippingDetails ? 'disabled ' : ''
            const classes = allValid + ' my-button'
            return classes
        }
    },
    methods: {
        onSuccessfulPayment () {
            this.$router.replace('/success') 
            this.$store.dispatch('products/emptyUserCart')
            this.resetForm()
        },
        onCancelledPayment () {
            this.$router.replace('/error')
            this.resetForm()
        },
        resetForm() {
            this.user = {
                name: '',
                emailAddress: '',
                deliveryAddress: '',
                shippingMode: ''
            }
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
    z-index: 3;
}

.checkout {
    width: 50%;
    height: 100%;
    padding: 1.5rem;
    background: #F5F1E1;
    z-index: 4;
    overflow-y: auto;
}

.title {
    width: 100%;
    margin: 0 auto 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.title h2 {
    font-weight: 600;
    font-size: 1rem;
    color: #EF2E3B;
}

.order-details, .delivery-details, .shipping-details{
    width: 90%;
    margin: 0 auto 20px;
    padding: 20px;
    background: #FFF;
    border-radius: 15px;
}

.order-details h3, .delivery-details h3, .shipping-details h3{
    margin: 0 0 5px;
    font-size: 0.9rem;
}

.order-details > p,  .delivery-details > p, .shipping-details > p {
    font-size: 0.8rem;
    margin: 0 0 20px;
 }

/* order details */
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
    max-height: 70px;
    padding: 10px;
    margin: 5px 0 25px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
}

.success {
    width: 5%;
}

.success-icon {
    padding: 5px;
    color: #2DCC70;
    font-weight: 600;
}

.product-image {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.image {
    max-width: 90%;
    height: 80px;
    max-height: 80px;
}

.product-info:first-of-type, li > div:nth-of-type(3){
    width: 45%;
}

.product-info:last-of-type, li > div:nth-of-type(4){
    width: 25%;
}

.product-info p {
    margin: 0 auto;
    font-size: 0.75rem;
    font-weight: 300;
}

.product-info p:last-of-type {
    margin-top: 5px;
    color: #2DCC70;
}

/* delivery details */
form {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

form > div {
    width: 100%;
}

form.delivery > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input-half {
    width: 49%;
}

.input-full {
    width: 100%;
}

form.delivery input {
    width: 100%;
    margin: 5px 0;
    padding: 12px 10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: #F5F1F1;
    color: #222;
    font-family: inherit;
}

form.delivery input:focus, form.delivery input:active {
    border: 1px solid #EF2E3B;
}

/* shipping details */
form.shipping {
    border: 1px solid #CCC;
    border-radius: 10px;
}

form.shipping > div {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #CCC;
}

form.shipping > div:last-of-type {
    border: none;
}

label.shipping-name {
   display: flex;
   justify-content:space-between;
   align-items: center; 
}

label.shipping-name div {
    margin-left: 10px;
}

label div p:first-of-type{
    margin: 0 auto;
    font-size: 0.8rem;
    font-weight: 500;
    color: #333;
    text-transform: uppercase;
}
label div p:last-of-type {
    margin: 0 auto;
    font-size: 0.7rem;
    font-weight: 200;
    color: #333;
}

.shipping-price {
    color: #333;
    font-size: 0.8rem;
    font-weight: 300;
}

/* styling the radio button */
input[type="radio"] {
  display: none;
}

.bubble {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid red;
  box-shadow: red;
}

.bubble::after {
  content: "";
  display: block;
  opacity: 0;
  width: 0px;
  height: 0px;
  background-color: red;
  box-shadow: red;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

input:checked~.bubble::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}

/* button */
button, .my-button {
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
    text-align: center;
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

.actions div:first-of-type button {
    color: #EF2E3B;
    border: 1px solid #EF2E3B;
}

.my-button {
    display: inline-block;
    color: #FFF;
    border: 1px solid #EF2E3B;
    background: #EF2E3B;
}

.my-button.disabled {
    color: #666;
    border: 1px solid #999;
    background: #CCC;
}

/* link */
.actions a {
    width: 100%;
    text-decoration: none;
}

/* iPads and laptop screens */
@media (min-width: 768px) and (max-width: 1024px) {
    .checkout {
        width: 75%;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    .checkout {
        width: 80%;
    }

    .order-details, .delivery-details, .shipping-details{
        width: 100%;
        padding: 15px;
    }

    li {
        align-items: center;
        margin: 5px 0 15px;
    }

    .product-image {
        display: none;
    }

    .product-info:first-of-type, li > div:nth-of-type(3){
        width: 55%;
    }

    .product-info:last-of-type, li > div:nth-of-type(4){
        width: 30%;
    }

    button, .my-button {
        font-size: 0.9rem;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    .checkout {
        width: 100%;
        padding: 5%;
    }

    .order-details, .delivery-details, .shipping-details {
        width: 100%;
        padding: 10px;
    }

    li {
        margin: 5px 0 15px;
    }

    .product-image {
        display: none;
    }

    .product-info:first-of-type, li > div:nth-of-type(3){
        width: 60%;
    }

    .product-info:last-of-type, li > div:nth-of-type(4){
        width: 25%;
    }

    .product-info p {
        font-size: 0.7rem;
    }

    form.delivery > div:first-of-type {
        flex-direction: column;
    }

    .input-half {
        width: 100%;
    }

    button, .my-button {
        font-size: 0.9rem;
    }

    .actions {
        display: block;
    }
}

/* extra small screens */
@media (max-width: 300px) {
    .success {
        display: none;
    }

    li {
        width: 100%;
        padding: 5px;
    }
    
    .product-info:first-of-type {
        width: 60%;
    }

     .product-info:last-of-type {
        width: 35%;
     }

    .product-info p {
        margin-top: 0;
    }
}
</style>