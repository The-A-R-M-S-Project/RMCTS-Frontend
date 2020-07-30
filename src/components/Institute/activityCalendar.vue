<template>
  <div>
    <div class="container">
      <FullCalendar
        :header="{
          left: 'title',
          right: 'prev today next'
        }"
        :weekends="false"
        :plugins="calendarPlugins"
        eventColor="#F9F98D"
        :events="account_bookings"
        :selectable="true"
        @eventClick="handleClick"
      />
      <!-- @select="handleDateClick" -->
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
import EventModal from "@/components/Institute/viewEventModal";

// State Management
import { mapGetters } from "vuex";

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
    };
  },
  methods: {
    cancelEvent() {},

    handleClick(click) {
      this.$modal.show(
        EventModal,
        {
          text: "From the component",
          event: this.account_bookings.filter(
            (x) => x._id == click.event.extendedProps._id
          )[0],
        },
        {
          height: "auto",
          width: "50%",
          adaptive: true,
          minWidth: 300,
        },
        {
          draggable: true,
        }
      );
    },
  },
  computed: {
    ...mapGetters(["account_bookings"]),
  },
  created() {
    this.$store.dispatch("myBookings");
  },
};
</script>
