<template>
  <div class="container">
    <section>
      <div class="row pt-5">
        <p class="greeting">Hi username</p>
        <router-link to="/inidvidual/edit-profile"
          ><span class="edit-profile-link">edit profile</span></router-link
        >
      </div>
    </section>
    <section>
      <div class="container">
        <h4 class="pt-3">Bio</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          praesentium alias minima quis provident autem asperiores beatae
          necessitatibus, maiores magni labore voluptates ullam nisi voluptas
          dolor illum doloremque excepturi deleniti!
        </p>
      </div>
      <div class="container">
        <h4 class="pt-3">Details</h4>
        <table class="table">
          <tbody>
            <tr>
              <th>Institution</th>
              <td>Makerere University</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>Student</td>
            </tr>
            <tr>
              <th>Department</th>
              <td>Electrical and Computer Engineering</td>
            </tr>
            <tr>
              <th>District</th>
              <td>Kampala</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>Male</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>+256782862788</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>user@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "individual-profile"
};
</script>

<style lang="scss" scoped>
$padding: 20px;
.container {
  // overflow-x: scroll;
}
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
