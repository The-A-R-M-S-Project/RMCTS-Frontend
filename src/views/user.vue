<template>
  <div>
    <!-- central navigation component -->
    <Navbar />
    <div class="container fluid">
      <div class="row">
        <div class="col-sm-3">
          for side nav an soooooooooooooooooooooooooooo on
        </div>
        <div class="col-sm-9">for main body (wider)</div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import Navbar from "@/components/User/Navigation";
export default {
  name: "user",
  components: {
    Navbar
  }
};
</script>
