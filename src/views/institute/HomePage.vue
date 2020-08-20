<template>
  <div class="profile ml-5 mr-5">
    <h1 class="text-center text-info">{{ user.username }}</h1>
    <div class="row p-2">
      <div class="col-6 equipment">
        <p class="text-center">
          My equipment
        </p>
        <router-link to="equipment" class="router-link">
          <div class="equipment-card router-link">
            <li class="fa fa-server icon"></li>
          </div>
        </router-link>
      </div>
      <div class="col-6">
        <p class="text-center">
          My Reservations
        </p>
        <router-link to="/institute/reservations">
          <div class="reservation-card">
            <i class="fa fa-calendar icon"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-12 activity mt-4">
        <p class="text-center m-2">
          Bookings Activity
        </p>
        <div class="m-4 activity-table">
          <ActivityCalendar />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity {
  background-color: rgb(245, 248, 250);
  min-height: 40vh;
}
.equipment-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    rgb(248, 188, 120),
    rgb(255, 243, 14)
  );
  height: 25vh;
  cursor: pointer;
  box-shadow: 10px 10px 20px #a3a3a3;
}
.equipment-card:hover {
  box-shadow: 10px 10px 20px #4d4c4c;
}
.reservation-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    rgb(79, 50, 248),
    rgb(195, 0, 255)
  );
  height: 25vh;
  cursor: pointer;
  box-shadow: 10px 10px 20px #a3a3a3;
}
.reservation-card:hover {
  box-shadow: 10px 10px 20px #4d4c4c;
}
.icon {
  color: white;
  font-size: 70px;
}
.router-link:hover {
  text-decoration: none;
}
.activity-table {
  overflow: scroll;
}
</style>

<script>
import ActivityCalendar from "@/components/Institute/activityCalendar";

export default {
  name: "institute-homepage",
  components: {
    ActivityCalendar
  },
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
};
</script>
