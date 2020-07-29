<template>
  <div class="alert-component">
    <div class="alert alert-success " role="alert">
      <div class="d-flex align-items-center justify-content-center">
        <form class="form-inline">
          <p>Your email has not been verified, please enter email:</p>
          <input
            v-validate="'required|email'"
            v-model="email"
            :class="{ input: true, 'is-danger': errors.has('email') }"
            name="email"
            type="email"
            id="email"
            class="form-control item ml-1 mr-1"
          />
          <p>
            and click
            <a
              @click.prevent="validateBeforeSubmit"
              class="pl-1 pr-2"
              style="color: blue; cursor: pointer;"
              >here</a
            >
            to request verification token resend
          </p>
        </form>
      </div>
      <div
        v-show="errors.has('email')"
        class="help is-danger d-flex align-items-center justify-content-center"
        id="msg"
      >
        {{ errors.first("email") }}
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "not-verified",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleRedirect(e) {
      e.preventDefault();
      console.log(this.email);
    },
    // method to validate fields before submission
    validateBeforeSubmit(e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // es-lint-disable-next-line
          this.handleRedirect(e);
          return;
        }
      });
    },
  },
};
</script>

<style scoped>
.alert-component {
  position: fixed;
  width: 100%;
  top: 10px;
}
.email {
  border-radius: 5px;
}
</style>
