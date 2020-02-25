<template>
  <div>
    <div class="card container">
      <div class=" container card">
        <FullCalendar
          :header="{
            left: 'title',
            center: 'timeGridDay, timeGridWeek, dayGridMonth',
            right: 'prev today next'
          }"
          :plugins="calendarPlugins"
          :events="reservations"
          :selectable="true"
        />
      </div>
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
import reservations from "@/services/reservations.js";

// State Management
import { mapGetters } from "vuex";
// , mapActions
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
      ],
      reservations
    };
  },
  methods: {
    handleDateClick(tap) {
      alert(tap.date);
    }
    // ...mapActions([fetchEvents])
  },
  computed: mapGetters(["allEvents"]),
  created() {
    this.fetchEvents();
  }
};
</script>
