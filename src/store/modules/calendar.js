import axios from "axios";
import events from "../../services/reservations";

const state = {
  events
};

const getters = {
  allEvents: state => state.events
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(events);

    commit("setEvents", response.data);
  }
};

const mutations = {
  setEvents: (state, reservations) => (state.events = reservations)
};

export default {
  state,
  getters,
  actions,
  mutations
};
