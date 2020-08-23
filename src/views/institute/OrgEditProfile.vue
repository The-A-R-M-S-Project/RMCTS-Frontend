<template>
  <div class="m-5 px-5">
    <form>
      <div class="form-group">
        <label for="exampleTextarea1">Company Description</label>
        <textarea
          class="form-control"
          id="exampleTextarea1"
          placeholder="Brief description of company"
          rows="3"
          v-model="user.bio"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="institutionName">Username</label>
        <input
          placeholder="Company Name"
          class="form-control"
          id="institutionName"
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label for="institutionWebsite">Company Website</label>
        <input
          placeholder="e.g.  www.companyname.com"
          class="form-control"
          id="institutionWebsite"
          v-model="user.websiteURL"
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
export default {
  name: "institution-editprofile",
  data() {
    return {
      contact: "",
      user: {}
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      await this.$store.dispatch("updateProfile", {
        websiteURL: this.user.websiteURL,
        bio: this.user.bio,
        contact: `${this.contact.length == 9 ? `+256${this.contact}` : ""}`,
        address: this.user.address,
        username: this.user.username
      });
      await this.$store.dispatch("profile");
      await this.$router.push({ name: "institution-profile" });
    },
    validateBeforeUpdate(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.handleSubmit(e);
          return;
        }
      });
    }
  },
  created() {
    this.user = this.$store.getters.user_profile;
    if (this.user.contact.length > 4) {
      this.contact = this.user.contact.substring(4);
    }
  }
};
</script>

<style></style>
