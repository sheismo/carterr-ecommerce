<template>
    <section>
        <div class="banner">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati, possimus Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cumque unde Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum sequi nihil quas minima iure velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Animi magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quas, non Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ad assumenda magni non tempore, necessitatibus asperiores?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repellendus mollitia 
                lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <i>All Rights Reserved. Carterr &copy; {{ currentYear }}</i>
            </p>
            <base-button link to="/shop" mode="red">Start shopping</base-button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutUs',
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
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