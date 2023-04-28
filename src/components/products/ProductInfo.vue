<template>
    <section>
        <base-alert mode="success" v-if="showAlert">
            Successfully added {{ noOfItemsAddedToCart }} pcs of {{ product.name }} to cart
        </base-alert>
        <div class="back-button" title="Click to go to previous page" @click="goBack">
            <font-awesome-icon icon="fa-solid fa-arrow-left"  size="sm" class="icon" />
        </div>
        <div class="container">
            <div class="image">
                <img :src="product.image" :alt="product.name" class="product-image">
                <!-- <i class="bi bi-chevron-left" @click="prev"></i>
                <i class="bi bi-chevron-right" @click="next"></i>
                <div class="images">
                    <img v-for="image in images" :src="image.src" class="small-product-image" :id="image.id"
                        :alt="image.alt" :key="image.id">
                </div>  -->
            </div>

            <div class="text">
                <p class="title">CARTERR</p>
                <h1>{{ product.name }}</h1>
                <p class="description">
                    {{ product.description }}
                </p>
                <div class="price-row">
                    <div>
                        <p class="current-price">${{ currentPrice }}</p>
                        <span v-if="product.discount" class="discount">25%</span>
                    </div>
                    <p v-if="product.discount" class="former-price">${{ product.price}}</p>
                </div>
                <div class="counter-row">
                    <div class="counter">
                        <p class="minus" @click="decrement">-</p>
                        <p class="count" contenteditable>{{ count }}</p>
                        <p class="plus" @click="increment">+</p>
                    </div>
                    <div class="button-div">
                        <button @click="addToCart(product)" :disabled="disableButton"><font-awesome-icon icon="fa-solid fa-cart-shopping" size="sm" class="icon" />Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProductPage',
    props: ['productId'],
    data() {
        return {
            count: 0,
            noOfItemsAddedToCart: 0,
            showAlert: false
            // images: [
            //     { id: 0, src: require('@/assets/image0.jpg'), alt: 'Product Image', class: 'small-product-image' },
            //     { id: 1, src: require('@/assets/image1.jpg'), alt: 'Product Image', class: 'small-product-image' },
            //     { id: 2, src: require('@/assets/image2.jpg'), alt: 'Product Image', class: 'small-product-image' },
            //     { id: 3, src: require('@/assets/image3.jpg'), alt: 'Product Image', class: 'small-product-image' }
            // ],
            // mobileImages: [
            //     { id: 0, src: require('@/assets/image0.jpg'), alt: 'Product Image' },
            //     { id: 1, src: require('@/assets/image1.jpg'), alt: 'Product Image' },
            //     { id: 2, src: require('@/assets/image2.jpg'), alt: 'Product Image' },
            //     { id: 3, src: require('@/assets/image3.jpg'), alt: 'Product Image' },
            //     { id: 4, src: require('@/assets/image4.jpg'), alt: 'Product Image' }
            // ]
        }
    },
    computed: {
        product() {
            const product = this.$store.getters['products/allProducts'].find(
                product => product.id === this.productId
            )
            return product
        },
        currentPrice() {
            return this.product.discount ? this.product.price - this.product.price / 4 : this.product.price
        },
        disableButton() {
            if (this.count === 0) {
                return true
            } else {
                return false
            }
        },
        cartItems() {
            return this.$store.getters['products/userCartItems']
        },
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            if (this.count === 0) {
                this.count = 0
            } else {
                this.count--
            }
        },
        addToCart(product) {
            if (this.cartItems.some(p => p.id === product.id)) {
                const prod = this.cartItems.find(p => p.id === product.id)
                prod.qty += this.count
                this.$store.dispatch('products/increaseCartQty', this.count)

            } else {
                this.$store.dispatch({
                    type: 'products/addToCart',
                    value: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        qty: this.count
                    }
                })
            }
            this.$store.dispatch('products/calculateSumTotal')
            this.noOfItemsAddedToCart = this.count
            this.count = 0
            this.showAlert = true
            setTimeout(() => {
                this.showAlert = false
            }, 1500)
        },
        goBack() {
            // window.history.back()
            this.$router.go(-1)
        }
        // next() {
        //     let next
        //     const image = this.$el.querySelector('.product-image')
        //     const path = image.src
        //     const start = path.indexOf('image')
        //     const end = start + 5
        //     // console.log(image, path, start, end)
        //     const current = path.charAt(end)
        //     if (parseInt(current) === 4) {
        //         next = 0
        //     } else {
        //         next = parseInt(current) + 1
        //     }
        //     // console.log(current, next)
        //     image.src = this.mobileImages[next].src
        // },
        // prev() {
        //     let prev
        //     const image = this.$el.querySelector('.product-image')
        //     const path = image.src
        //     const start = path.indexOf('image')
        //     const end = start + 5
        //     const current = path.charAt(end)
        //     if (parseInt(current) === 0) {
        //         prev = 4
        //     } else {
        //         prev = parseInt(current) - 1
        //     }
        //     // console.log(current, prev)
        //     image.src = this.mobileImages[prev].src
        // },
    },
    // mounted() {
    //     this.$el.querySelectorAll('.small-product-image').forEach(el => {
    //         el.addEventListener('click', () => {
    //             this.$el.querySelector('.product-image').src = this.images[el.id].src
    //         })
    //     })
    // }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css');
