import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../pages/About.vue'
import Products from "../pages/Products.vue"
import Brands from '../pages/Brands.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      /* redirect: to => {
        return {
          path: '/'
        }
      }, */
      children: [
        {
          path: "/about",
          name: "About",
          component: About
        },
        {
          path: "/products",
          name: "Products",
          component: Products
        },
        {
          path: "/brands",
          name: "Brands",
          component: Brands
        }

      ]
    },

  ]
})

export default router
