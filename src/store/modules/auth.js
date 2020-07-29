/* eslint-disable */
import axios from "axios";

// state
const state = {
  loading: false,
  failed: false,
  accountVerified: false,
};

// mutations
const mutations = {
  auth_request: (state) => {
    state.loading = true;
    state.failed = false;
    state.accountVerified=false;
  },
  auth_success: (state) => {
    state.loading = false;
    state.failed = false;
    state.accountVerified = false;
  },
  auth_error: (state) => {
    state.loading = false;
    state.failed = true;
  },
  signup_success: (state) => (state.signup = "success"),
  verification_error: (state) => {
    state.accountVerified = true,
    state.loading = false}
};

// actions
const actions = {
  login: async function({ commit }, data) {
    try {
      commit("auth_request");
      let res = await axios.post(
        "https://rmcts-api.herokuapp.com/admins/login",
        data
      );
      console.log(res.body);
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.admin));
      localStorage.setItem("institute", JSON.stringify(res.data.admin));
      commit("auth_success");
    } catch (err) {
      console.log(err.response.data.type, err.response.data.type == "not-verified")
      if (err.response.data.type == "not-verified") {
        commit("verification_error");
        console.log(err.response.data.type)
      } else {
        // console.log(err.response.data.type);
        commit("auth_error");
      }
    }
  },
  logout: function({ commit }) {
    if (localStorage.getItem("jwt") != null) {
      axios
        .post(`https://rmcts-api.herokuapp.com/admins/me/logout`)
        .then((res) => {
          localStorage.removeItem("jwt");
          localStorage.removeItem("user");
          window.localStorage.clear();
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    }
  },
  signup: async function({ commit }, user) {
    try {
      let res = await axios.post(
        "https://rmcts-api.herokuapp.com/admins",
        user
      );
      console.log(res);
      commit("signup_success");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  },
  orgSignup: async function({ commit }, institute) {
    try {
      let res = await axios.post(
        "https://rmcts-api.herokuapp.com/admins",
        institute
      );
      console.log(res);
      commit("signup_success");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  },
};

// getters
const getters = {
  user: (state) => state.user,
  institute: (state) => state.institute,
  loading: (state) => state.loading,
  auth_failed: (state) => state.failed,
  account_verified: (state) => state.accountVerified,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
