import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import AllTask from '../views/AllTask.vue'
import FinishedTask from '../views/FinishedTask.vue'
import UnfinishedTask from '../views/UnfinishedTask.vue'
import ChatPage from '../views/ChatPage.vue'
import ManageUsers from '../views/ManageUsers.vue'
import ChangePromote from '../views/ChangePromote.vue'
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

    {
      path: '/AllTask',
      name: 'AllTask',
      component: AllTask
    },

    {
      path: '/FinishedTask',
      name: 'FinishedTask',
      component: FinishedTask
    },

    {
      path: '/UnfinishedTask',
      name: 'UnfinishedTask',
      component: UnfinishedTask
    },

    {
      path: '/ChatPage',
      name: 'ChatPage',
      component: ChatPage
    },

    {
      path: '/ManageUsers',
      name: 'ManageUsers',
      component: ManageUsers
    },

    {
      path: '/ChangePromote',
      name: 'ChangePromote',
      component: ChangePromote
    },
  ]
})

export default router
