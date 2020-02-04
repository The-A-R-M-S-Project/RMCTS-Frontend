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
    <div class="container" v-else>
      <div v-for="bookings in Bookeditems" :key="bookings.equipment">
        <div
          v-for="equipment in equipmentList.filter(item =>
            bookings.equipment.includes(item._id)
          )"
          :key="equipment._id"
        >
          <Booked
            :title="equipment.title"
            :url="equipment.imageURL"
            :duration="bookings.duration"
            :dateScheduled="bookings.date_scheduled"
            :timeScheduled="bookings.time_scheduled"
          />
        </div>
      </div>
    </div>
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
import Booked from "@/components/User/booked";
import Bookeditems from "@/services/user-bookings.js";
import equipmentList from "@/services/equipment-service.js";
export default {
  name: "user-activity",
  data() {
    return {
      Activity: [1],
      Bookeditems,
      equipmentList
    };
  },
  components: {
    Booked
  }
};
</script>
