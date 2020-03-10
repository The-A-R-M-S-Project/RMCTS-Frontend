/* eslint-disable */

import axios from "axios";
import Vue from "vue";

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
      if (x._id == item._id) {
        Vue.set(state.myEquipment, i, item);
      }
    });
  },
  deleteItem: (state, id) => {
    state.myEquipment.forEach((x, i) => {
      if (x._id == id) {
        Vue.delete(state.myEquipment, i);
      }
    });
  }
};
const actions = {
  getEquipment: async ({ commit }) => {
    try {
      let equipment = await axios.get("https://rmcts-api.herokuapp.com/equipment");
      console.log(equipment.data);
      commit("myEquipment", equipment.data);
    } catch (error) {
      console.log(error);
    }
  },
  addEquipment: async ({ commit }, data) => {
    try {
      let res = await axios.post("https://rmcts-api.herokuapp.com/add-item", data);
      console.log(res.data);
      commit("newItem", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  updateEquipment: async ({ commit }, data) => {
    try {
      let res = await axios.put("https://rmcts-api.herokuapp.com/edit-item", data);
      console.log(res.data);
      commit("updateItem", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  deleteEquipment: async ({commit}, id) => {
    try {
      let res = await axios.delete(`https://rmcts-api.herokuapp.com/delete-item/${id}`);
      console.log('Deleted')
      commit("deleteItem", id)
    }
    catch (error){
      console.log(error)
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
