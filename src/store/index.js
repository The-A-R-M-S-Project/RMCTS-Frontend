import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import equipment from "./modules/equipment";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    equipment
  }
});
