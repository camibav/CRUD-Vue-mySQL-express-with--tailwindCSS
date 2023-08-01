import { createRouter, createWebHistory } from 'vue-router'
import CrearCompo from '../components/CrearComp.vue'
import EditarCompo from '../components/EditarComp.vue'
import ListarCompo from '../components/ListarComp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    
  },
  {
    path: '/crear',
    name: 'crear',
    component: CrearCompo
  },
  {
    path: '/editar',
    name: 'editar',
    component: EditarCompo
  },
  {
    path: '/editar/:id',
    name: 'editarUsuario',
    component: EditarCompo,
    
  },
  {
    path: '/listar',
    name: 'listar',
    component: ListarCompo
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
