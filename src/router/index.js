import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/paginas/Home'
import Codbarras from '@/paginas/Codbarras'
import Laravel from '@/paginas/Laravel'
import Cpp from '@/paginas/Cpp'
import Javascript from '@/paginas/Javascript'
import Visual from '@/paginas/Visual'
import Postman from '@/paginas/Postman'
import Gitkraken from '@/paginas/Gitkraken'
import Composer from '@/paginas/Composer'
import Artisan from '@/paginas/Artisan'

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
      path: '/laravel',
      name: 'Laravel',
      component: Laravel
    },
    {
      path: '/cpp',
      name: 'Cpp',
      component: Cpp
    },
    {
      path: '/javascript',
      name: 'Javascript',
      component: Javascript
    },
    {
      path: '/visual',
      name: 'Visual',
      component: Visual
    },
    {
      path: '/postman',
      name: 'Postaman',
      component: Postman
    },
    {
      path: '/gitkraken',
      name: 'Gitkraken',
      component: Gitkraken
    },
    {
      path: '/composer',
      name: 'Composer',
      component: Composer
    },
    {
      path: '/artisan',
      name: 'Artisan',
      component: Artisan
    }
  ]
})
