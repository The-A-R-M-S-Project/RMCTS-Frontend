<template>
  <div>
    <div class="container">
      <FullCalendar
        :header="{
          left: 'title',
          center: 'timeGridDay, timeGridWeek, dayGridMonth',
          right: 'prev today next'
        }"
        :weekends="false"
        :plugins="calendarPlugins"
        :events="allEvents"
        :selectable="true"
        :editable="false"
        @select="handleDateClick"
        @eventClick="handleClick"
        @eventResize="handleResize"
        @eventDrop="cancelEvent"
      />
      <modals-container />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
</style>

<script>
/* eslint-disable */
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventModal from "./editEventModal";
import ReservationForm from "./reservationForm";

// State Management
import { mapGetters } from "vuex";
// , mapActions
export default {
  name: "calendar",
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin,
      ],
      allEvents: [],
    };
  },
  methods: {
    handleResize(drag) {
      this.$store.commit("UpdateEvents", drag.event);
    },
    cancelEvent() {},
    handleDateClick(tap) {
      let currentDate = new Date().getTime();
      if (tap.start < currentDate) {
        alert("Date has passed");
      } else {
        this.$modal.show(
          ReservationForm,
          {
            text: "From the component",
            event: tap.event,
          },
          {
            height: "auto",
            width: "50%",
          }
        );
      }
    },

    handleClick(clck) {
      this.$modal.show(
        EventModal,
        {
          text: "From the component",
          event: clck.event,
        },
        {
          height: "auto",
          width: "50%",
        },
        {
          // draggable: true,
        }
      );
    },
  },
  computed: {
    // ...mapGetters(["allEvents"])
  },
  async created() {
    const item = await this.$http.get(
      `https://rmcts-api.herokuapp.com/equipment/item/${this.$route.params.id}`
    );
    // console.log(item)
    this.allEvents = item.data[0].reservations;

    // console.log(this.allEvents)
  },
};
</script>
