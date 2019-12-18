<template>
  <div class="container profile">
    <h1 class="text-center">Hi Username!</h1>
    <div class="row m-2">
      <div class="col-sm-6 equipment">
        <p class="text-center">My equipment card</p>
      </div>
      <div class="col-sm-6 schedules">
        <p class="text-center">My schedules card</p>
      </div>
    </div>
    <div class="row m-2 activity">
      <div class="col-12">
        <p class="text-center">
          activity table showing schedules for your equipment from other users
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.profile {
  background-color: pink;
}
.equipment {
  background-color: burlywood;
  height: 30vh;
}
.schedules {
  background-color: mediumslateblue;
  height: 30vh;
}
.activity {
  background-color: rgb(155, 243, 243);
  height: 60vh;
}
</style>

<script>
export default {
  name: "user-profile"
};
</script>
