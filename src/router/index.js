import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

import SalesPage from '../views/SalesPage.vue'
import CheckoutPage from '../views/CheckoutPage.vue'
import ConfirmationPage from '../views/ConfirmationPage.vue' 

import CatalogPage from '../views/CatalogPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/:topSection(men|women|accessories|sale)/:subSection?/:subSubSection?',
      name: 'catalog',
      component: CatalogPage,
    },
    {
      path: '/sale',
      name: 'sale',
      component: SalesPage,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage,
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationPage,
    },
  ],
})

export default router
