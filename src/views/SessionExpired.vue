<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="height: 100vh;"
  >
    <h5 class="text-danger">
      Your session has exipred, please <router-link to="/">login</router-link>
    </h5>
  </div>
</template>

<script>
export default {
  name: "session-expired",
  created() {
    localStorage.clear();
    sessionStorage.clear();
  }
};
</script>

<style></style>
