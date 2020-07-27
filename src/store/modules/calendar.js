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
  },
  AddReservation: (state, reservation) => {
    state.Events.push(reservation);
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
  async createEvent(reserve, { title, start, end, begin, stop, details }) {
    const event = (
      await axios.post("http://localhost:3000/events", {
        title,
        start,
        end,
        begin,
        stop,
        details
      })
    ).data;
    reserve.commit("UpdateEvents", event);
  },
  //edit event
  async editEvent({ id, title, start, end, begin, stop, details }) {
    const updatedEvent = await axios.put(
      `http://localhost:3000/events"/${this.$route.params.id}`,
      {
        id,
        title,
        start,
        end,
        begin,
        stop,
        details
      }
    );
    updatedEvent.commit();
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
