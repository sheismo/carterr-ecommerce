<template>
  <section>
    <div id="first">
        <h2>Contact Us</h2>
        <p>Reach out to our customer service. Available 24/7</p>
        <div>
            <font-awesome-icon icon="fa-brands fa-instagram" size="sm" class="icon" />
            <font-awesome-icon icon="fa-brands fa-linkedin" size="sm" class="icon" />
            <font-awesome-icon icon="fa-brands fa-facebook" size="sm" class="icon" />
            <font-awesome-icon icon="fa-brands fa-twitter" size="sm" class="icon" />
        </div>
    </div>
    <div id="second">
        <h2><font-awesome-icon icon="fa-solid fa-address-card" size="sm" class="icon" /><span>Get in Touch</span></h2>
        <div>
            <form action="#" @submit.prevent="sendMessage">
                <div>
                    <label for="name"></label>
                    <input type="text" id="name" name="senderName" placeholder="Your Name" required autofocus v-model="message.senderName">
                </div>

                <div>
                    <label for="email"></label>
                    <input type="text" id="email" name="senderEmail" placeholder="Your Email" required autofocus v-model="message.senderEmail">
                </div>

                <div>
                    <label for="message"></label>
                    <textarea id="message" name="content" cols="30" rows="8" placeholder="Your Message" required autofocus v-model="message.content"></textarea>
                </div>

                <div v-if="isLoading" class="spinner">
                    <My-spinner></My-spinner>
                </div>

                <div>
                    <div v-if="showFeedback">
                        <p class="feedbackMessage"><font-awesome-icon icon="fa-solid fa-check" size="sm" class="icon" />{{  feedbackMessage }}</p>
                    </div>
                    <div v-if="showError">
                        <p class="errorMessage"><font-awesome-icon icon="fa-solid fa-xmark" size="sm" class="icon" />{{ errorMessage }}</p>
                    </div>
                </div>

                <div>
                    <button>Send Message</button>
                </div>
            </form>
            <div>
                <div>
                    <p><font-awesome-icon icon="fa-solid fa-message" size="sm" class="icon" /> info@carterr.com</p>
                </div>
                <div>
                    <p><font-awesome-icon icon="fa-solid fa-phone" size="sm" class="icon" />09012345678, 08012345678</p>
                </div>
                <div>
                    <p><font-awesome-icon icon="fa-solid fa-location-dot" size="sm" class="icon" /> Lekki Phase 1, Lagos</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import emailjs from '@emailjs/browser'
import MySpinner from '../ui/MySpinner.vue'

export default {
    name: 'ContactUs',
    components: {
        MySpinner
    },
    data() {
        return {
            isLoading: false,
            message: {
                senderName: '',
                senderEmail: '',
                content: ''
            },
            showFeedback: false,
            feedbackMessage: '',
            showError: false,
            errorMessage: ''
        }
    },
    computed: {
        validSenderDetails() {
            const regex = /\S+@\S+\.\S+/
            return this.message.senderEmail.length > 0 && regex.test(this.message.senderEmail) && this.message.senderName !== '' && this.message.content !== ''
        },
        emailKey() {
            return this.$store.getters.emailKey
        }
    },
    methods: {
        async sendMessage() {
            if (this.validSenderDetails) {                   
                this.isLoading = true
                try {
                    await emailjs.send('service_q8nwyjc', 'template_8ovw9s',this.message, this.emailKey)

                    this.resetForm()
                    this.isLoading = false
                   
                    this.feedbackMessage = 'Message sent! Thank you for contacting Carterr'
                    this.showFeedback = true
                    setTimeout(() => {
                        this.showFeedback = false
                    }, 2000)
                } catch (error) {
                    this.isLoading = false

                    this.errorMessage = error.text !== '' ? error.text : 'Unable to send message, please try again!'
                    this.showError = true
                    setTimeout(() => {
                        this.showError = false
                    }, 2000)
                }           
            }
            
        },
        resetForm() {
            this.message = {
                senderName: '',
                senderEmail: '',
                content: ''
            }
        }
    }
}
</script>

<style scoped>
section {
    width: 100%;
    margin: auto;
}

section #first {
    width: 100%;
    margin: 0;
    padding: 30px 50px;
    background: #EF2E3B;
}

section #second {
    width: 60%;
    margin: 5% auto;
    padding: 15px 30px;
    background: #FFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1rem;
}

#first h2 {
    margin: 0;
    color: #FFF;
    font-size: 2rem;
}

#first p {
    margin: 20px auto;
    color: #FFF;
    font-size: 1rem;
} 

#first .icon {
    color: #FFF;
    font-size: 1.5rem;
    margin-right: 20px;
}

#second h2 span {
    color: #313233;
    /* font-size: 1.2rem; */
    font-weight: 300;
}

#second > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#second form {
    width: 50%; 
}

form div {
    margin-bottom: 15px;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
    background: #F1F2F3;
    outline: none;
    border: none;
    border-radius: 8px;
    font-family: inherit;
}

form input:focus, form textarea:focus {
    border: 1px solid #FFF;
}

#second button {
    width: 50%;
    margin: auto;
    padding: 10px;
    background: #EF2E3B;;
    color: #FFF;
    outline: none;
    border: none;
    border-radius: 10px;
    font-family: inherit;
}

#second button:hover {
    transform: scale(1.01);
}

#second > div > div {
    width: 45%;
    border-left: 2px solid #F1F2F3;
    padding-left: 15px;
} 

#second > div > div p {
    margin: 20px auto;
    color: #313233;
    font-size: 0.9rem;
    font-weight: 300;
}

#second > div > div p .icon {
    color: #EF2E3B;
    font-size: 1.2rem;
}

#second .icon {
    margin-right: 10px;
}

/* iPads and laptop screens */
@media (min-width: 769px) and (max-width: 1024px) {
    section #second {
        width: 80%;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    section #second {
        width: 65%;
    }

    #second > div {
        flex-direction: column;
        align-items: flex-start;
    }

    #second form, #second > div > div {
        width: 100%;
    }
}

/* Mobile screens styling */
@media (max-width: 480px) {
    section #second {
        width: 90%;
    }

    #second > div {
        flex-direction: column;
        align-items: flex-start;
    }

    #second form, #second>div>div {
        width: 100%;
    }
}

.feedbackMessage {
    color: #2DCC70;
    font-size: 0.9rem;
}

.errorMessage {
    color: #EF2E3B;
    font-size: 0.9rem;
}

.spinner { 
    position: relative;
    padding-bottom: 15px;
}
</style>