<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="view">
    <!-- central navigation component -->
    <Navbar />
    <div class="m-2" style="border-top: solid white 85px;">
      <div class="p-4">
        <Search />
      </div>
      <div class="">
        <div class="row d-flex justify-content-center">
          <div
            v-for="equipment in allEquipment"
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
/* eslint-disable */
import Navbar from "@/components/User/Navigation";
import Search from "@/components/User/Search";
import Equipment from "@/components/equipment";
import { mapGetters } from "vuex";

export default {
  name: "catalog",
  components: {
    Navbar,
    Search,
    Equipment
  },
  methods: {},
  computed: {
    ...mapGetters(["allEquipment", "searchWord"])
  },
  computed: mapGetters(["allEquipment"]),
  created() {
    this.catalogedEquipment();
  }
  // created() {
  //   this.catalogedEquipment;
  // }
};
</script>
