<template>
  <div class="card container">
    <section>
      <div class="row pt-5">
        <h3 class="greeting">About {{ user.username }}</h3>
        <router-link to="/institute/edit-profile"
          ><button class="edit-profile-link">edit profile</button></router-link
        >
      </div>
    </section>
    <section>
      <div class="container">
        <h4 class="pt-3">Details</h4>
        <table class="table">
          <tbody>
            <tr>
              <th>Company Name</th>
              <td>{{ user.username }}</td>
            </tr>
            <tr>
              <th>Company Website</th>
              <td>{{ user.websiteURL }}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{{ user.address }}</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>{{ user.contact }}</td>
            </tr>
            <tr>
              <th>Registered Email</th>
              <td>{{ email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container">
        <h4 class="pt-3">About Company</h4>
        <hr />
        <p>
          {{ user.bio }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: "individual-profile",
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.$store.dispatch("profile");
    this.user = this.$store.getters.user_profile;
    this.email = JSON.parse(localStorage.getItem("user")).email;
    console.log(this.user);
  }
};
</script>

<style lang="scss" scoped>
$padding: 20px;
// .container {
//   // overflow-x: scroll;
// }
p {
  text-align: justify;
}
h4 {
  text-align: center;
  width: 100%;
}
.edit-profile-link {
  position: absolute;
  right: 65px;
}
section {
  padding: $padding;
}
.greeting {
  position: absolute;
  left: 65px;
}
</style>
