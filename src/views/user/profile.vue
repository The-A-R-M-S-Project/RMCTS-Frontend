<template>
  <div class="container profile">
    <h1 class="text-center text-info">Hi Username!</h1>
    <div class="row m-2">
      <div class="col-sm-6 equipment">
        <p class="text-center">
          My equipment
        </p>
        <router-link to="equipment" class="router-link">
          <div class="equipment-card router-link">
            <li class="fa fa-server icon"></li>
          </div>
        </router-link>
      </div>
      <div class="col-sm-6">
        <p class="text-center">
          Reservations
        </p>
        <router-link to="reservations">
          <div class="reservation-card">
            <i class="fa fa-calendar icon"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-12 activity mt-4">
        <p class="text-center m-2">
          activity table showing reservation for your equipment from other users
        </p>
        <div class="m-4 activity-table">
          <ActivityTable />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity {
  background-color: rgb(205, 216, 226);
  max-height: 70vh;
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
  height: 30vh;
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
  height: 30vh;
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
import ActivityTable from "@/components/User/ActivityTable";
export default {
  name: "user-profile",
  components: {
    ActivityTable
  }
};
</script>
