<template>
  <div class="view">
    <!-- central navigation component -->
    <Navbar />
    <div class="m-2">
      <div class="row" style="border-top: solid white 85px;">
        <div class="col-sm-3">
          <SideNav />
        </div>
        <div class="col-sm-9 mv-3 landing">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view {
  overflow: hidden;
}
.landing {
  height: 87vh;
  overflow-y: scroll;
}
</style>

<script>
import Navbar from "@/components/User/Navigation";
import SideNav from "@/components/User/SideNav";
export default {
  name: "user",
  components: {
    Navbar,
    SideNav
  }
};
</script>
