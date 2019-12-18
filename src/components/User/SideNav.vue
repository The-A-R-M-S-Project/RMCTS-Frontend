<template>
  <div class="sidenav">
    <nav class="sidebar-nav fixed">
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center card-header">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNIvsoEpZeocbdx9ocsYo9DO1zG4OfEf093dUn78Us553niinuw&s"
              class="card-img-top img-fluid profile-image"
              alt="profile picture"
              style="border-radius: 100px;"
              height=""
            />
            <h5 class="p-0">username</h5>
            <p class="p-1">user@gmail.com</p>
          </li>
          <router-link
            class="sidenav-button list-group-item"
            to="/user/profile"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[currentRoute.includes('profile') ? 'button-active' : '']"
              type="button"
            >
              <div class="row">
                <div class="col-3">
                  <li class="fa fa-user"></li>
                </div>
                <div class="col-9 text-left">
                  <span style="font-size: smaller;">Profile</span>
                </div>
              </div>
            </button>
          </router-link>
          <router-link
            class="sidenav-button list-group-item"
            to="/user/equipment"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[
                currentRoute.includes('user/equipment') ? 'button-active' : ''
              ]"
              type="button"
            >
              <div class="row">
                <div class="col-3">
                  <li class="fa fa-server"></li>
                </div>
                <div class="col-9 text-left">
                  <span style="font-size: smaller;">Equipment</span>
                </div>
              </div>
            </button>
          </router-link>
          <router-link
            class="sidenav-button list-group-item"
            to="/user/activity"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[
                currentRoute.includes('user/activity') ? 'button-active' : ''
              ]"
              type="button"
            >
              <div class="row">
                <div class="col-3">
                  <li class="fa fa-clock-o"></li>
                </div>
                <div class="col-9 text-left">
                  <span style="font-size: smaller;">Activity</span>
                </div>
              </div>
            </button>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-link class="logout-button" to="/">
      <button
        class="btn btn-secondary btn-lg btn-block button ph-2"
        type="button"
      >
        <span style="font-size: smaller;">logout</span>
      </button>
    </router-link>
  </div>
</template>

<style>
.sidenav {
  background-color: rgb(9, 162, 255);
  height: 83vh;
  border-radius: 4px;
  position: relative;
  padding-top: 2px;
}
.button {
  position: absolute;
  bottom: 5px;
}
.container {
  margin: 0px;
  padding: 0px;
}
.logout-button {
  color: white;
  font-size: 20pt;
}
.logout-button:hover {
  color: white;
  text-decoration: none;
}
.card {
  background-color: rgb(9, 162, 255);
  max-height: 40vh;
  width: auto;
}
.list-group-item {
  padding: 0px;
}
.sidenav-button:hover {
  text-decoration: none;
}
.button-active {
  color: yellow;
}
.button-active:hover {
  color: yellow;
}
.profile-image {
  height: 30vh;
  width: auto;
}
.card-header {
  background-color: rgb(9, 162, 255);
}
</style>

<script>
export default {
  name: "SideNav",
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};
</script>
