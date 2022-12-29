import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

// import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
// import BaseBadge from './components/ui/BaseBadge.vue'
// import BaseSpinner from './components/ui/BaseSpinner.vue'
// const BaseModal = defineAsyncComponent(() => import('./components/ui/BaseModal.vue'))

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCartShopping, faMagnifyingGlass, faBars, faHouse, faMessage, faAddressCard, faRightToBracket, faTruck, faShieldHalved, faHeadset, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'
library.add(faCartShopping, faMagnifyingGlass, faTwitter, faInstagram, faLinkedin, faFacebook, faBars, faHouse, faMessage, faAddressCard, faRightToBracket, faTruck, faShieldHalved, faHeadset, faWallet )


const app = createApp(App)

app.use(store)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

// app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
// app.component('base-badge', BaseBadge)
// app.component('base-spinner', BaseSpinner)
// app.component('base-modal', BaseModal)

app.mount('#app')
