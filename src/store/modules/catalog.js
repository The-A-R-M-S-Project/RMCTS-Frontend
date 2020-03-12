import axios from "axios";
import equipmentList from "@/services/equipment-service.js";

const state = {
  equipment: equipmentList
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
      let response = await axios
        .get
        // equipmentList
        // "@/services/equipment-service.js"
        ();
      // eslint-disable-next-line
      console.log(response.data);
      commit("setEquipment", response.data);
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
