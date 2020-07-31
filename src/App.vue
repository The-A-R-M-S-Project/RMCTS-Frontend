<template>
  <div id="app">
    <div v-if="loading">
      <Loader />
    </div>
    <router-view />
  </div>
</template>

<script>
import Loader from "./components/loader";
import { mapGetters } from "vuex";

export default {
  components: {
    Loader
  },
  computed: {
    ...mapGetters(["loading"])
  }
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
