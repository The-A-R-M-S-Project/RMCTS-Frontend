const state = {
  Events: []
};

const getters = {
  allEvents: state => state.Events
};

const mutations = {
  SetEvents: (state, reservations) => state.Events.push(reservations),
  UpdateEvents: (state, { id, title, start, end }) => {
    let index = state.Events.findIndex(evnt => evnt.id == id);

    state.Events[index].title = title;
    state.Events[index].start = start;
    state.Events[index].end = end;
  }
};

const actions = {};

export default {
  state,
  getters,
  actions,
  mutations
};
