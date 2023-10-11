import Vue from "vue";
import VueRouter from "vue-router";
import Tailwindcss from "tailwindcss";
import VueTailwind from "vue-tailwind";
import App from "./App.vue";
import Login from "./components/auth/Login.vue";
import Home from "./components/Home.vue";

Vue.config.productionTip = false;

Vue.use(Tailwindcss);
Vue.use(VueRouter);

const components = {
  //...
};

Vue.use(VueTailwind, components);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

// chek each request
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = false // todo firebase.auth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
