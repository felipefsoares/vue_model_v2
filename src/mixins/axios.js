import Axios from "axios";
import store from "./store.js";

const axiosInstance = Axios.create({
  baseURL: "http://10.209.11.236:8081/restServico"
  // timeout: 1000
  // headers: {'X-Custom-Header': 'foobar'}
});

const handleErrorGlobal = function(err) {
  if (err.status === 401) {
    store.dispatch("logout");
    return false;
  }
};

const handleSuccessGlobal = function(response) {
  if (response.status == 200) {
    return true;
  } else {
    return false;
  }
};

if (localStorage.getItem("user-token")) {
  axiosInstance.defaults.headers.common["Authorization"] = localStorage.getItem(
    "user-token"
  );
}

axiosInstance.interceptors.response.use(
  function(response) {
    if (handleSuccessGlobal(response)) {
      return response;
    }
  },
  function(error) {
    handleErrorGlobal(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
