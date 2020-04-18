<template>
  <div>
    <main class="login-page page registration-page">
      <section class="clean-block clean-form dark overlay1">
        <div class="container">
          <div class="block-heading"></div>
          <form>
            <div class="text-center">
              <h2 class="text-info">Log In</h2>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-validate="'required|email'"
                v-model="email"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                name="email"
                class="form-control item"
                type="email"
                id="email"
              />
              <span
                v-show="errors.has('email')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("email") }}</span
              >
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                class="form-control item"
                v-model="password"
                v-validate="'required|max:20|min:7'"
                name="password"
                :class="{ 'is-danger': errors.has('password') }"
                type="password"
                ref="password"
                id="password"
              />
              <span
                v-show="errors.has('password')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("password") }}</span
              >
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkbox" />
                <label class="form-check-label" for="checkbox"
                  >Remember me</label
                >
              </div>
            </div>
            <div class="login">
              <button
                class="btn btn-primary btn-block login"
                @click.prevent="validateBeforeLogin"
                type="submit"
                data-dismiss="modal"
              >
                Log In
              </button>
            </div>
            <div class="form-group" data-dismiss="modal">
              <router-link to="register">
                <p>Don't Have an account?</p>
              </router-link>
            </div>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.login:hover {
  text-decoration: none;
}
#msg {
  color: red;
  font-size: 14px;
}
</style>

<script>
/* eslint-disable */
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit(e) {
      e.preventDefault();
      console.log("here");
      if (this.password.length > 6) {
        this.login({ email: this.email, password: this.password }).then(() => {
          if (localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn");
            this.$router.push({ name: "user-profile" });
          }
        });
      } else {
        alert("check your login credentials and try again");
      }
    },
    validateBeforeLogin(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          // es-lint-disable-next-line
          this.handleSubmit(e);
          return;
        }
        alert("Fill in all necessary fields!");
      });
    }
  }
};
</script>
