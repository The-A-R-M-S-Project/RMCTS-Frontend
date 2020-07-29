<template>
  <div
    class="container a d-flex flex-column justify-content-center align-items-center text-center"
  >
    <div class="row">
      <h2>A verification token has been sent to {{ email }}</h2>
    </div>
    <div class="row">
      <p>
        Visit <span style="color: green;">{{ email }}</span> to verify this
        account
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "token-sent",
  data() {
    return {
      email: ""
    };
  },
  created() {
    this.email = this.$route.params.email;
  }
};
</script>

<style>
.a {
  height: 100vh;
}
</style>
