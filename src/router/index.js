import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/company/HomePage.vue'
import ShopPage from '../views/company/ShopPage.vue'
import ProductPage from '../views/company/ProductPage.vue'
import AuthPage from '../views/auth/AuthPage.vue'
import ContactPage from '../views/company/ContactPage.vue'
import SearchPage from '../views/company/SearchPage.vue'
import UserCart from '../views/user/UserCart.vue'
import UserCheckout from '../views/user/UserCheckout.vue'
import PaymentSuccess from '../views/payment/PaymentSuccess.vue'
import PaymentError from '../views/payment/PaymentError.vue'

const AboutPage =  () => import('../views/company/AboutPage.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', name: 'home', component: HomePage, alias: '/home'},
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/shop', name: 'shop', component: ShopPage },
  { path: '/shop/:id', name: 'product', component: ProductPage, props: true },
  { path: '/contact-us', name: 'contact-us', component: ContactPage },
  { path: '/auth', name: 'auth', component: AuthPage },
  { path: '/search', name: 'Search Results', component: SearchPage, props: true },
  { path: '/cart', name: 'Cart', component: UserCart },
  { path: '/checkout', name: 'Checkout', component: UserCheckout },
  { path: '/success', name: 'PaymentSuccess', component: PaymentSuccess },
  { path: '/error', name: 'PaymentError', component: PaymentError },
  { path: '/:notFound(.*)', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Checkout' && from.name !== 'Cart') next({ name: 'shop' })
  else next()
})


export default router
