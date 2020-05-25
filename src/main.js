import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import modal from "vue-js-modal";
// import PortalVue from "portal-vue";

Vue.config.productionTip = false;
Vue.use(modal, { dynamic: true });
// Vue.use(PortalVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
