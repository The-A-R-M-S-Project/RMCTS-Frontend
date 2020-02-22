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
              ><input class="form-control item" type="text" id="name" />
            </div>
            <div class="form-group">
              <label for="password">Password</label
              ><input class="form-control item" type="password" id="password" />
            </div>
            <div class="form-group">
              <label for="password"> Confirm Password</label
              ><input
                class="form-control item"
                type="password"
                id="password1"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label
              ><input class="form-control item" type="email" id="email" />
            </div>
            <div class="form-group">
              <label for="tel">Contact</label
              ><input class="form-control item" type="tel" />
            </div>
            <!-- <div class="form-group">
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
            </div> -->
            <!-- <div v-if="selected == 'Organisation/Company'">
              <div class="form-group">
                <label for="address">Address</label
                ><input class="form-control item" type="address" />
              </div>
              <div class="form-group">
                <label for="address">Website</label
                ><input class="form-control item" type="website" />
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
            </div> -->
            <router-link to="/user/profile">
              <button class="btn btn-primary btn-block" type="submit">
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
  data() {
    return {
      selected: ""
    };
  },
  methods: {}
};
</script>
