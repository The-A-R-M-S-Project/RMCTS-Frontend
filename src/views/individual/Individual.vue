<template>
  <div class="view">
    <div class="row">
      <div class="col-3 side-nav">
        <SideNav />
      </div>
      <div class="col-9"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view {
  /* overflow: hidden;
  overflow-x: auto;
  width: 100vw; */
  min-width: 1000px;
  overflow-x: scroll;
}
.side-nav {
  position: fixed;
  top: 0px;
  bottom: 0px;
}
.landing {
  height: 100vh;
  min-height: 600px;
  overflow-y: scroll;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

<script>
// import Navbar from "@/components/User/Navigation";
import SideNav from "@/components/individual/SideNav";
export default {
  name: "user",
  components: {
    // Navbar,
    SideNav
  }
};
</script>
