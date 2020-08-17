<template>
  <div class="main-display">
    <div class="row">
      <div class="col-3 side-nav">
        <SideNav />
      </div>
      <div class="col-9 mt-3 display-area">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-display {
  overflow-y: hidden;
  min-width: 1000px;
  //   overflow-x: scroll;
}
.display-area {
  height: 100vh;
  overflow: scroll;
}
.side-nav {
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
import SideNav from "@/components/individual/sideNav";
export default {
  name: "user",
  components: {
    SideNav
  }
};
</script>
