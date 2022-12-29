<template>
  <section>
    <div class="brands">
        <div>
            <img src="../../assets/logo-images/microsoftlogo.png" alt="Microsoft Brand Logo">
        </div>
        <div>
            <img src="../../assets/logo-images/beatslogo.png" alt="Beats Brand Logo">
        </div>
        <div>
            <img src="../../assets/logo-images/hplogo.png" alt="HP Brand Logo" >
        </div>
        <div>
            <img src="../../assets/logo-images/applelogo.png" alt="Apple Brand Logo">
        </div>
        <div>
            <img src="../../assets/logo-images/samsunglogo.png" alt="Samsung Brand Logo">
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
    width: 75%;
    margin: 5% auto;
}

.brands {
    width: 100%;
    padding: 25px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ECECEC;
}

.brands > div {
    width: 19%; 
}

.brands > div img {
    width: 100%;
    height: auto;
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

    .brands {
        flex-direction: column;
    }

    .brands > div {
        width: 90%;
        margin: auto;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    section {
        width: 100%;
        padding: 5%;
    }

    .brands {
        flex-direction: column;
        align-items: center;
    }

    .brands > div {
        width: 90%;
        margin: auto;
    }
}
</style>