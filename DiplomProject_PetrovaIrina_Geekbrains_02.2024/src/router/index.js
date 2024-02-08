import { createRouter, createWebHistory } from 'vue-router'
import Str1Components from '@/pages/Str1Components.vue'
import Str2Components from '@/pages/Str2Components.vue'
import Str3Components from '@/pages/Str3Components.vue'
import Str4Components from '@/pages/Str4Components.vue'
import NoteFaundPage from '@/pages/NoteFaundPage.vue'

const routes = [
  {
    path:'/',
    name:'Str1Components',
    component: Str1Components
  },
  {
    path:'/Str2Components',//путь
    name:'Str2Components',
    component: Str2Components
  },
  {
    path:'/Str3Components',
    name:'Str3Components',
    component: Str3Components
  },
  {
    path:'/Str4Components',
    name:'Str4Components',
    component: Str4Components
  },
  {
    path:'/:CatchAll(.*)',
    name:'404',
    component: NoteFaundPage
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
