import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
      },
      {
        path: '/quemsomos',
        name: 'Quem Somos',
        component: () => import(/* webpackChunkName: "quemsomos" */ '../views/QuemSomos.vue')
      },
      {
        path: '/contato',
        name: 'Contato',
        component: () => import(/* webpackChunkName: "contato" */ '../views/Contato.vue')
      },
      {
        path: '/cuidados',
        name: 'Cuidados',
        component: () => import(/* webpackChunkName: "cuidados" */ '../views/Cuidados.vue')
      },
      {
        path: '/queroadotar',
        name: 'QueroAdotar',
        component: () => import(/* webpackChunkName: "doacoes" */ '../views/QueroAdotar.vue')
      },
      {
        path: '/queroajudar',
        name: 'QueroAjudar',
        component: () => import(/* webpackChunkName: "doacoes" */ '../views/QueroAjudar.vue')
      },
      {
        path: '/faq',
        name: 'FAQ',
        component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
      },
      
      {
        path: '/formulario',
        name: 'Formulario',
        component: () => import(/* webpackChunkName: "faq" */ '../views/Formulario.vue')
      },
      
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router