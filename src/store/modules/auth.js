/* eslint-disable */
import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("jwt") || "",
  user: {}
};

const mutations = {
  auth_request: state => (state.status = "loading"),
  auth_success: (state, data, token) => {
    state.staus = "success";
    state.user = data;
    state.token = token;
  },
  auth_error: state => (state.status = "error")
};

const actions = {
  login: async function({ commit }, data) {
    try {
      commit("auth_request");
      let res = await axios.post("http://localhost:3000/admins/login", data);
      console.log(res);
      localStorage.setItem("jwt", res.data.token);
      commit("auth_success", res.data.admin, res.data.token);
    } catch (err) {
      console.error(err);
      alert("login failed");
    }
  }
};

const getters = {
  user: state => state.user,
  status: state => state.status
};

export default {
  state,
  mutations,
  actions,
  getters
};
