import Vue from 'vue'
import VueRouter from 'vue-router'
import dashBoard from '../views/dashBoard.vue'
import vistaPronostico from '../views/vistaPronostico.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home1',
    component: dashBoard
  },
  {
    path: '/',
    name: 'home2',
    component: vistaPronostico,
  }

  
]

const router = new VueRouter({
  routes
})

export default router
