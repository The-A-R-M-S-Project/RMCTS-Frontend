import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.prototype.$http = axios;
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("jwt");
  config.headers.Authorization = token;
  return config;
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
