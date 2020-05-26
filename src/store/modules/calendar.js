import axios from "axios";

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
  // isLoaded: state => !!state.Events.length
};

const actions = {
  // get event from db
  async getEvents(reservation) {
    const Events = (await axios.get("http://localhost:3000/events")).data;
    reservation.commit("setEvents", Events);
  },
  // addevent to db
  async createEvent(reserve, { title, start, end, begin, stop }) {
    const event = (
      await axios.post("http://localhost:3000/events", {
        title,
        start,
        end,
        begin,
        stop
      })
    ).data;
    reserve.commit("UpdateEvents", event);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
