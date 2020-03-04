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
                v-validate="'required|email'"
                v-model="email"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                name="email"
                class="form-control item"
                type="email"
                id="email"
              />
              <span v-show="errors.has('email')" class="help is-danger">{{
                errors.first("email")
              }}</span>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                class="form-control item"
                v-model="password"
                v-validate="'required|max:25|min:8'"
                name="password"
                :class="{ 'is-danger': errors.has('password') }"
                type="password"
                ref="password"
                id="password"
              />
              <span v-show="errors.has('password')" class="help is-danger">{{
                errors.first("password")
              }}</span>
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
                class="btn btn-primary btn-block"
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
</style>

<script>
export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    validateBeforeLogin() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // es-lint-disable-next-line
          this.$router.push("/user/profile");
          return;
        }
        alert("Fill in all necessary fields!");
      });
    }
  }
};
</script>
