<template>
  <div class="bookings">
    <div v-if="account_bookings.length == 0" class="none">
      <p style="font-size: 22px;">You currently have no bookings</p>
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
            <th scope="col">Customer</th>
          </tr>
        </thead>
        <tbody v-for="reservation in account_bookings" :key="reservation._id">
          <Booked
            :title="reservation.title"
            :duration="duration(reservation)"
            :url="imageURL(reservation)"
            :dateScheduled="reservation.start.split('T')[0]"
            :timeScheduled="reservation.start.split('T')[1] + 'hrs (EAT)  '"
            :reservation="reservation"
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
  height: 72vh;
  margin: 2vh;
}
.icon {
  color: rgb(240, 135, 135);
}
</style>

<script>
/* eslint-disable */

import Booked from "@/components/Institute/booked";
import Bookeditems from "@/services/user-bookings.js";
import equipmentList from "@/services/equipment-service.js";
import { mapGetters } from "vuex";


export default {
  name: "reservations-list",
  data() {
    return {
      Activity: [1],
      url: "",
      date: "",
      time: "",
      customer: {}
    };
  },
  components: {
    Booked,
  },
  computed: {
    ...mapGetters(["account_bookings"]),
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

    imageURL(reservation) {
      this.$http
        .get(`https://rmcts-api.herokuapp.com/equipment/item/${reservation.itemId}`)
        .then((res) => {
          this.url = res.data[0].imageURL;
        });
      return this.url;
    }
  },
  created() {
    // get all reservations
    this.$store.dispatch("myBookings");
    // console.log(this.account_bookings)
  },
};
</script>
