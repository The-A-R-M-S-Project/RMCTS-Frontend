/* eslint-disable */
import axios from "axios";

const api = "https://rmcts-api.herokuapp.com/"


// state
const state = {
  loading: false,
  failed: false,
  accountVerified: false,
};

// mutations
const mutations = {
  info_submission: (state) => {
    state.loading = true;
  },
  submission_complete: (state) => {
    state.loading = false;
  },
  auth_request: (state) => {
    state.loading = true;
    state.failed = false;
    state.accountVerified = false;
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
    (state.accountVerified = true), (state.loading = false);
  },
};

// actions
const actions = {
  login: async function({ commit }, data) {
    try {
      commit("auth_request");
      let res = await axios.post(
        api+"users/login",
        data
      );
      console.log(res.body);
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.admin));
      localStorage.setItem("institute", JSON.stringify(res.data.admin));
      commit("auth_success");
    } catch (err) {
      console.log(err.response.data.type);
      if (err.response.data.type == "not-verified") {
        commit("verification_error");
      } else {
        commit("auth_error");
      }
    }
  },
  individualLogin: async function({ commit }, data) {
    try {
      commit("auth_request");
      let res = await axios.post(
        api+"users/login",
        data
      );
      console.log(res.data);
      const user = res.data.data.user
      const token = res.data.token
      if(user.role === "individual"){
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        commit("auth_success");
      }else {
        commit("auth_error")
      }
    } catch (err) {
      console.log(err.response.data.type);
      if (err.response.data.type == "not-verified") {
        commit("verification_error");
      } else {
        commit("auth_error");
      }
    }
  },
  signup: async function({ commit }, user) {
    try {
      let res = await axios.post(
        api+"users",
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
        api+"users",
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
