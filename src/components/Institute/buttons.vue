<template>
  <div>
    <button class="btn btn-warning" @click="navigatePrev" type="button">
      Previous
    </button>
    <button class="btn btn-info" @click="navigateNext" type="button">
      {{ NxtBtnTxt() }}
    </button>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "buttons",
  data() {
    return {};
  },
  methods: {
    NxtBtnTxt() {
      if (this.$route.name == "last-step") {
        return "Register";
      }
      return "Next";
    },
    navigateNext() {
      if (this.$route.name == "first-step") {
        this.$router.push("/institute-register/last-step");
      }
    },
    navigatePrev() {
      if (this.$router.name == "last-step") {
        this.$router.push("/institute-register/first-step");
      }
    }
  }
};
</script>
