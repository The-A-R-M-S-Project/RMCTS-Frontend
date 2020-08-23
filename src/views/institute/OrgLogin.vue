<template>
  <div>
    <div id="bg"></div>
    <div v-if="store_verification">
      <NotVerified />
    </div>
    <div v-if="loading">
      <Loader />
    </div>
    <main>
      <section class="main-body">
        <div class="login-card">
          <form>
            <div class="text-center">
              <h2 class="text-info">LOGIN</h2>
            </div>
            <div class="form-group">
              <input
                placeholder="Email"
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
              <input
                placeholder="Password"
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
            <small v-if="store_auth" id="msg">Wrong password or email</small>
            <div class="buttons">
              <div class="login">
                <button
                  class="btn btn-primary login"
                  @click.prevent="validateBeforeLogin"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        <p>
          Don't have an account?
          <router-link to="/institute-register">Signup</router-link>
        </p>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$colors: (
  primary: #09a2ff,
  green: #1fb56f,
  text: #707070
);

@function color($thecolor) {
  @return map-get($colors, $thecolor);
}

$radius: 20px;
$padding: 15px;

.text-info {
  padding-top: 15px;
  padding-bottom: $padding;
  font-size: 20px;
  color: color(primary);
  font-weight: bold;
}
.main-body {
  padding-top: 20vh;
  p {
    text-align: center;
    padding-top: 30px;
    color: color(text);
  }
}
input {
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}
.login-card {
  box-shadow: 2px 5px 10px gray;
  border-radius: $radius;
  padding: $padding;
  margin: auto;
  height: auto;
  max-height: 400px;
  max-width: 30rem;
}
.btn {
  text-align: center;
  width: 200px;
  font-size: 15px;
  border-radius: $radius;
}
.buttons {
  text-align: center;
  padding-top: $padding;
}
.btn-primary {
  background-color: color(primary);
  border: 0px;
}
.btn-success {
  background-color: color(green);
  border: 0px;
}
.overlay1 {
  background-image: url("~@/assets/img/tech/image8.jpg");
  height: 100vh;
}
#msg {
  color: rgb(70, 6, 6);
  font-size: 11px;
}
.form-group {
  padding-top: 10px;
  padding-bottom: 5px;
}
</style>

<script>
/* eslint-disable no-console */

import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/loader";
import NotVerified from "@/components/notVerified";

export default {
  name: "instituteLogin",
  components: {
    Loader,
    NotVerified
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters({
      store_loading: "loading",
      store_auth: "auth_failed",
      store_verification: "account_verified"
    }),
    ...mapGetters({ store_loading: "loading" }),
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
    ...mapActions(["instituteLogin"]),
    // method to handle login submission
    handleSubmit(e) {
      e.preventDefault();
      this.loading = true;
      this.instituteLogin({ email: this.email, password: this.password })
        .then(() => {
          if (localStorage.getItem("jwt") != null) {
            this.$emit("loggedIn");
            this.$router.push({ name: "institution-profile" });
          }
        })
        .catch(err => {
          console.log(err);
        });
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
