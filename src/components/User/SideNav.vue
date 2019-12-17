<template>
  <div class="sidenav">
    <div class="card mb-3">
      <img src="..." class="card-img-top" alt="profile picture" />
      <div class="card-body">
        <h5 class="card-title">username</h5>
        <p class="card-text">user@gmail.com</p>
      </div>
    </div>
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link nav-dropdown-toggle" href="#">
            <i class="nav-icon cui-puzzle"></i>activity
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link nav-link-success"
            href="https://coreui.io"
          >
            <i class="fa-fa-server"></i>
            equipment
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to>
            <i class="nav-icon fa-fa-clock"></i>schedule
          </router-link>
        </li>
      </ul>
    </nav>
    <button
      class="btn btn-secondary btn-lg btn-block button ph-2"
      type="button"
    >
      <router-link class="logout-button" to="/">logout</router-link>
    </button>
  </div>
</template>

<style>
.sidenav {
  background-color: teal;
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
}
</style>

<script>
export default {
  name: "SideNav"
};
</script>
