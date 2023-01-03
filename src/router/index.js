import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/company/HomePage.vue'
import ShopPage from '../views/company/ShopPage.vue'
import ProductPage from '../views/company/ProductPage.vue'
import AuthPage from '../views/auth/AuthPage.vue'
import ContactPage from '../views/company/ContactPage.vue'
import UserDashboard from '../views/user/UserDashboard.vue'
import UserCart from '../views/user/UserCart.vue'

const AboutPage =  () => import('../views/company/AboutPage.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/shop', name: 'shop', component: ShopPage },
  { path: '/shop/:id', name: 'product', component: ProductPage, props: true },
  { path: '/contact-us', name: 'contact-us', component: ContactPage },
  { path: '/auth', name: 'auth', component: AuthPage },
  { path: '/search-results', name: 'Search Results', component: UserDashboard },
  { path: '/cart', name: 'Cart', component: UserCart },
  { path: '/:notFound(.*)', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
