import axios from "axios";

/* eslint-disable */
const api = "https://rmcts-api.herokuapp.com";


//============================================================================================
//                            STATE
//============================================================================================
const state = {
  events: [],
  my_reservations: [],
  my_bookings: []
};


//============================================================================================
//                            GETTERS
//============================================================================================
const getters = {
  account_reservations: state => state.my_reservations,
  account_bookings: state => state.my_bookings
};


//============================================================================================
//                            MUTATIONS
//============================================================================================
const mutations = {
  my_reservations: (state, res)=>{
    state.my_reservations = res;
  },

  my_bookings: (state, res)=>{
    state.my_bookings = res
  }
}

//============================================================================================
//                            ACTIONS
//============================================================================================
const actions = {
  // Get account's reservations
  async myReservations({commit}){
    try{
    let reservations = await axios.get(`${api}/equipment/reservations`);
    reservations = reservations.data
    console.log(reservations)
    commit("my_reservations", reservations)
    }
    catch(error){
      console.log(error)
    }
  },

  // Get account's bookings
  async myBookings({commit}){
    try{
      let bookings = await axios.get(`${api}/bookings`)
      bookings = bookings.data
      console.log(bookings)
      commit("my_bookings", bookings)
    }
    catch(error){
      console.log(error.response)
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
