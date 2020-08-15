<template>
  <div class="sidenav">
    <nav class="sidebar-nav fixed">
      <div class="pt-3">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center card-header">
            <img
              :src="
                user.profileImage ||
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNIvsoEpZeocbdx9ocsYo9DO1zG4OfEf093dUn78Us553niinuw&s'
              "
              class="card-img-top img-fluid profile-image"
              alt="profile picture"
              style="border-radius: 300px;"
              height=""
            />
            <h5 class="m-3">{{ user.name || "username" }}</h5>
            <!-- <p class="p-1">{{ user.email }}</p> -->
          </li>
          <router-link
            class="sidenav-button list-group-item"
            to="/individual/reservations"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[
                currentRoute.includes('individual/reservations')
                  ? 'button-active'
                  : ''
              ]"
              type="button"
            >
              <div class="row">
                <div class="col-3">
                  <li class="fa fa-clock-o"></li>
                </div>
                <div class="col-9 text-left">
                  <span style="font-size: smaller;">reservations</span>
                </div>
              </div>
            </button>
          </router-link>
          <router-link
            class="sidenav-button list-group-item"
            to="/individual/profile"
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
            to="/individual/catalog"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[currentRoute.includes('catalog') ? 'button-active' : '']"
              type="button"
            >
              <div class="row">
                <div class="col-3">
                  <li class="fa fa-database"></li>
                </div>
                <div class="col-9 text-left">
                  <span style="font-size: smaller;">Catalog</span>
                </div>
              </div>
            </button>
          </router-link>
        </ul>
      </div>
    </nav>
    <button
      class="btn btn-secondary btn-lg btn-block button ph-2 logout-button"
      type="submit"
      @click="handleLogout"
    >
      <span style="font-size: smaller;">logout</span>
    </button>
  </div>
</template>

<style scoped>
.sidenav {
  background-color: rgb(9, 128, 255);
  height: 100vh;
  min-height: 500px;
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
  font-size: 20pt;
}
.card {
  background-color: rgb(9, 128, 255);
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
  object-fit: cover;
}
.card-header {
  background-color: rgb(9, 160, 255);
}
button {
  border-radius: 0px;
}
</style>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'
export default {
  name: "SideNav",
  data(){
    return {
      user: {}
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout(){
      // this.logout().then(() =>  this.$router.push({ name: "index" })).catch((err)=> console.log(err))
    }
  },
  created(){
    // this.user = JSON.parse(localStorage.getItem("user"))
  }
};
</script>
