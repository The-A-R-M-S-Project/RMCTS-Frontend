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
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventModal from "@/components/User/editEventModal";

// State Management
import { mapGetters } from "vuex";

export default {
  name: "my-reservations-calendar",
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
    cancelEvent() {},
    handleClick(click) {
      this.$modal.show(
        EventModal,
        {
          text: "From the component",
          event: click.event
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
    ...mapGetters([""])
  },
  created() {
    this.$store.dispatch("");
  }
};
</script>
