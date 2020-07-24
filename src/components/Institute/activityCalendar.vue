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
        :events="allEvents"
        :selectable="true"
        :editable="true"
        @eventClick="handleClick"
        @eventResize="handleResize"
        @eventDrop="cancelEvent"
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
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin
      ]
    };
  },
  methods: {
    handleResize(drag) {
      this.$store.commit("UpdateEvents", drag.event);
    },
    cancelEvent() {},
    handleDateClick(tap) {
      // eslint-disable-next-line no-console
      console.log(tap);
      this.$store.commit("SetEvents", {
        id: new Date().getTime(),
        title: "",
        start: tap.start,
        end: tap.end
        // allDay: tap.allDay
      });
    },
    handleClick(clck) {
      this.$modal.show(
        EventModal,
        {
          text: "From the component",
          event: clck.event
        },
        {
          height: "auto",
          width: "50%"
        },
        {
          draggable: true
        }
      );
    }
  },
  computed: {
    ...mapGetters(["allEvents"])
  },
  created() {
    this.$store.dispatch("getEvents");
  }
};
</script>
