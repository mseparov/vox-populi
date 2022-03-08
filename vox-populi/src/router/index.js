import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store"


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      needsUser: true,
    }
  },
  {
    path: '/ourNews',
    name: 'ourNews',
    component: () => import('../views/ourNews.vue'),
    meta: {
      needsUser: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next) => {
    console.log("Stara ruta", from.name, " -> ", to.name, "Korisnik", store.currentUser)

    const noUser = store.currentUser === null;

    if(noUser && to.meta.needsUser){
      next("login");

    } else{
      next();
    }

    next();
})

router.beforeEach((to, from, next) => {
  console.log('Stara ruta', from.name, ', a nova ruta', to.name, 'korisnik', store.currentUser);
  const noUser= store.currentUser === null;

  if(noUser && to.meta.needsUser){
    next('Login');
  } else {
    next();
  }
});

export default router;
