<template>
    <transition name="search" mode="out-in">
        <section v-if="visible">
            <div>
                <input type="search" name="search" id="search" placeholder="Search for an item..." required autofocus>
                <base-button mode="search">Search</base-button>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    name: 'TheSearchbar',
    props: {
        visible: {
            type: Boolean,
            required: true,
        }
    }
}
</script>

<style scoped>
section {
    width: 75%;
    margin: 3% auto;
    padding: 0.5rem;
    text-align: center;
}

div {
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: #64646F33 0px 7px 29px 0px;
}

input {
    font-family: inherit;
    width: 75%;
    padding: 10px;
    border: none;
}

input:focus {
    outline: 1px solid #F22F39;
}

.search-enter-from {
    opacity: 0;
    transform: translateX(-70px);
}

.search-leave-to {
    opacity: 0;
    transform: translateX(70px);
}

.search-enter-active {
    transition: all 0.5s ease-out;
}

.search-leave-active {
    transition: all 0.5s ease-in;
}

.search-enter-to,
.search-leave-from {
    opacity: 1;
    transform: translateX(0);
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
        width: 85%;
    }
}

/* Mobile screens styling */
@media  (max-width: 480px) {
    section {
        width: 90%;
    }

    div {
        width: 90%;
    }

    input {
        width: 70%;
    }
}
</style>