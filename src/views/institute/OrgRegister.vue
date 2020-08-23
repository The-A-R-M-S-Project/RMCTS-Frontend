<template>
  <div>
    <div id="bg"></div>
    <div v-if="loading">
      <Loader />
    </div>
    <main>
      <section class="main-body">
        <div v-if="error" class="p-3" style="text-align: center">
          <p class="text-danger" v-if="error">{{ errorMessage }}</p>
        </div>
        <div class="reg-card">
          <form>
            <div class="text-center">
              <h2 class="text-info">SIGNUP</h2>
            </div>
            <div class="form-group">
              <input
                placeholder="Company Name"
                class="form-control item"
                v-model="username"
                name="name"
                v-validate="'required|max:25'"
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
              <input
                placeholder="Email"
                v-model="email"
                v-validate="'required|email'"
                class="form-control item"
                name="email"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                type="email"
                id="email"
                data-vv-as="email"
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
                v-validate="'required|max:25|min:8|upCase|number'"
                name="password"
                :class="{ 'is-danger': errors.has('password') }"
                ref="password"
                type="password"
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
              <input
                placeholder="Confirm Password"
                class="form-control item"
                type="password"
                id="password1"
                v-model="passwordConfirm"
                v-validate="'required|confirmed:password'"
                name="password_confirmation"
                :class="{
                  'is-danger': errors.has('password_confirmation')
                }"
                data-vv-as="password"
              />
              <span
                v-show="errors.has('password_confirmation')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("password_confirmation") }}</span
              >
            </div>
            <div class="form-group">
              <input
                placeholder="Contact"
                class="form-control item"
                v-model="contact"
                name="contact"
                v-validate="'required|numeric'"
                :class="{ input: true, 'is-danger': errors.has('contact') }"
                type="text"
              />
              <span
                v-show="errors.has('contact')"
                class="help is-danger"
                id="msg"
                >{{ errors.first("contact") }}</span
              >
            </div>

            <div class="form-group">
              <input
                placeholder="Website URL"
                class="form-control item"
                name="url"
                v-model="url"
                v-validate="url"
                :class="{ input: true, 'is-danger': errors.has('url') }"
                type="text"
              />
              <span v-show="errors.has('url')" class="help is-danger">{{
                errors.first("url")
              }}</span>
            </div>

            <div class="form-group">
              <input
                placeholder="Address"
                class="form-control item"
                name="address"
                v-validate="address"
                v-model="address"
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

            <div class="buttons">
              <div class="login">
                <button
                  class="btn btn-primary login"
                  @click="validateBeforeSignup"
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
        <p>
          Already have an account?
          <router-link to="/institute-login">Login</router-link>
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
input {
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}
.reg-card {
  box-shadow: 2px 5px 10px gray;
  border-radius: $radius;
  // width: 27rem;
  padding: $padding;
  margin: auto;
  height: auto;
  max-height: 460px;
  max-width: 27rem;
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
</style>

<script>
/* eslint-disable no-console */

import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/loader";
export default {
  name: "insitution-register",
  components: { Loader },
  data() {
    return {
      username: "",
      password: "",
      passwordConfirm: "",
      email: "",
      contact: "",
      address: "",
      url: "",
      role: "institution",
      error: false,
      errorMessage: ""
    };
  },
  methods: {
    ...mapActions(["instituteSignup"]),
    handleSubmit(e) {
      e.preventDefault();
      this.loading = true;
      this.instituteSignup({
        email: this.email,
        password: this.password,
        username: this.username,
        contact: this.contact,
        address: this.address,
        role: this.role
      })
        .then(res => {
          console.log("response", res.status);
          if (res.status === 400) {
            this.errorMessage = res.data.msg;
            this.error = true;
          } else {
            this.$router.push({
              name: "token-sent",
              params: { email: this.email }
            });
          }
        })
        .catch(err => {
          console.log("error", err);
        });
    },
    validateBeforeSubmit(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.handleSubmit(e);
          return;
        }
        alert("Fill in all necessary fields!");
      });
    }
  },
  computed: {
    ...mapGetters({ store_loading: "loading", store_auth: "auth_failed" }),
    ...mapGetters({ store_loading: "loading" }),
    loading: {
      get() {
        return this.store_loading;
      },
      set(loading) {
        return loading;
      }
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
