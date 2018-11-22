import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import Home from '@/components/Home'
import Options from '@/components/Options'
import Calc from '@/components/Calc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/options',
      name: 'Options',
      component: Options
    },
    {
      path: '/calc',
      name: 'Calc',
      component: Calc
    }
  ]
})
