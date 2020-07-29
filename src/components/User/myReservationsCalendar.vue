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
        :events="account_reservations"
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
.container {
  background-color: #abe2f860;
}
</style>

<script>
/* eslint-disable */
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventModal from "@/components/User/viewMyReservation";

// State Management
import { mapGetters } from "vuex";

export default {
  name: "my-reservations-calendar",
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
      console.log(click.event.extendedProps);
      // const reservation = this.account_reservations.filter(x => x._id == clic)
      this.$modal.show(
        EventModal,
        {
          text: "From the component",
          event: this.account_reservations.filter(
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
    ...mapGetters(["account_reservations"]),
  },
  created() {
    this.$store.dispatch("myReservations");
  },
};
</script>
