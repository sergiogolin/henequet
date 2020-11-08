import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

const BeersList = () => import(/* webpackChunkName: "BeersList" */'@/components/beers/BeersList.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Beers' }
  },
  {
    path: '/beers',
    name: 'Beers',
    component: BeersList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
