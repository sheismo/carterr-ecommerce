<template>
    <form action="#" @submit.prevent="submit">
        <h3>Welcome, glad to have you back!</h3>
        <p v-if="!validInputs" class="alert">Enter your correct email address and password.</p>

        <div>
            <input type="email" name="email" placeholder="Email Address" v-model="emailAddress" autofocus required>
        </div>

        <div>
            <input type="password" name="password" placeholder="Password" v-model="password" required>
        </div>

        <p class="forgot-password">Forgot Password?</p>

        <button :disabled="!validInputs">Sign In</button>
    </form>

    <div class="alternative">
        <div>
            <div class="line"></div>
            <span>or signup with</span>
            <div class="line"></div>
        </div>

        <div>
            <div>
                <a href="#">
                    <img src="../../assets/logo-images/google-logo.png" alt="Google Logo">
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="../../assets/logo-images/facebook-logo.png" alt="Facebook Logo">
                </a>
            </div>
        </div>
    </div>

    <base-modal :show="showModal" message="Sign in failed - Feature Unavailable" :loading="loading" mode="danger">
        <p class="error">Cannot sign in unregistered users, please try again later.</p>
    </base-modal>
</template>

<script>
export default {
    name: 'SignIn',
    data() {
        return {
            showModal: false,
            loading: false,
            emailAddress: '',
            password: '',
        }
    },
    computed: {
        validInputs() {
            const regex = /\S+@\S+\.\S+/ 
            return this.emailAddress.length > 0 && regex.test(this.emailAddress) && this.password !== '' && this.password.length >= 6
        }
    },
    methods: {
        submit() {
            if (this.validInputs) {
                this.resetForm()
                this.showModal = true
                setTimeout(() => {
                    this.showModal = false
                }, 5000)
            }
        },
        resetForm() {
            this.emailAddress = ''
            this.password = ''
            this.confirmPassword = ''
        }
    }
}
</script>

<style scoped>
form {
    width: 60%;
    margin: 0 auto;
    padding: 0.5rem;
}

h3 {
    margin-bottom: 0;
    color: #222;
    text-align: center;
    font-weight: 400;
    font-size: 0.9rem;
}

p.alert {
    margin: 5px auto;
    color: #EF2E3B;
    text-align: center;
    font-weight: 300;
    font-size: 0.8rem;
}

form > div {
    margin: 20px auto;
}

p.forgot-password {
    margin: -15px auto 20px;
    padding-bottom: 3px;
    color: #222;
    font-size: 0.8rem;
    text-align: right;
    text-decoration: underline;
}

input {
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

button {
    width: 100%;
    margin: 20px auto;
    padding: 10px;
    outline: none;
    border: 1px solid #EF2E3B;
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
    text-align: center;
    color: #FFF;
    background: #EF2E3B;
}

p.error {
    font-size: 0.9rem;
}

.alternative {
    margin-top: 40px;
}

.alternative > div{
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.alternative > div:first-of-type div  {
    width: 75px;
    margin: 0 5px;
    border: 1px solid #BBB;
   
}

.alternative > div:first-of-type span {
    font-size: 0.9rem;
}

.alternative > div:last-of-type div {
    width: 100px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    background: #F5F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
}


/* iPads and laptop screens */
@media (min-width: 768px) and (max-width: 1024px) {
    form, div.alternative {
        width: 75%;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
  form, div.alternative {
    width: 75%;
  }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    form, div.alternative {
        width: 100%;
    }
}

/*extra small screens */
@media (max-width: 300px) {
    form {
        padding: 0;
    }

    h3 {
        font-size: 0.8rem;
    }

    p.alert {
        font-size: 0.6rem;
    }
}

</style>