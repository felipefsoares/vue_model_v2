import Vue from "vue";
import Axios from "../../mixins/axios";
import router from "../../mixins/router.js";

export default {
  state: {},
  mutations: {},
  actions: {
    login({}, usuario) {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http.post("heroilogin", usuario).then(res => {
          if (res.data == 1) {
            let token = "token teste 98309739783 0wh98w72437";
            localStorage.setItem("user-token", token);
            Axios.defaults.headers.common["Authorization"] = token;
            router.push("/");
            resolve();
          } else {
            reject();
          }
        });
      });
    },
    logout() {
      console.log("​logout -> ", "foi aqui ");
      localStorage.removeItem("user-token");
      delete Axios.defaults.headers.common["Authorization"];
      router.push("/login");
    }
  },
  getters: {
    // getTest: state => state.nome
  }
};
