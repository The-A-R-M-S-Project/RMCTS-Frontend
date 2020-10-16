/* eslint-disable no-console */
import Axios from "axios";
import api from "../../api";

// state
const state = {
  loading: false,
  failed: false,
  accountVerified: false,
  userprofile: {}
};

// mutations
const mutations = {
  info_submission: state => {
    state.loading = true;
  },
  submission_complete: state => {
    state.loading = false;
  },
  auth_request: state => {
    state.loading = true;
    state.failed = false;
    state.accountVerified = false;
  },
  auth_success: state => {
    state.loading = false;
    state.failed = false;
    state.accountVerified = false;
  },
  auth_error: state => {
    state.loading = false;
    state.failed = true;
  },
  // signup_success: (state) => (state.signup = "success"),
  verification_error: state => {
    (state.accountVerified = true), (state.loading = false);
  },
  set_userprofile: (state, user) => {
    state.userprofile = user;
  }
};

// actions
const actions = {
  instituteLogin: async function({ commit }, data) {
    try {
      commit("auth_request");
      let res = await api.post("users/login", data);
      const user = res.data.data.user;
      const token = res.data.token;
      if (user.role === "institution") {
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        commit("auth_success");
      } else {
        commit("auth_error");
      }
    } catch (err) {
      if (err.data.type == "not-verified") {
        commit("verification_error");
      } else {
        commit("auth_error");
      }
    }
  },
  individualLogin: async function({ commit }, data) {
    try {
      commit("auth_request");
      let res = await api.post("users/login", data);
      const user = res.data.data.user;
      const token = res.data.token;
      if (user.role === "individual") {
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        commit("auth_success");
      } else {
        commit("auth_error");
      }
    } catch (err) {
      if (err.data.type == "not-verified") {
        commit("verification_error");
      } else {
        commit("auth_error");
      }
    }
  },
  faceRecognitionLogin: async function({ commit }, data) {
    try {
      commit("auth_request");
      // let res = await api.post("users/login", data);
      console.log(data);
      let res = await Axios.post(
        "http://localhost:3000/users/login-face-recognition",
        data
      );
      console.log(res.data);
      const user = res.data.data.user;
      const token = res.data.token;
      if (user.role === "individual") {
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        commit("auth_success");
      } else {
        commit("auth_error");
      }
    } catch (err) {
      console.log(err);
      commit("auth_error");
    }
  },
  instituteSignup: async function({ commit }, user) {
    try {
      commit("info_submission");
      let res = await api.post("users", user);
      console.log(res);
      commit("submission_complete");
      return res;
    } catch (err) {
      commit("submission_complete");
      return err.response;
    }
  },
  individualSignup: async function({ commit }, user) {
    try {
      commit("info_submission");
      let res = await api.post("users", user);
      console.log(res);
      commit("submission_complete");
      return res;
    } catch (err) {
      commit("submission_complete");
      return err.response;
    }
  },
  orgSignup: async function({ commit }, institute) {
    try {
      let res = await api.post("users", institute);
      console.log(res);
      commit("submission_complete");
      return res;
    } catch (err) {
      commit("submmission_complete");
      return err.response;
    }
  },
  profile: async function({ commit }) {
    try {
      const user_id = JSON.parse(localStorage.getItem("user"))._id;
      let user = await api.get(`users/profile/${user_id}`);
      commit("set_userprofile", user.data);
    } catch (err) {
      console.log(err);
    }
  },
  updateProfile: async function({ commit }, data) {
    try {
      commit("info_submission");
      const user_id = JSON.parse(localStorage.getItem("user"))._id;
      // eslint-disable-next-line no-unused-vars
      let user = await api.patch(`users/profile/${user_id}`, data);
      commit("submission_complete");
    } catch (err) {
      console.log(err.response);
      commit("submission_complete");
    }
  }
};

// getters
const getters = {
  user: state => state.user,
  institute: state => state.institute,
  loading: state => state.loading,
  auth_failed: state => state.failed,
  account_verified: state => state.accountVerified,
  user_profile: state => state.userprofile
};

export default {
  state,
  mutations,
  actions,
  getters
};
