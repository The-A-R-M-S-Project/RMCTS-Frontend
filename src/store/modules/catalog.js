import axios from "axios";
// import equipmentList from "@/services/equipment-service.js";
/* eslint-disable */

const api = "http://localhost:3000";

const state = {
  equipment: []
};

const getters = {
  allEquipment: state => state.equipment
};

const mutations = {
  setEquipment: (state, equipment) => (state.equipment = equipment)
};
const actions = {
  catalogedEquipment: async ({ commit }) => {
    try {
      let response = await axios.get(`${api}/catalog-default`);
      console.log(response.data);
      commit("setEquipment", response.data);
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
