<template>
  <div class="bookings">
    <h1 style="text-align: center; background-color: grey; color: white">
      Bookings
    </h1>
    <div v-if="Activity.length == 0" class="none">
      <p style="font-size: 22px;">You currently have no bookings</p>
      <i
        class="fa fa-exclamation-circle icon"
        aria-hidden="true"
        style="font-size: 25vw;"
      ></i>
    </div>
    <div v-else></div>
  </div>
</template>

<style>
.none {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 2px rgb(9, 162, 255);
  border-radius: 15px;
  height: 72vh;
  margin: 2vh;
}
.icon {
  color: rgb(240, 135, 135);
}
</style>

<script>
export default {
  name: "user-activity",
  data() {
    return {
      Activity: []
    };
  }
};
</script>
