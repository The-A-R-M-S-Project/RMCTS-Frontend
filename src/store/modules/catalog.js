import axios from "axios";
import equipmentList from "@/services/equipment-service.js";

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
      let response = await axios.get(equipmentList);
      commit("setEquipment", response.data);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  },
  updateCatalog: ({ commit }, query) => {
    if (query.length != 0) {
      const results = state.filter(equip => {
        equip.title == query;
      });
      commit("setEquipment", results);
    } else {
      this.catalogedEquipment;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
