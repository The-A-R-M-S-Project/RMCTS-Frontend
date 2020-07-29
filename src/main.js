import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VeeValidate from "vee-validate";
import modal from "vue-js-modal";
// import PortalVue from "portal-vue";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("jwt");
  config.headers.Authorization = token;
  return config;
});
Vue.config.productionTip = false;
Vue.use(VeeValidate, {
  classes: true,
  validity: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});

Vue.use(modal, { dynamic: true });
// Vue.use(PortalVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
