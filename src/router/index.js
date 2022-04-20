import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Slot from '../views/Slot.vue'
import UserList from '../views/UserList.vue'
import UserLogin from '../views/UserLogin.vue'
import Users from '../components/users/Users.vue'
import Rights from '../components/rights/Rights.vue'
import Roles from '../components/rights/Roles.vue'
const routes = [
  {
    path: '/',
    component: UserLogin
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {path:'/userlist',component:UserList,
  children:[
    {path:'/users',component:Users},
    {path:'/rights',component:Rights},
    {path:'/roles',component:Roles}
  ]}
  // {path:'/userlogin',component:UserLogin}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path==='/'){
    return next();
  }
  //获取token值
  const token=localStorage.getItem('token');
  if(!token){
    return next('/')
  }
  next();
})
export default router