/* this component uses a mobile first approach to styling */

section {
    width: 95%;
    margin: 40px auto;
    padding: 0;
}

h1 {
    color: #1B1E25;
    font-weight: 900;
    font-size: 2.2rem;
    font-family: 'Work Sans', sans-serif;
}

.back-button {
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

.back-button .icon {
    padding: 0;
    margin: 0;
    color: #FFF;
    font-size: 1rem;
}

.container,
.counter-row {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image {
    width: 100%;
    position: relative;
}

.product-image {
    width: 100%;
    height: auto;
}

.images {
    display: none;
}

.bi-chevron-left,
.bi-chevron-right {
    padding: 9px 13px;
    color: #000;
    background: #FFF;
    border-radius: 50%;
    -webkit-text-stroke: 2px;
    font-size: 1.1rem;
    position: absolute;
    top: 45%;
    z-index: 5;
}

.bi-chevron-left {
    left: 15px;
}

.bi-chevron-right {
    right: 15px;
}

.text {
    width: 100%;
    padding: 10px 20px;
}

.title {
    color: #EF2E3B;
    font-weight: 600;
}

.text h1 {
    font-weight: 900;
    color: #000;
}

.description {
    margin: 5px 0;
    color: #828486;
    font-weight: 500;
}

.price-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.price-row div {
    display: flex;
    justify-content: safe;
    align-items: center;
}

.current-price {
    font-size: 2rem;
    font-weight: 900;
    color: #000;
}

.discount {
    margin-left: 20px;
    padding: 3px 9px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #EF2E3B;
    background: #FCEADC;
    border-radius: 6px;
}

.former-price {
    color: #8D8E90;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: line-through;
}

.counter {
    width: 100%;
    margin: 20px auto;
    padding: 20px 25px;
    background: #EEEFF7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
}

.counter p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;
}

.plus,
.minus {
    color: #EF2E3B;
}

.button-div {
    width: 100%;
    margin: 20px auto;
}

.icon {
    margin-right: 15px;
    font-size: 1.1rem;
    color: #FFF;
    -webkit-text-stroke: .3px;
}

button {
    width: 100%;
    padding: 20px 25px;
    color: #FFF;
    background: #EF2E3B;
    outline: none;
    border: none;
    border-radius: 15px;
    font-size: 1.1rem;
    font-family: inherit;
}

button:hover {
    box-shadow: #FCE7D8 0px 7px 25px 10px;
    transform: scale(1.01);
}

button:disabled,
button[disabled]{
  border: 1px solid #999;
  background-color: #aaa;
  color: #ccc;
  cursor: not-allowed;
  /* cursor: no-drop; */
  pointer-events: none;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    section {
        width: 85%;
    }

    .container {
        width: 100%;
        margin: auto;
    }

    .container,
    .counter-row {
        flex-direction: row;
    }

    .image {
        width: 45%;
        padding: 20px 40px;
    }

    .product-image {
        height: auto;
        border-radius: 15px;
    }

    .bi-chevron-left,
    .bi-chevron-right {
        display: none;
    }
    
    .images {
        width: 100%;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .small-product-image {
        width: 20%;
        height: 90px;
        border-radius: 10px;
    }

    .small-product-image:hover {
        border: 2px solid #EF2E3B;
    }
    
    .text {
        width: 55%;
        padding: 20px 30px;
    }

    .text h1 {
        font-size: 2.1rem;
    }

    .price-row {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    
    .price-row div {
        margin-top: -20px;
    }
    
    .former-price {
        margin-top: -25px;
    }
    
    .counter {
        width: 42%;
        padding: 10px 15px;
    }
    
    .button-div {
            width: 55%;
        }
    
    button {
        padding: 15px 20px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    section {
        width: 90%;
    }

    .display {
        flex-direction: column;
    }
}

/* Extra small screens */
@media(max-width: 300px) {
    .discount {
        font-size: 0.8rem;
        margin-right: 30px;
    }

    .current-price,
    .former-price {
        font-size: 1rem;
    }

    .counter,
    button {
        padding: 10px 15px;
    }
}

@media (min-width: 1025px) {
    section {
        width: 75%;
        margin: 2% auto;
        padding: 0;
    }

    .container {
        width: 95%;
        margin: auto;
    }

    .container,
    .counter-row {
        flex-direction: row;
    }

    .image {
        width: 50%;
        padding: 20px 60px;
    }

    .product-image {
        height: auto;
        border-radius: 15px;
    }

    .bi-chevron-left,
    .bi-chevron-right {
        display: none;
    }

    .images {
        width: 100%;
        margin: 30px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .small-product-image {
        width: 20%;
        height: 90px;
        border-radius: 10px;
    }

    .small-product-image:hover {
        border: 2px solid #EF2E3B;
    }

    .text {
        width: 50%;
        padding: 20px 30px;
    }

    .text h1 {
        font-size: 2.3rem;
    }

    .price-row {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .price-row div {
        margin-top: -20px;
    }

    .former-price {
        margin-top: -25px;
    }

    .counter {
        width: 40%;
        padding: 10px 15px;
    }

    .button-div {
        width: 54%;
    }

    button {
        padding: 15px 20px;
    }
}
</style>
