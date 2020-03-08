/* eslint-disable */
import axios from "axios";

const state = {
  status: "",
};

const mutations = {
  auth_request: state => (state.status = "loading"),
  auth_success: (state) => {
    state.status = "success";
  },
  auth_error: state => (state.status = "error"),
  signup_success: state => (state.signup = "success")
};

const actions = {
  login: async function({ commit }, data) {
    try {
      commit("auth_request");
      let res = await axios.post("http://localhost:3000/admins/login", data);
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.admin));
      commit("auth_success", res.data.admin, res.data.token);
    } catch (err) {
      alert("login failed");
    }
  },
  logout: function({ commit }) {
    if (localStorage.getItem("jwt") != null) {
      axios
        .post(`http://localhost:3000/admins/me/logout`)
        .then(res => {
          localStorage.removeItem("jwt");
          localStorage.removeItem("user");
        })
        .catch(err => {
          console.log(err.response.data.message);
        });
    }
  },
  signup: async function({ commit }, user) {
    try {
      let res = await axios.post("http://localhost:3000/admins", user);
      console.log(res);
      commit("signup_success");
    } catch (err) {
      console.log(err);
      alert(err);
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
