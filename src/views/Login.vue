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
              <input class="form-control" type="password" id="password" />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkbox" />
                <label class="form-check-label" for="checkbox"
                  >Remember me</label
                >
              </div>
            </div>
            <router-link to="/user/profile" class="login">
              <button
                class="btn btn-primary btn-block"
                type="submit"
                data-dismiss="modal"
              >
                Log In
              </button>
            </router-link>
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
  data: () => ({}),
  methods: {}
};
</script>
