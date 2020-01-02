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
            <div class="input-group mb-3">
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
                <button class="btn btn-outline-primary btn-lg" type="button">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <!-- section 3 -->
        <section class="clean-block features">
          <div class="container">
            <div class="block-heading">
              <h2 class="text-info">Features</h2>
              <p>
                The system offers these features to you, ranging from search for
                equipment, registering the equipment
              </p>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-5 feature-box">
                <i class="icon-target icon"></i>
                <h4>Search for Equipment</h4>
                <p>
                  Get details on or Pin point the equipment you need for
                  research from a number of institutions or organiisation
                </p>
              </div>
              <div class="col-md-5 feature-box">
                <i class="icon-pencil icon"></i>
                <h4>Register the Equipment</h4>
                <p>
                  Are you an organistion or institute? Register as an
                  organisation to share equipment with users around Uganda.
                </p>
              </div>
              <div class="col-md-5 feature-box">
                <i class="icon-notebook icon"></i>
                <h4>Schedule or Book Equipment</h4>
                <p>
                  Pick an appropriate time for you to use the equipment or
                  resources. You can book a lab or room with the equipment.
                </p>
              </div>
              <div class="col-md-5 feature-box">
                <i class="icon-refresh icon"></i>
                <h4>All Browser Compatibility</h4>
                <p>Acsess the system from anywhere using any browser</p>
              </div>
            </div>
          </div>
        </section>
        <!-- copyright section -->
        <footer class="page-footer dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <h5>Get started</h5>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Sign up</a></li>
                  <li><a href="#">Downloads</a></li>
                </ul>
              </div>
              <div class="col-sm-3">
                <h5>About us</h5>
                <ul>
                  <li><a href="#">Company Information</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Reviews</a></li>
                </ul>
              </div>
              <div class="col-sm-3">
                <h5>Support</h5>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Help desk</a></li>
                  <li><a href="#">Forums</a></li>
                </ul>
              </div>
              <div class="col-sm-3">
                <h5>Legal</h5>
                <ul>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
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

<style>
.overlay {
  background-image: url("~@/assets/img/tech/image5.jpg");
}
</style>
