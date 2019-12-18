<template>
  <div class="sidenav">
    <nav class="sidebar-nav">
      <div class="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNIvsoEpZeocbdx9ocsYo9DO1zG4OfEf093dUn78Us553niinuw&s"
          height="auto"
          width="auto"
          class="card-img-top img-fluid"
          alt="profile picture"
          style="boarder-radius: 30px;"
        />
        <div class="card-body card">
          <h5 class="card-title text-center">username</h5>
          <p class="card-text text-center">user@gmail.com</p>
        </div>
        <ul class="list-group list-group-flush">
          <router-link
            class="sidenav-button list-group-item"
            :class="[
              currentRoute.includes('user/profile') ? 'button-active' : ''
            ]"
            to="/"
          >
            <button class="btn btn-primary btn-lg btn-block ph-2" type="button">
              <div class="row">
                <div class="col-3"><li class="fa fa-user"></li></div>
                <div class="col-9 text-left">Profile</div>
              </div>
            </button>
          </router-link>
          <router-link
            class="sidenav-button list-group-item"
            :class="[
              currentRoute.includes('user/equipment') ? 'button-active' : ''
            ]"
            to="/"
          >
            <button class="btn btn-primary btn-lg btn-block ph-2" type="button">
              <div class="row">
                <div class="col-3"><li class="fa fa-server"></li></div>
                <div class="col-9 text-left">Equipment</div>
              </div>
            </button>
          </router-link>
          <router-link
            class="sidenav-button list-group-item"
            :class="[
              currentRoute.includes('user/activity') ? 'button-active' : ''
            ]"
            to="/"
          >
            <button class="btn btn-primary btn-lg btn-block ph-2" type="button">
              <div class="row">
                <div class="col-3"><li class="fa fa-clock-o"></li></div>
                <div class="col-9 text-left">Activity</div>
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
        logout
      </button>
    </router-link>
  </div>
</template>

<style>
.sidenav {
  background-color: rgb(199, 255, 255);
  height: 86vh;
  border-radius: 4px;
  position: relative;
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
  color: orange;
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
