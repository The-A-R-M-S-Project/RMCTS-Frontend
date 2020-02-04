<template>
  <div>
    <!-- central navigation  -->
    <Navbar />
    <div style="margin-top: 13vh">
      <div class="breadcrumb">
        <router-link class="pr-1 link" to="/catalog">catalog</router-link>/
        <router-link
          class="pl-2 pr-2 current link"
          :to="{ name: 'details', params: { id: id } }"
          >item details</router-link
        >
      </div>
      <div class="card-1 pt-5">
        <h3 class="p-2 text-center">Details</h3>
        <!-- upper -->
        <div class="section">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-md-5 d-flex align-items-center">
                <img :src="details.imageURL" alt="Image can't be loaded" />
              </div>

              <div class="col-md-7">
                <div class="card-body">
                  <h4>{{ details.title }}</h4>
                  <hr />
                  <p class="card-text text-justify">
                    {{ details.description }}
                  </p>
                  <hr />
                  <p class="font-weight-lighter" style="color: grey">
                    {{ details.location }}
                  </p>
                  <div class="buttons">
                    <router-link class="mr-3" to="/make-reservation/:id">
                      <button type="button" class="btn btn-success">
                        Make reservations
                      </button>
                    </router-link>
                    <router-link to>
                      <button type="button" class="btn btn-primary" disabled>
                        Visit website
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title text-center">
                Contact Organisation/Facility
              </h5>
              <p>To: owner@example.com</p>
              <p>From: user@gmail.com</p>
              <textarea
                class="form-control mt-4"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
              <div class="submit">
                <router-link to="" class="btn btn-primary">Send</router-link>
              </div>
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
.card-1 {
  margin-top: 50px;
  margin-left: 10vw;
  margin-right: 10vw;
}
img {
  width: 30vw;
  height: 50vh;
  object-fit: cover;
}
.submit {
  text-align: center;
  padding: 10px;
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
  }
};
</script>
