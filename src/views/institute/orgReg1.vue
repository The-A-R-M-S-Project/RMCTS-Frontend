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
              <label for="name">Name</label
              ><input
                class="form-control item"
                v-model="institute.name"
                name="name"
                v-validate="'required|alpha_spaces|max:25'"
                :class="{ input: true, 'is-danger': errors.has('name') }"
                type="text"
                id="name"
              />
              <span
                v-show="errors.has('name')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("name") }}</span
              >
            </div>
            <div class="form-group">
              <label for="password">Password</label
              ><input
                class="form-control item"
                v-model="institute.password"
                v-validate="'required|max:25|min:8|upCase|number'"
                name="password"
                :class="{ 'is-danger': errors.has('password') }"
                ref="password"
                type="password"
                id="password"
              />
              <i
                v-show="errors.has('email')"
                class="fa fa-warning"
                id="msg"
              ></i>
              <span
                v-show="errors.has('password')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("password") }}</span
              >
            </div>
            <div class="form-group">
              <label for="password"> Confirm Password</label
              ><input
                class="form-control item"
                type="password"
                id="password1"
                v-model="institute.confirmPassword"
                v-validate="'required|confirmed:password'"
                name="password_confirmation"
                :class="{ 'is-danger': errors.has('password_confirmation') }"
                data-vv-as="password"
              />
              <i
                v-show="errors.has('email')"
                class="fa fa-warning"
                id="msg"
              ></i>
              <span
                v-show="errors.has('password_confirmation')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("password_confirmation") }}</span
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label
              ><input
                v-model="institute.email"
                v-validate="'required|email'"
                class="form-control item"
                name="email"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                type="email"
                id="email"
                data-vv-as="email"
              />
              <i
                v-show="errors.has('email')"
                class="fa fa-warning"
                id="msg"
              ></i>
              <span
                v-show="errors.has('email')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("email") }}</span
              >
            </div>

            <button
              class="btn btn-primary"
              @click.prevent="validateBeforeSubmit"
              style="float: right"
              type="submit"
            >
              Next
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
        name: "",
        password: "",
        confirmPassword: "",
        email: ""
      }
    };
  },
  methods: {
    ...mapActions(["signup"]),
    onSubmit(e) {
      e.preventDefault();
      this.signup(this.institute).then(this.$router.push({ name: "signed-up" }));
    },
    validateBeforeSubmit(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.onSubmit(e);
          return;
        }

        alert("Fill in all necessary fields!");
      });
    }
  },
  created() {
    this.$validator.extend("upCase", {
      getMessage: () => "Must have atleast one uppercase character",
      validate: value => value.match(/[A-Z]/g) !== null
    });
    this.$validator.extend("number", {
      getMessage: () => "Must have atleast one number",
      validate: value => value.match(/[0-9]/g) !== null
    });
  }
};
</script>
