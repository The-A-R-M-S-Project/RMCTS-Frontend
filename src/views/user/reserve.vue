<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div style="border-top: solid white 95px;">
      <Calendar />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/User/Navigation";
import Calendar from "@/components/User/Calendar";
export default {
  components: {
    Calendar,
    Navbar
  }
};
</script>

<style scoped></style>
