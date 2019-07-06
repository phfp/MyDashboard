import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/paginas/Home'
import Codbarras from '@/paginas/Codbarras'
import Digito from '@/paginas/Digito'
import Login from '@/paginas/Login'
import CadastroUser from '@/paginas/CadastroUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/codbarras',
      name: 'Codbarras',
      component: Codbarras
    },
    {
      path: '/digito',
      name: 'Digito',
      component: Digito
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastrouser',
      name: 'Cadastrouser',
      component: CadastroUser
    }
  ]
})
