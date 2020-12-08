<template>
  <div>
    <!-- central navigation  -->
    <!-- <Navbar /> -->
    <div style="">
      <div class="breadcrumb">
        <router-link class="pr-1 link" :to="`/${this.$user.role}/catalog`"
          >catalog</router-link
        >/
        <a class="pl-2 pr-2 current link btn-primary">item details</a>
      </div>
      <div class="card-1">
        <h3 class="p-2 text-center">details</h3>
        <!-- upper -->
        <div class="section">
          <div class="card">
            <div class="row no-gutters">
              <div class="col-md-5">
                <img
                  class="image-fluid mt-3"
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
                    <div class="m-3">
                      <router-link
                        :to="`/${this.$user.role}/make-reservation/${this.id}`"
                      >
                        <button
                          type="button"
                          class="btn btn-success"
                          data-toggle="modal"
                          data-target="#addEventsModal"
                        >
                          Make reservations
                        </button></router-link
                      >
                    </div>
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
  top: 0px;
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
  /* margin-left: 10vw;
  margin-right: 10vw; */
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
@media (max-width: 800px) {
  .breadcrumb {
    position: absolute;
    top: 0px;
    z-index: 2;
    width: 100%;
  }
}
</style>
<script>
/* eslint-disable */
// import Navbar from "@/components/User/Navigation";
import addEventsModal from "@/components/User/addEventModal";

export default {
  name: "item-details",
  components: {
    // Navbar,
    // eslint-disable-next-line vue/no-unused-components
    addEventsModal,
  },
  data() {
    return {
      // _id: null,
      id: "",
      itemDetails: [
        {
          title: "",
          location: "",
          imageURL: "",
          description: "",
          userId: "",
          createdAt: "",
          updatedAt: "",
        },
        {
          ownerName: "",
          ownerEmail: "",
          ownerContact: "",
        },
      ],
    };
  },
  created() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.$http
      .get(`https://rmcts-api.herokuapp.com/equipment/item/${this.id}`)
      .then((res) => {
        this.itemDetails = res.data;
      });
    // console.log(this.itemDetails);
  },
};
</script>
