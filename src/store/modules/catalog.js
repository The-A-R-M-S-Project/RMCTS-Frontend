import axios from "axios";
// import equipmentList from "@/services/equipment-service.js";
/* eslint-disable */

const api = "http://localhost:3000";

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
  setEquipment: state => {
    state.filteredEquipment = state.equipment.filter(equip =>
      equip["title"].toLowerCase().includes(state.Search.toLowerCase())
    );
  },
  SearchTerm: (state, searchWrd) => (state.Search = searchWrd)
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
  },
  searchTerm: ({ commit }, search) => {
    commit("SearchTerm", search);
    // eslint-disable-next-line
    console.log(search);
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
