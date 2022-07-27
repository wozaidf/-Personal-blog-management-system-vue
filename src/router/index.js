import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
// import Login from '../views/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import UnKown from '../views/componet/UnKown.vue'
import CandyLib from '../views/componet/CandyLib.vue'
import Self from '../views/componet/Self.vue'
const lwogin = () => import('../views/Login.vue')
// import ShareStore from '@/store/index.js'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'main',
    component: HelloWorld
  },
  {
    path: '/home',     //路径参数:username
    name: 'home',
    component: HomeView,
    children: [                  //嵌套路由，及在HomeView中嵌套以下组件
      // { path: '/', redirect: '/home' },   //redirect将根路径重定向为目标路劲，（本项目中：及点入时自动跳转到默认页面）
      {
        // 孩子不用加/
        path: 'UnKown',
        // name:'UnKown',
        component: UnKown
      },
      {
        path: 'CandyLib',
        // name:'CandyLib',
        component: CandyLib
      },
      {
        path: 'Self',
        // name:'Self',
        component: Self
      }
    ]

  },
  {
    path: '/login',
    name: 'Login',
    component: lwogin
  },
  {
    path: '*',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotFound
  },


]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
// router.beforeEach((to, from, next) => {
//   let token = ShareStore.getAction('token')
//   if (to.path === '/' || to.path === '/login') {
//     next();
//   } else if (token) {
//     next()
//   } else {
//     next('/login')
//   }


  // 这个地方，拿上token，取后端判断
  //   console.log(to, from)
  // } else if (sessionStorage.getItem('token')) {
  // next()
  // } else {         //用户没有登入就跳转到login
  //   next('/login')}

  // next()
  // console.log(to,from)
// })

export default router
