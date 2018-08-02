import Vue from "vue";

import AppComponent from "./App.vue";
import store from "./mixins/store";
import router from "./mixins/router";
import axiosInstance from "./mixins/axios";

Vue.prototype.$http = axiosInstance;

new Vue({
  // el: '#app',
  store,
  router,
  render: h => h(AppComponent)
}).$mount("#app");
