<template>
  <div class="view">
    <!-- central navigation component -->
    <!-- <Navbar /> -->
    <div style="min-width: 1000px;">
      <div class="row">
        <div class="col-3">
          <SideNav />
        </div>
        <div class="col-9 landing pt-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view {
  overflow-y: hidden;
  overflow-x: scroll;
}
.landing {
  height: 100vh;
  min-height: 600px;
  overflow-y: scroll;
}
</style>

<script>
// import Navbar from "@/components/User/Navigation";
import SideNav from "@/components/User/SideNav";
export default {
  name: "user",
  components: {
    // Navbar,
    SideNav
  }
};
</script>
