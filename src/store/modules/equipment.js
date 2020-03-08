/* eslint-disable */

import axios from "axios";

const state = {
  myEquipment: []
};
const getters = {
  myEquipment: state => state.myEquipment
};
const mutations = {
  myEquipment: (state, equipment) => (state.myEquipment = equipment),
  newItem: (state, item) => state.myEquipment.unshift(item),
  updateItem: (state, item) => {
    state.myEquipment.forEach((x, i) => {
      if (x._id === item._id) {
        Vue.set(state.myEquipment, i, item);
      }
    });
  }
};
const actions = {
  getEquipment: async ({ commit }) => {
    try {
      let equipment = await axios.get("http://localhost:3000/equipment");
      console.log(equipment.data);
      commit("myEquipment", equipment.data);
    } catch (error) {
      console.log(error);
    }
  },
  addEquipment: async ({ commit }, data) => {
    try {
      let res = await axios.post("http://localhost:3000/add-item", data);
      console.log(res.data);
      commit("newItem", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  updateEquipment: async ({ commit }, data) => {
    try {
      let res = await axios.put(
        "http://localhost:3000/edit-item",
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
          }
        },
        data
      );
      console.log(res.data);
      commit("updateItem", res.data);
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
