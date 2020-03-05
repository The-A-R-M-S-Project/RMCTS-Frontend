<template>
  <div>
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar"
    >
      <div class="container">
        <a class="navbar-brand logo" href="#">RMCTS</a
        ><button
          data-toggle="collapse"
          class="navbar-toggler"
          data-target="#navcol-1"
        >
          <span class="sr-only">Toggle navigation</span
          ><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" role="presentation">
              <a class="nav-link">
                <router-link to="login">
                  Login
                </router-link>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link">
                <router-link to="register">Register</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- modal -->
    <!-- <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
// import Login from "@/views/Login";
export default {
  name: "navbar1",
  components: {
    // Login
  }
};
</script>
<style scoped>
.na-col {
  color: rgb(9, 128, 255);
}
</style>
