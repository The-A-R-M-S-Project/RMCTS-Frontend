/* eslint-disable */
import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("jwt") || "",
  user: {
    name: "Username",
    email: "user@example.com"
  },
  signupStatus: ""
};

const mutations = {
  auth_request: state => (state.status = "loading"),
  auth_success: (state, data, token) => {
    state.staus = "success";
    state.user = data;
    state.token = token;
  },
  auth_error: state => (state.status = "error"),
  rm_token: state => (state.token = ""),
  signup_success: state => state.signup = "success"
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
  },
  logout: function({ commit }) {
    if (localStorage.getItem("jwt") != null) {
      console.log(localStorage.getItem("jwt"));
      axios
        .post(`http://localhost:3000/admins/me/logout`)
        .then(res => {
          console.log(res);
          console.log("logged out");
          localStorage.removeItem("jwt");
          // this.$router.push({ name: "index" });
          commit("rm_token");
        })
        .catch(err => {
          console.log(err.response.data.message);
        });
    }
  },
  signup: async function({ commit }, user) {
    // e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/admins", user);
      console.log(res);
      commit('signup_success')
    } catch (err) {
      console.log(err);
      alert(err);
    }

    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    //   alert(err);
    // });
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
