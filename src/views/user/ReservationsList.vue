<template>
  <div class="bookings">
    <div v-if="account_reservations.length == 0" class="none">
      <p style="font-size: 22px;">You currently have no reservations</p>
      <i
        class="fa fa-exclamation-circle icon"
        aria-hidden="true"
        style="font-size: 25vw;"
      ></i>
    </div>

    <div class="table-responsive" v-else>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Item Name</th>
            <th scope="col">Duration</th>
            <th scope="col">Time Scheduled</th>
            <th scope="col">Date Scheduled</th>
          </tr>
        </thead>
        <tbody
          v-for="reservation in account_reservations"
          :key="reservation._id"
        >
          <Booked
            :duration="duration(reservation)"
            :itemID="reservation.itemId"
            :dateScheduled="reservation.start.split('T')[0]"
            :timeScheduled="reservation.start.split('T')[1] + 'hrs (EAT)  '"
          />
        </tbody>
      </table>
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
  min-height: 82vh;
  margin: 2vh;
}
.icon {
  color: rgb(240, 135, 135);
}
</style>

<script>
/* eslint-disable */

import Booked from "@/components/User/booked";
import { mapGetters } from "vuex";

export default {
  name: "reservations-list",
  data() {
    return {
      Activity: [1],
      url: "",
      // duration: "",
      date: "",
      time: "",
    };
  },
  components: {
    Booked,
  },
  computed: {
    ...mapGetters(["account_reservations"]),
  },
  methods: {
    duration(reservation) {
      const d1 = new Date(reservation.start);
      const d2 = new Date(reservation.end);

      //calculate hours
      let hrs = Math.floor((d2 - d1) / 3600000);
      //calculate time
      let mins = ((d2 - d1) % 3600000) / 60000;
      return hrs + "hrs " + mins + "mins";
    },

  },
  created() {
    // get all reservations
    this.$store.dispatch("myReservations");
  },
};
</script>
