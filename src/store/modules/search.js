import axios from "axios";

const state = {
  Search: "",
  Equipment: []
};

const mutations = {
  Equipment: (state, equipment) => (state.Equipment = equipment)
};

const actions = {
  getAllEquipment: async ({ commit }) => {
    try {
      let equipment = await axios.get("http://localhost:3000/equipment");
      commit("Equipment", equipment.data);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }
};

const getters = {
  allTitles: state => state.Equipment.titles,
  allDescriptions: state => state.Equipment.descriptions,
  allLocations: state => state.Equipment.location
};

export default {
  state,
  mutations,
  actions,
  getters
};
