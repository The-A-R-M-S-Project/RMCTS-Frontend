<template>
  <div>
    <main class="login-page">
      <section class="clean-form dark">
        <div class="container">
          <div class="block-heading">
            <h1 class="text-info text-center">Log In</h1>
          </div>
          <form>
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
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 6) {
        this.$http
          .post("http://localhost:3000/admins/login", {
            email: this.email,
            password: this.password
          })
          .then(res => {
            console.log(res)
            localStorage.setItem(
              "jwt",
              res.data.token
            );
            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              console.log("LoggedIn");
            } else {
              this.$router.push({ name: "user-profile"});
            }
          })
          .catch(err => {
            console.error(err);
            alert("login failed");
          });
      } else {
        alert("check your login credentials and try again");
      }
    }
  }
};
</script>
