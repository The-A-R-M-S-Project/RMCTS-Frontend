<template>
  <div class="view">
    <!-- central navigation component -->
    <Navbar />
    <div class="m-2" style="border-top: solid white 85px;">
      <Search />
      <h1 class="text-center">Catalog will go here</h1>
    </div>
  </div>
</template>

<style>
.view {
}
</style>

<script>
import Navbar from "@/components/User/Navigation";
import Search from "@/components/User/Search";
export default {
  name: "catalog",
  components: {
    Navbar,
    Search
  }
};
</script>
