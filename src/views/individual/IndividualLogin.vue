<template>
  <div>
    <div id="bg"></div>
    <div v-if="loading">
      <Loader />
    </div>
    <main class>
      <section class="main-body">
        <div class="form-card">
          <form>
            <div class="text-center">
              <p class="text-info">LOGIN</p>
            </div>
            <div class="form-group">
              <input
                placeholder="Email"
                v-validate="'required|email'"
                v-model="email"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                name="email"
                class="form-control item field"
                type="email"
                id="email"
              />
              <span v-show="errors.has('email')" class="help is-danger" id="msg"
                ><small>{{ errors.first("email") }}</small></span
              >
            </div>
            <div class="form-group">
              <input
                placeholder="password"
                class="form-control item field"
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
                ><small>{{ errors.first("password") }}</small></span
              >
            </div>
            <small v-if="store_auth" id="msg">Wrong password or email</small>
            <div class="buttons">
              <div class="login">
                <button
                  class="btn btn-primary login"
                  @click="handleSubmit"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div class>
                <router-link to="face-auth" style="text-decoration: none">
                  <button class="btn btn-success mt-3">
                    Use face recognition
                  </button>
                </router-link>
              </div>
            </div>
          </form>
        </div>
        <p>
          Don't have an account?
          <router-link to="/individual-signup">Signup</router-link>
        </p>
      </section>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/loader";

export default {
  name: "individual-login",
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
      ...mapGetters({ store_loading: "loading"}),
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
      ...mapActions(["individualLogin"]),
      // method to handle login submission
      handleSubmit(e) {
        e.preventDefault();
        this.loading = true;
        this.individualLogin({ email: this.email, password: this.password })
          .then(() => {
            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              this.$router.push({ name: "individual-profile" });
            }
          })
          .catch(err => {console.log(err)});
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
  padding-top: 10px;
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
.field {
  border-radius: 10px;
}
.form-card {
  max-width: 300px;
  height: auto;
  max-height: 400px;
  margin: auto;
  // margin-top: 20vh;
  padding: $padding;
  box-shadow: 2px 5px 10px gray;
  border-radius: $radius;
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
/* .login:hover {
  text-decoration: none;
}
#msg {
  color: red;
  font-size: 14px;
} */
</style>
