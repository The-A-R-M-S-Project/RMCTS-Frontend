import axios from "axios";

const state = {
  equipment: []
};

const getters = {
  allEquipment: state => state.equipment
};

const mutations = {
  Equipment: (state, equipment) => (state.equipment = equipment)
};
const actions = {
  catalogedEquipment: async ({ commit }) => {
    try {
      let equipment = await axios.get("URL");
      // eslint-disable-next-line
      console.log(equipment.data);
      commit("Equipment", equipment.data);
    } catch (error) {
      // eslint-disable-next-line
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
