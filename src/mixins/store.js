import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
Vue.use(Vuex);
import loginStore from "../components/login/loginStore";

export default new Vuex.Store({
  modules: {
    login: loginStore
  },

  state: {},
  mutations: {},
  actions: {},
  getters: {}
});
