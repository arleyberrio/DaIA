import Vue from 'vue'
import VueRouter from 'vue-router'
import vistaPronosticoVentas from '@/views/vistaPronosticoVentas.vue'
import vistaPronosticoInventarios from '@/views/vistaPronosticoInventarios.vue'
import layoutMain from '@/views/layoutMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layoutMain',
    component: layoutMain,
    children: [
      {
        path: '/vistaPronosticoVentas',
        name: 'vistaPronosticoVentas',
        component: vistaPronosticoVentas,
      },
      {
        path: '/vistaPronosticoInventarios',
        name: 'vistaPronosticoInventarios',
        component: vistaPronosticoInventarios,
      }
    ]
  },  
]

const router = new VueRouter({
  routes
})

export default router
