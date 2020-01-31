<template>
  <div class="view">
    <!-- central navigation component -->
    <Navbar />
    <div class="m-2" style="border-top: solid white 85px;">
      <div class="p-4">
        <Search />
      </div>
      <div class=" container d-flex justify-content-center">
        <div class="row">
          <div
            v-for="equipment in equipmentList"
            :key="equipment._id"
            class="col-md-4 m-3"
            style="max-width: 340px"
          >
            <Equipment
              :title="equipment.title"
              :location="equipment.location"
              :url="equipment.imageURL"
              :_id="equipment._id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import Navbar from "@/components/User/Navigation";
import Search from "@/components/User/Search";
import Equipment from "@/components/equipment";
import equipmentList from "@/services/equipment-service.js";

export default {
  name: "catalog",
  components: {
    Navbar,
    Search,
    Equipment
  },
  data() {
    return {
      equipmentList
    };
  }
};
</script>
