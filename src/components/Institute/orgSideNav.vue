<template>
  <div class="sidenav">
    <nav class="sidebar-nav fixed">
      <div class="pt-3">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center card-header">
            <router-link to="">
              <img
                :src="
                  user.profileImage ||
                    'https://image.freepik.com/free-icon/organization_318-1631.jpg'
                "
                class="mt-3 card-img-top img-fluid profile-image"
                alt="profile
            picture"
                style="border-radius: 300px;"
              />
            </router-link>
            <h5 class="mt-3 p-0">{{ user.username }}</h5>
            <p class="p-1">{{ user.email }}</p>
          </li>
          <router-link
            class="sidenav-button list-group-item"
            to="/institute/profile"
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
            to="/institute/equipment"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[
                currentRoute.includes('institute/equipment')
                  ? 'button-active'
                  : ''
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
            to="/institute/bookings"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[
                currentRoute.includes('bookings') ? 'button-active' : ''
              ]"
              type="button"
            >
              <div class="row">
                <div class="col-3">
                  <li class="fa fa-clock-o"></li>
                </div>
                <div class="col-9 text-left">
                  <span style="font-size: smaller;">Customer Bookings</span>
                </div>
              </div>
            </button>
          </router-link>
          <router-link
            class="sidenav-button list-group-item"
            to="/institute/reservations"
          >
            <button
              class="btn btn-primary btn-lg btn-block ph-2"
              :class="[
                currentRoute.includes('reservations') ? 'button-active' : ''
              ]"
              type="button"
            >
              <div class="row">
                <div class="col-3">
                  <li class="fa fa-clock-o"></li>
                </div>
                <div class="col-9 text-left">
                  <span style="font-size: smaller;">My Reservations</span>
                </div>
              </div>
            </button>
          </router-link>
          <router-link
            class="sidenav-button list-group-item"
            to="/institute/catalog"
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
  min-height: 600px;
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
.btn-lg {
  font-size: 16px;
}
</style>

<script>
/* eslint-disable */
import { mapActions } from "vuex";
import api from "../../api";

export default {
  name: "SideNav",
  data() {
    return {
      user: {}
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      if (localStorage.getItem("jwt") != null) {
        api
          .post(`users/logout`)
          .then(res => {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push("/");
          })
          .catch(err => {
            console.log(err.response.data.message);
          });
      }
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
};
</script>
