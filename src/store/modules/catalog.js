import axios from "axios";
// import equipmentList from "@/services/equipment-service.js";
/* eslint-disable */

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
  // setEquipment: state => {
  //   state.filteredEquipment = state.equipment.filter(equip =>
  //     equip["title"].toLowerCase().includes(state.Search.toLowerCase())
  //   );
  // },
  // SearchTerm: (state, searchWrd) => (state.Search = searchWrd),

  UpdateEquipment: (state, filteredEquipment) => state.equipment = filteredEquipment
};
const actions = {
  catalogedEquipment: async ({ commit }) => {
    try {
      let response = await axios.get(`${api}/catalog-default`);
      // console.log(response.data);
      await commit("UpdateEquipment", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  searchTerm: ({ commit }, search) => {
    // commit("SearchTerm", search);
    axios.post(`${api}/search`, {search: search}).then(
      res => {
        console.log(res.data)
        console.log(search)
        commit("UpdateEquipment", res.data)
      }
    )
    // eslint-disable-next-line
    // console.log(word);
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
