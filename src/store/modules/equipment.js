/* eslint-disable */

import axios from "axios";
import Vue from "vue";

const api = "https://rmcts-api.herokuapp.com";
// state
const state = {
  myEquipment: [],
  // triggers equipment editing modal
  editing: false,
  // triggers loader while adding items
  addingItem: false
};

// getters
const getters = {
  myEquipment: state => state.myEquipment,
  editing: state => state.editing,
  addingItem: state => state.addingItem
};
// mutations
const mutations = {
  myEquipment: (state, equipment) => (state.myEquipment = equipment),
  newItem: (state, item) => {
    state.myEquipment.unshift(item)
    state.addingItem = false
  },
  // activates loader on item submission
  addingItem: state => state.addingItem = true,
  updateItem: (state, item) => {
    state.myEquipment.forEach((x, i) => {
      if (x._id == item._id) {
        Vue.set(state.myEquipment, i, item);
      }
    });
    state.editing = false
  },
  // activates equipment editing modal
  editItem: (state) => {
    state.editing = true
  },
  // deactivates equipment editing modal
  cancelEditing: (state) => {
    state.editing = false
  },
  deleteItem: (state, id) => {
    state.myEquipment.forEach((x, i) => {
      if (x._id == id) {
        Vue.delete(state.myEquipment, i);
      }
    });
  }
};
// actions
const actions = {
  getEquipment: async ({ commit }) => {
    try {
      let equipment = await axios.get(
        `${api}/equipment`
      );
      commit("myEquipment", equipment.data);
    } catch (error) {
      console.log(error);
    }
  },
  addEquipment: async ({ commit }, data) => {
    try {
      commit("addingItem")
      console.log(data)
      let res = await axios.post(
        `http://localhost:3000/add-item`,
        data
      );
      commit("newItem", res.data);
    } catch (error) {
      alert("error occured")
      console.log(error);
    }
  },
  updateEquipment: async ({ commit }, data) => {
    try {
      let res = await axios.put(
        `${api}/edit-item`,
        data
      );
      commit("updateItem", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  // activates equipment editing modal
  editEquipment: ({ commit }) => {
    commit("editItem")
  },
  // deactivates equipment editing modal
  handleCancel: ({ commit }) => {
    commit("cancelEditing")
  },
  deleteEquipment: async ({ commit }, id) => {
    try {
      await axios.delete(`${api}/delete-item/${id}`);
      console.log("Deleted");
      commit("deleteItem", id);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
