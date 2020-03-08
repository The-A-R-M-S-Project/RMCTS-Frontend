<template>
  <div>
    <h2 class="text-center text-info">My equipment</h2>
    <nav>
      <div class="nav nav-tabs bg-secondary" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          ><li class="fa fa-list pt-2 pb-2"></li>
          All Equipment</a
        >
        <a
          class="nav-item nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
          ><li class="fa fa-plus pt-2 pb-2"></li>
          Add equipment</a
        >
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="content-area">
          <div
            class="m-2"
            v-for="equipment in myEquipment"
            :key="equipment._id"
          >
            <Equipment
              :title="equipment.title"
              :location="equipment.location"
              :url="equipment.imageURL"
              :description="equipment.description"
              :_id="equipment._id"
            />
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div class="content-area">
          <AddEquipment />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav-link.active{
  border-radius: 0px;
}
a{
  color: white;
}
a:hover{
  color: yellow;
  border-radius: 0px;
}
.content-area {
  min-height: 63vh;
  margin-top: 10px;
}
.active {
  border-bottom: 0px;
}
</style>

<script>
/* eslint-disable */
import Equipment from "@/components/User/Equipment.vue";
import AddEquipment from "@/components/User/AddEquipment.vue";
// import userEquipment from "@/services/user-equipment-service.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "user-equipment",
  components: {
    Equipment,
    AddEquipment
  },
  data() {
    return {
      // myEquipment
    };
  },
  computed: {
    ...mapGetters(["myEquipment"])
  },
  methods: {
    ...mapActions(["getEquipment"])
  },
  created(){
    this.getEquipment()
  }
};
</script>
