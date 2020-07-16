<template>
  <div class="m-5">
    reservation calendar goes here
    <FullCalendar :plugins="calendarPlugins" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

export default {
  name: " reservation",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [
        DayGridPlugin,
        TimeGridPlugin,
        InteractionPlugin,
        ListPlugin
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
</style>
