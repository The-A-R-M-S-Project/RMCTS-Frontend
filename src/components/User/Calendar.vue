<template>
  <div>
    <div class="container card">
      <FullCalendar
        defaultView="dayGridMonth"
        :plugins="calendarPlugins"
        :events="reservations"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
</style>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import reservations from "@/services/reservations.js";

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [dayGridPlugin],
      reservations
    };
  },
  methods: {
    handleDateClick(tap) {
      alert(tap.date);
    }
  }
};
</script>
