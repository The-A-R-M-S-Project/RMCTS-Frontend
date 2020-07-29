import axios from "axios";

/* eslint-disable */
const api = "https://rmcts-api.herokuapp.com";


//============================================================================================
//                            STATE
//============================================================================================
const state = {
  events: [],
  my_reservations: []
};


//============================================================================================
//                            GETTERS
//============================================================================================
const getters = {
  account_reservations: state => state.my_reservations
};


//============================================================================================
//                            MUTATIONS
//============================================================================================
const mutations = {
  my_reservations: (state, res)=>{
    state.my_reservations = res;
  }
}

//============================================================================================
//                            ACTIONS
//============================================================================================
const actions = {
  // Get account's reservations
  async myReservations({commit}){
    try{
    let reservations = await axios.get(`${api}/reservations`);
    reservations = reservations.data
    console.log(reservations)
    commit("my_reservations", reservations)
    }
    catch(error){
      console.log(error)
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
