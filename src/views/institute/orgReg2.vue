<template>
  <div class="auth-form">
    <main class="page registration-page">
      <section class="clean-block clean-form dark overlay1">
        <div class="container">
          <form>
            <div class="text-center">
              <h2 class="text-info">Registration</h2>
            </div>
            <div class="form-group">
              <label for="tel">Contact</label
              ><input
                class="form-control item"
                v-model="institute.contact"
                name="contact"
                v-validate="'required|numeric'"
                :class="{ input: true, 'is-danger': errors.has('contact') }"
                type="text"
              />
              <i
                v-show="errors.has('contact')"
                class="fa fa-warning"
                id="msg"
              ></i>
              <span
                v-show="errors.has('contact')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("contact") }}</span
              >
            </div>

            <div class="form-group">
              <label for="address">Address</label
              ><input
                class="form-control item"
                name="address"
                v-validate="address"
                v-model="institute.address"
                :class="{ input: true, 'is-danger': errors.has('address') }"
                type="address"
              />
              <span
                v-show="errors.has('address')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("address") }}
              </span>
            </div>

            <div class="form-group">
              <label for="address">Website</label
              ><input
                class="form-control item"
                name="url"
                v-model="institute.url"
                v-validate="url"
                :class="{ input: true, 'is-danger': errors.has('url') }"
                type="text"
              />
              <i v-show="errors.has('url')" class="fa fa-warning"></i>
              <span v-show="errors.has('url')" class="help is-danger">{{
                errors.first("url")
              }}</span>
            </div>
            <button
              class="btn btn-primary btn-block"
              @click.prevent="validateBeforeSubmit"
              type="submit"
            >
              Sign Up
            </button>
            <router-link to="/institute-login">
              <p>Already have an account?</p>
            </router-link>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.overlay1 {
  background-image: url("~@/assets/img/tech/image8.jpg");
  height: 100vh;
}
#msg {
  color: red;
  font-size: 14px;
}
</style>

<script>
/* eslint-disable */
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      institute: {
        address: "",
        url: "",
        contact: ""
      }
    };
  },
  methods: {
    ...mapActions(["orgSignup"]),
    onSubmit(e) {
      e.preventDefault();
      this.orgSignup(this.institute).then(this.$router.push({ name: "signed-up" }));
    },
    validateBeforeSubmit(e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          this.onSubmit(e);
          return;
        }

        alert("Fill in all necessary fields!");
      });
    },
  },
  created() {
    this.$validator.extend("upCase", {
      getMessage: () => "Must have atleast one uppercase character",
      validate: (value) => value.match(/[A-Z]/g) !== null,
    });
    this.$validator.extend("number", {
      getMessage: () => "Must have atleast one number",
      validate: (value) => value.match(/[0-9]/g) !== null,
    });
  },
};
</script>
