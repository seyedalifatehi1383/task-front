import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },

    
  ]
})

export default router
