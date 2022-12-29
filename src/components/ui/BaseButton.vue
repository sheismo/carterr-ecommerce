<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        },
        mode: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style scoped>
/* Base styling */
button,
a {
    text-decoration: none;
    font: inherit;
    cursor: pointer;
    display: inline-block;
    border: none;
    outline:none;
}

/* Login button */
.login {
    padding: 0.1rem 0.2rem;
    color: #147BFE;
    background-color: transparent;
    font-size: 0.9rem;
}

.login:hover,
.login:active {
    color: #147BFE;
    border-bottom: 1px solid #147BFE;
}

/* Search button */
.search {
    width: 25%;
    padding: 9px 10px;
    color: #FFF;
    background-color: #EF2E3B;
}

.search:hover{
    background-color: #F22F39;
}

@media (max-width: 480px) {
    .search {
        width: 30%;
    }
}

/* red &  subscribe buttons */
 .red {
    padding: .5rem 1rem;
    background-color: #EF2E3B;
    color: #FFF;
    border-radius: 25px;
    font-size: 0.8rem;
}

.subscribe {
    max-width: 50%;
    padding: .3rem .5rem;
    background-color: #EF2E3B;
    color: #FFF;
    border-radius: 30px;
    font-size: 0.8rem;
}

.red:hover,
.red:active,
.subscribe:hover {
    background-color: #E8212B;
}

/* white button */
.white {
    padding: .5rem 1rem;
    background-color: #FFF;
    color:  #EF2E3B;
    border-radius: 25px;
    font-size: 0.8rem;
}

.white:hover {
    background-color: #F5DEDE;
}

.green {
    padding: .5rem 1.5rem;
    background-color: #FFF;
    color: #2DCC70;
    border-radius: 25px;
    font-size: 0.8rem;
}

.green:hover {
    transform: scale(1.02);
}

/*
.addToCart

.addToCart:hover,
.addToCart:active {
    background-color: #edd2ff;
} */
</style>