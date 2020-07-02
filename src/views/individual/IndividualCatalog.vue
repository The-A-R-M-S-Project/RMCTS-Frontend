<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="view">
    <!-- central navigation component -->
    <div class="">
      <div class="p-4" style="text-align: center; background-color: white">
        <Search />
      </div>
      <div class="">
        <div
          v-if="allEquipment.length > 0"
          class="row d-flex justify-content-center"
        >
          <div
            v-for="equipment in allEquipment"
            :key="equipment._id"
            class="col-md-4 m-3"
            style="max-width: 300px"
          >
            <Equipment
              :title="equipment.title"
              :location="equipment.location"
              :url="equipment.imageURL"
              :_id="equipment._id"
            />
          </div>
        </div>
        <div
          v-else
          class="mt-5 container d-flex justify-content-center align-items-center no-match"
        >
          No item matches your input
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.no-match {
  background-color: aliceblue;
  color: rgb(248, 79, 79);
  font-size: 30px;
  height: 67vh;
  border-radius: 30px;
}
</style>

<script>
import Search from "@/components/User/Search";
import Equipment from "@/components/equipment";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "catalog",
  components: {
    Search,
    Equipment
  },
  methods: {
    ...mapActions(["catalogedEquipment"])
  },
  computed: mapGetters(["allEquipment"]),
  mounted() {
    this.catalogedEquipment();
  }
};
</script>
