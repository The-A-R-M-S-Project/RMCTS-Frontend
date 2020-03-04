<template>
  <div>
    <main class="login-page page registration-page">
      <section class="clean-block clean-form dark overlay1">
        <div class="container">
          <div class="block-heading"></div>
          <form>
            <div class="text-center">
              <h2 class="text-info">Login In</h2>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                class="form-control item"
                type="email"
                v-model="email"
                id="email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                class="form-control"
                type="password"
                v-model="password"
                id="password"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkbox" />
                <label class="form-check-label" for="checkbox"
                  >Remember me</label
                >
              </div>
            </div>
            <button
              class="btn btn-primary btn-block login"
              type="submit"
              data-dismiss="modal"
              @click="handleSubmit"
            >
              Log In
            </button>
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
    }
  }
};
</script>
