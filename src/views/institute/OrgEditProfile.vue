<template>
  <div class="m-5 px-5">
    <form>
      <div class="form-group">
        <label for="exampleTextarea1">Bio</label>
        <textarea
          class="form-control"
          id="exampleTextarea1"
          placeholder="Brief description of who you are"
          rows="3"
          v-model="user.bio"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="institution">First Name</label>
        <input
          placeholder=""
          class="form-control"
          id="input-firstname"
          v-model="user.firstname"
        />
      </div>
      <div class="form-group">
        <label for="input-title">Last Name</label>
        <input
          placeholder="e.g. Lecturer, Student"
          class="form-control"
          id="input-lastname"
          v-model="user.lastname"
        />
      </div>
      <div class="form-group">
        <label for="input-department">Username</label>
        <input
          placeholder="e.g. Lecturer, Student"
          class="form-control"
          id="input-department"
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label for="input-district">Location</label>
        <input
          placeholder="e.g Makindye, Kampala, Uganda"
          class="form-control"
          id="input-district"
          v-model="user.address"
        />
      </div>
      <div class="form-group">
        <label for="input-contact">Contact</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">+256</div>
          </div>
          <input
            placeholder="70000000"
            class="form-control"
            id="input-contact"
            v-validate="'required|max:9|min:9'"
            name="contact"
            :class="{ 'is-danger': errors.has('contact') }"
            v-model="contact"
          />
        </div>
      </div>
    </form>
    <div class="text-center">
      <button
        type="submit"
        @click="validateBeforeUpdate"
        class="btn btn-success"
      >
        Update
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "individual-editprofile",
  data() {
    return {
      contact: "",
      user: {},
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
     await this.$store.dispatch("updateProfile", {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        bio: this.user.bio,
        contact: `${this.contact.length==9? `+256${this.contact}`:""}`,
        address: this.user.address,
        username: this.user.username
      });
     await this.$store.dispatch("profile")
     await this.$router.push({name: "individual-profile"})
    },
    validateBeforeUpdate(e) {
        this.$validator.validateAll().then(result => {
          if (result) {
            // es-lint-disable-next-line
            this.handleSubmit(e)
            return;
          }
        });
      }
  },
  created() {
    // this.$store.dispatch("login")
    this.user = this.$store.getters.user_profile
    if (this.user.contact.length > 4) {
      this.contact = this.user.contact.substring(4);
    }
  },
};
</script>

<style></style>
