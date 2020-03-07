<template>
  <div
    class="text-center"
    style=" display: table-cell; vertical-align: middle; height: 100vh; width: 100vw"
  >
    <h1>You've been signed up successfully</h1>
    <p>click here to <router-link to="/login">login</router-link></p>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "signedUp"
};
</script>
