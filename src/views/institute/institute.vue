<template>
  <div class="view">
    <div style="min-width: 1000px;">
      <div class="row">
        <div class="col-2">
          <SideNav />
        </div>
        <div class="col-10 landing pt-3">
          <!-- <router-view></router-view> -->
          <Body />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view {
  overflow-y: hidden;
  overflow-x: scroll;
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
import SideNav from "@/components/Institute/orgSideNav";
import Body from "@/views/institute/homepage";
export default {
  name: "institute",
  components: {
    SideNav,
    Body
  }
};
</script>
