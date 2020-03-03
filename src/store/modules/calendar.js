import axios from "axios";
import events from "../../services/reservations";

const state = {
  Events: events
};

const getters = {
  allEvents: state => state.Events
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
