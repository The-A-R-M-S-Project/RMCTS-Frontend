import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";
import modal from "vue-js-modal";
import api from "./api";
// import PortalVue from "portal-vue";

Vue.prototype.$user = JSON.parse(localStorage.getItem("user"));
Vue.prototype.$http = api;
api.defaults.timeout = 10000;

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 404:
          // what to do;
          break;
        case 401:
          router.push("/session-expired");
          return Promise.reject(error.response);
      }
    }
  }
);
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
