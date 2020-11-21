/* eslint-disable no-console */
import api from "../../api";

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
  my_reservations: (state, res) => {
    state.my_reservations = res;
  },
  my_bookings: (state, res) => {
    state.my_bookings = res;
  }
};

//============================================================================================
//                            ACTIONS
//============================================================================================
const actions = {
  // Get account's reservations
  async myReservations({ commit }) {
    try {
      let reservations = await api.get(`equipment/reservations`);
      reservations = reservations.data;
      // console.log("reservations", reservations);
      commit("my_reservations", reservations);
    } catch (error) {
      console.log(error);
    }
  },

  // Get account's bookings
  async myBookings({ commit }) {
    try {
      let bookings = await api.get(`equipment/bookings`);
      bookings = bookings.data;
      console.log(bookings);
      commit("my_bookings", bookings);
    } catch (error) {
      console.log(error.response);
    }
  },
  // making reservation
  async addReservation({ commit }, data) {
    try {
      let res = await api.post(`equipment/reservation/${data[1]}`, data[0]);
      data = res.data;
      commit("updateCurrentItem", data);
    } catch (error) {
      console.log(error.response);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
