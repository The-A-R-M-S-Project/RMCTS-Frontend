<template>
  <div class="alert-component d-flex justify-content-center">
    <div
      class="alert alert-danger d-flex align-items-center justify-content-center"
      role="alert"
    >
      <p>
        Your email has not been verified, click
        <a style="color: blue; cursor: pointer;">here</a> to request
        verification token resend
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "not-verified"
};
</script>

<style scoped>
.alert-component {
  position: fixed;
  width: 100%;
  top: 10px;
}
</style>
