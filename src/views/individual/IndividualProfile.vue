<template>
  <div class="container">
    <section>
      <div class="row pt-5">
        <p class="greeting">Hi {{ user.username }}</p>
        <router-link to="/individual/edit-profile"
          ><span class="edit-profile-link">edit profile</span></router-link
        >
      </div>
    </section>
    <section>
      <div class="container">
        <h4 class="pt-3">Bio</h4>
        <hr />
        <p>
          {{ user.bio }}
        </p>
      </div>
      <div class="container">
        <h4 class="pt-3">Details</h4>
        <table class="table">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{{ user.firstname }}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{{ user.lastname }}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{{ user.username }}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{{ user.address }}</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>{{ user.contact }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ email }}</td>
            </tr>
          </tbody>
        </table>
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
    this.$store
      .dispatch("profile")
      .then(() => (this.user = this.$store.getters.user_profile));
    this.email = JSON.parse(localStorage.getItem("user")).email;
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
