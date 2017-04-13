import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import doctorMain from '../views/doctor/doctorMain'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
 routes: [
  {
   path: '/login',
   name: 'login',
   component: Login
  },
  {
   path: '/doctor',
   name: 'doctorMain',
   component: doctorMain
  },
  {
   path: '/hello',
   name: 'hello',
   component: Hello
  }
 ]
})


