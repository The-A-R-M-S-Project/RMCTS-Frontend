<template>
  <div class="mt-3">
    <h3 class="text-success p-4">Click on date to schedule reservation ...</h3>
    <div>
      <Calendar />
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/User/Calendar";
export default {
  components: {
    Calendar
  }
};
</script>

<style scoped></style>
