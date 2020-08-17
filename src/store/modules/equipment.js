/* eslint-disable no-console */
import Vue from "vue";
import api from "../../api";
// state
const state = {
  myEquipment: [],
  // triggers equipment editing modal
  editing: false,
  // triggers loader while adding items
  addingItem: false,
  itemBeingEdited: {}
};

// getters
const getters = {
  myEquipment: state => state.myEquipment,
  editing: state => state.editing,
  addingItem: state => state.addingItem,
  itemBeingEdited: state => state.itemBeingEdited
};
// mutations
const mutations = {
  myEquipment: (state, equipment) => (state.myEquipment = equipment),
  newItem: (state, item) => {
    state.myEquipment.unshift(item);
    state.addingItem = false;
  },
  // activates loader on item submission
  addingItem: state => (state.addingItem = true),
  updateItem: (state, item) => {
    state.myEquipment.forEach((x, i) => {
      if (x._id == item._id) {
        Vue.set(state.myEquipment, i, item);
      }
    });
    state.editing = false;
  },
  // activates equipment editing modal
  editItem: (state, item) => {
    state.editing = true;
    state.itemBeingEdited = item;
  },
  // deactivates equipment editing modal
  cancelEditing: state => {
    state.editing = false;
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
      let equipment = await api.get(`equipment/equipment`);
      commit("myEquipment", equipment.data);
    } catch (error) {
      console.log(error);
    }
  },
  addEquipment: async ({ commit }, data) => {
    try {
      commit("addingItem");
      console.log(data);
      let res = await api.post(`equipment/item`, data);
      commit("newItem", res.data);
    } catch (error) {
      alert("error occured");
      console.log(error);
    }
  },
  updateEquipment: async ({ commit }, data) => {
    try {
      let res = await api.patch(`equipment/item`, data);
      commit("updateItem", res.data);
    } catch (error) {
      console.log(error);
    }
  },
  // activates equipment editing modal
  editEquipment: ({ commit }, item) => {
    commit("editItem", item);
  },
  // deactivates equipment editing modal
  handleCancel: ({ commit }) => {
    commit("cancelEditing");
  },
  deleteEquipment: async ({ commit }, id) => {
    try {
      await api.delete(`delete-item/${id}`);
      console.log("Deleted");
      commit("deleteItem", id);
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
