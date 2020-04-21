<template>
  <div>
    <div v-if="loading">
      <Loader />
    </div>
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
            <small v-if="store_auth" id="msg">Wrong password or email</small>
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
import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/loader";

export default {
  name: "login",
  components: {
    Loader
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({ store_loading: "loading", store_auth: "auth_failed" }),
    // create setter for loading computed property
    loading: {
      get() {
        return this.store_loading;
      },
      set(loading) {
        return loading;
      }
    }
  },
  methods: {
    // load actions from store
    ...mapActions(["login"]),
    // method to handle login submission
    handleSubmit(e) {
      e.preventDefault();
      this.loading = true;
      this.login({ email: this.email, password: this.password })
        .then(() => {
          if (localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn");
            this.$router.push({ name: "user-profile" });
          }
        })
        .catch(err => {});
    },
    // method to validate fields before submission
    validateBeforeLogin(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          // es-lint-disable-next-line
          this.handleSubmit(e);
          return;
        }
      });
    }
  }
};
</script>
