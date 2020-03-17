<template>
  <div>
    <!-- central navigation  -->
    <Navbar />
    <div style="margin-top: 13vh">
      <div class="breadcrumb">
        <router-link class="pr-1 link" to="/catalog">catalog</router-link>/
        <router-link
          class="pl-2 pr-2 current link"
          :to="{
            name: 'itemDetails[0]',
            params: { id: this.$route.params.id }
          }"
          >item details</router-link
        >
      </div>
      <div class="card-1 pt-5">
        <h3 class="p-2 text-center">details</h3>
        <!-- upper -->
        <div class="section">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-md-5 d-flex align-items-center">
                <img
                  class="image-fluid"
                  :src="itemDetails[0].imageURL"
                  alt="Image can't be loaded"
                />
              </div>

              <div class="col-md-7">
                <div class="card-body">
                  <h4>{{ itemDetails[0].title }}</h4>
                  <hr />
                  <p class="card-text text-justify">
                    {{ itemDetails[0].description }}
                  </p>
                  <hr />
                  <p class="font-weight-lighter" style="color: grey">
                    {{ itemDetails[0].location }}
                  </p>
                  <div class="buttons">
                    <router-link class="m-3" to="/make-reservation">
                      <button type="button" class="btn btn-success">
                        Make reservations
                      </button>
                    </router-link>
                    <router-link class="m-3" to="">
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
          <div class="card mt-3 mb-4">
            <div class="card-body">
              <h5 class="card-title text-center">
                Contact Organisation/Facility
              </h5>
              <p>To: {{ itemDetails[1].ownerEmail }}</p>
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
  width: 100%;
  height: 280px;
  object-fit: cover;
}
.submit {
  text-align: center;
  padding-top: 10px;
}
.buttons {
  text-align: center;
}
</style>
<script>
/* eslint-disable */
import equipmentList from "@/services/equipment-service.js";
import Navbar from "@/components/User/Navigation";

export default {
  name: "item-details",
  components: {
    Navbar
  },
  data() {
    return {
      // _id: null,
      itemDetails: [
        {
          title: "",
          location: "",
          imageURL: "",
          description: "",
          userId: "",
          createdAt: "",
          updatedAt: ""
        },
        {
          ownerName: "",
          ownerEmail: "",
          ownerContact: ""
        }
      ]
    };
  },
  methods: {},
  created() {
    const id = this.$route.params.id;
    this.$http.get(`http://localhost:3000/item/${id}`).then(res => {
      this.itemDetails = res.data;
    });
  }
};
</script>
