import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import equipment from "./modules/equipment";
import search from "./modules/search";
import catalog from "./modules/catalog";
import facerecon from "./modules/facerecon";
import createPersistedState from "vuex-persistedstate";
import calendar from "./modules/calendar";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    auth,
    equipment,
    search,
    catalog,
    facerecon,
    calendar
  }
});
