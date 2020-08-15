import axios from "axios";
/* eslint-disable*/

const api = "https://rmcts-api.herokuapp.com";

const state = {
  equipment: [],
  Search: "",
  filteredEquipment: []
};

const getters = {
  allEquipment: state => state.equipment,
  searchWord: state => state.Search
};

const mutations = {
  UpdateEquipment: (state, filteredEquipment) =>
    (state.equipment = filteredEquipment)
};
const actions = {
  catalogedEquipment: async ({ commit }) => {
    try {
      let response = await axios.get(`${api}/equipment/catalog`);
      await commit("UpdateEquipment", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  searchTerm: ({ commit }, search) => {
    axios.post(`${api}/equipment/search`, { search: search }).then(res => {
      console.log(res.data);
      console.log(search);
      commit("UpdateEquipment", res.data);
    });
  },
  updateCatalog: ({ commit }) => {
    commit("setEquipment");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
