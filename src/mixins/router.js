import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import LoginComponent from "../components/login/index.vue";
import SignupComponent from "../components/signup/index.vue";
import HomeComponent from "../components/home/index.vue";

const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("user-token")) {
    next();
    return;
  }
  next("/login");
};
const ifNotAuthenticated = (to, from, next) => {
  if (!localStorage.getItem("user-token")) {
    next();
    return;
  }
  next("/");
};

export default new Router({
  routes: [
    {
      path: "/",
      component: HomeComponent,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/login",
      component: LoginComponent,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/signup",
      component: SignupComponent,
      beforeEnter: ifNotAuthenticated
    }
  ]
});
