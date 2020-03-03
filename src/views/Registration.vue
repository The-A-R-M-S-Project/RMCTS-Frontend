<template>
  <div>
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
                name="name"
                v-model="name"
                v-validate="'required|alpha'"
                :class="{ input: true, 'is-danger': errors.has('name') }"
                type="text"
                id="name"
              />
              <i v-show="errors.has('name')" class="fa fa-warning"></i>
              <span v-show="errors.has('name')" class="help is-danger">{{
                errors.first("name")
              }}</span>
            </div>
            <div class="form-group">
              <label for="password">Password</label
              ><input
                class="form-control item"
                v-validate="required"
                name="password"
                :class="{ 'is-danger': errors.has('password') }"
                ref="password"
                type="password"
                id="password"
              />
              <span v-show="errors.has('password')" class="help is-danger">{{
                errors.first("password")
              }}</span>
            </div>
            <div class="form-group">
              <label for="password"> Confirm Password</label
              ><input
                class="form-control item"
                type="password"
                id="password1"
                v-validate="'required|confirmed:password'"
                name="password_confirmation"
                :class="{ 'is-danger': errors.has('password_confirmation') }"
                data-vv-as="password"
              />
              <span
                v-show="errors.has('password_confirmation')"
                class="help is-danger"
                >{{ errors.first("password_confirmation") }}</span
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label
              ><input
                v-validate="'required|email'"
                class="form-control item"
                name="email"
                v-model="email"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                type="email"
                id="email"
                data-vv-as="email"
              />
              <i v-show="errors.has('email')" class="fa fa-warning"></i>
              <span v-show="errors.has('email')" class="help is-danger">{{
                errors.first("email")
              }}</span>
            </div>
            <div class="form-group">
              <label for="tel">Contact</label
              ><input
                class="form-control item"
                name="contact"
                v-model="contact"
                v-validate="'required|numeric'"
                :class="{ input: true, 'is-danger': errors.has('contact') }"
                type="text"
              />
              <i v-show="errors.has('contact')" class="fa fa-warning"></i>
              <span v-show="errors.has('contact')" class="help is-danger">{{
                errors.first("contact")
              }}</span>
            </div>
            <div class="form-group">
              <label for="userRegisterOption">Registering As:</label>
              <select
                class="form-control"
                id="userRegisterOption"
                v-model="selected"
              >
                <option>Organisation/Company</option>
                <option>Student</option>
                <option>Lecturer</option>
              </select>
            </div>
            <div v-if="selected == 'Organisation/Company'">
              <div class="form-group">
                <label for="address">Address</label
                ><input class="form-control item" type="address" />
              </div>
              <div class="form-group">
                <label for="address">Website</label
                ><input
                  class="form-control item"
                  name="url"
                  v-validate="url"
                  :class="{ input: true, 'is-danger': errors.has('url') }"
                  type="text"
                />
                <i v-show="errors.has('url')" class="fa fa-warning"></i>
                <span v-show="errors.has('url')" class="help is-danger">{{
                  errors.first("url")
                }}</span>
              </div>
            </div>
            <div v-if="selected == 'Student'">
              <div class="form-group">
                <label for="name">University/Institute</label
                ><input class="form-control item" type="text" />
              </div>
            </div>
            <div v-if="selected == 'Lecturer'">
              <div class="form-group">
                <label for="name">University/Institute</label
                ><input class="form-control item" type="text" />
              </div>
            </div>
            <router-link to="/user/profile">
              <button
                class="btn btn-primary btn-block"
                @click.prevent="validateBeforeSubmit"
                type="submit"
              >
                Sign Up
              </button>
            </router-link>
            <router-link to="/">
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
}
</style>

<script>
export default {
  name: "Register",
  data: () => ({
    selected: "",
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    contact: "",
    address: ""
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert("You've been registered !");
          return;
        }

        alert("Correct the errors!");
      });
    }
  }
};
</script>
