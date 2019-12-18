<template>
  <div>
    <!-- central navigation component -->
    <Navbar />
    <div class="container fluid">
      <div class="row">
        <div class="col-sm-3 pt-1 pl-4 pr-1">
          <SideNav />
        </div>
        <div class="col-sm-9 pt-1 pl-1 pr-2">
          <router-link />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

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
