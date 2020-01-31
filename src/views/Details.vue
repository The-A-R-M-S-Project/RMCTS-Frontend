<template>
  <div>
    <!-- central navigation  -->
    <Navbar />
    <div style="margin-top: 13vh">
      <div class="breadcrumb">
        <router-link class="pr-1 link" to="/catalog">catalog </router-link>/
        <router-link
          class="pl-2 pr-2 current link"
          :to="{ name: 'details', params: { id: id } }"
        >
          item</router-link
        >
      </div>
      <div class="card">
        <!-- upper -->
        <div>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-md-5">
                <img src alt="Image can't be loaded" />
              </div>

              <div class="col-md-7">
                <div class="card-body">
                  <h4 class="card-title">Details</h4>
                  <h5>{{ details.title }}</h5>

                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <!-- <router-link class="btn btn-primary" to="">
                  <button type="button" class=" btn-primary"></button>
                  </router-link>-->
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Contact Organisation/Facility</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.breadcrumb {
  position: fixed;
  z-index: 2;
  width: 100%;
}
.current {
  background: rgb(207, 245, 137);
  border-radius: 2px;
}
.link:hover {
  text-decoration: none;
}
.card {
  margin-top: 50px;
}
</style>
<script>
import equipmentList from "@/services/equipment-service.js";
import Navbar from "@/components/User/Navigation";

export default {
  name: "details",
  components: {
    Navbar
  },
  data() {
    return {
      id: null,
      details: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.details = equipmentList.filter(item => item._id === this.id)[0];
    // console.log(this.details);
  },

  props() {}
};
</script>
