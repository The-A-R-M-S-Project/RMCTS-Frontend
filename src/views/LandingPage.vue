<template>
  <div>
    <Navbar1 />
    <div>
      <main class="page landing-page">
        <!-- section 1 -->
        <section
          class="clean-block clean-hero overlay"
          style="color:rgba(9, 162, 255, 0.85);"
        >
          <div class="text">
            <div class="input-group mb-3 pt-5">
              <input
                type="search"
                placeholder="Type here..."
                class="form-control"
              />
            </div>
            <button class="btn btn-outline-light btn-lg" type="button">
              Search
            </button>
            <h2>Search your equipment/institute here</h2>
            <p>
              Need resources, services or equipment to facilitate your research?
            </p>
          </div>
        </section>
        <!-- section 2 -->
        <section class="clean-block clean-info dark">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">More Information</h2>
              <p></p>
            </div>
            <div class="row align-items-center">
              <div class="col-md-6">
                <img class="img-thumbnail" src="@/assets/img/tech/image6.jpg" />
              </div>
              <div class="col-md-6">
                <h3>Register with Us!</h3>
                <div class="getting-started-info">
                  <p>
                    To fully access the system services, register as a user or
                    organisation.
                  </p>
                </div>
                <router-link to="register">
                  <button class="btn btn-outline-primary btn-lg" type="button">
                    Register Now
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </section>
        <!-- copyright section -->
        <footer class="">
          <div class="page-footer dark footer-copyright footer">
            <p>RMCTS© 2019 Copyright All rights reserved</p>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar1 from "@/components/navbar1.vue";
export default {
  name: "index",
  components: {
    Navbar1
  }
};
</script>

<style lang="css">
.overlay {
  background-image: url("~@/assets/img/tech/image5.jpg");
}
.footer {
  color: white;
  padding-bottom: 3px;
  text-align: center;
}
</style>
