<template>
  <footer>
    <!-- Brand name, description and social icons -->
    <div class="first">
        <h4>Carterr</h4>
        <p>
            Carterr is an exceptional e-commerce website for the 
            sales of top notch tech gadgets
        </p>
        <div>
            <font-awesome-icon icon="fa-brands fa-instagram" size="sm" class="icon" />
            <font-awesome-icon icon="fa-brands fa-linkedin" size="sm" class="icon" />
            <font-awesome-icon icon="fa-brands fa-facebook" size="sm" class="icon" />
            <font-awesome-icon icon="fa-brands fa-twitter" size="sm" class="icon" />
        </div>
    </div>

    <!-- Website Quick Links -->
    <div class="second">
        <h5>Quick Links</h5>
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>
        <p>Contact Us</p>
    </div>

    <!-- Business Contact Address -->
    <div class="third">
        <h5>Contact</h5>
        <p>+234(90)12345678 - Ola Brown</p>
        <p>24B John Doe Building, Smith Palace Way, Lekki Phase 1, Lagos.</p>
        <p>copyright &copy; <span>{{ currentYear }}</span></p>
    </div>

    <!-- Newsletter Subscription Form -->
    <div class="fourth">
        <h5>Newsletter</h5>
        <p>Subscribe to our newsletter for more info & update</p>
        <form action="">
                <input type="email" autofocus required placeholder="Your Email..">
                <base-button mode="subscribe">Subscribe</base-button>
        </form>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'TheFooter',
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
/* Desktop screens styling */
footer {
    width: 75%;
    margin: 5% auto 2%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.first, .second, .third {
    width: 20%;
}

.fourth {
    width: 30%;
}

.first h4 {
    color: #EF2E3B;
    text-transform: uppercase;
    font-family: 'Work Sans', sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
    letter-spacing: 5px;
}

.first p {
    font-size: 0.7rem;
    font-weight: 300;
    padding-right: 15px;
}

.first div {
    width: 80%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Social icons */
.icon {
    color: #030303;
    font-size: 0.9rem;
}

h5 {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #030303;
}

p {
    font-size: 0.75rem;
    color: #030303;
}

/* Subscribe to newsletter Form */
form {
    padding: 0.3rem;
    background: #E5E5E5;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

input {
    width: 70%;
    padding: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    background: inherit;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    footer {
        width: 85%;
        margin: 5% auto 0;
    }
    .first h4 {
        font-size: 1.1rem;
    }

    h5 {
        font-size: 0.8rem;
    }
    
    p {
        font-size: 0.65rem;
    }

    .icon {
        font-size: 0.95rem;
    }
}

/* Tabs and iPads screens */
@media (min-width: 481px) and (max-width: 768px) {
    footer {
        width: 90%;
        padding: 5%;
        flex-wrap: wrap;
    }
    
    .first, .second, .third, .fourth {
        width: 48%;
    }

    .icon {
        font-size: 1.2rem;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    footer {
        width: 100%;
        padding: 5%;
        flex-direction: column;
        /* align-items: center; */
    }

    .first, .second, .third, .fourth {
        width: 85%;
    }

    .icon {
        font-size: 1.2rem;
    }
}

/* Smaller mobile screens styling */
@media (max-width: 300px) {
    .first, .second, .third, .fourth {
        width: 95%;
    }
}
</style>