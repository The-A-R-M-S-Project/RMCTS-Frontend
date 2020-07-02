<template>
  <div>
    <div>
      <main class="main">
        <!-- section 1 -->
        <section class="overlay">
          <div>
            <h4 class="logo">RMCTS</h4>
          </div>
          <div class="content">
            <p class="main-text">
              Need resources, services or equipment to facilitate your research?
            </p>
            <p class="description">
              Login as an Institution to add equipment for use. Or as an
              individual to reserve equipment for your research.
            </p>
            <div class="buttons">
              <router-link to="/institute/login">
                <button class="btn btn-danger btn-lg mr-3" type="button">
                  Institution
                </button>
              </router-link>
              <router-link to="/individual/login">
                <button class="btn btn-success btn-lg ml-3" type="button">
                  Individual
                </button>
              </router-link>
            </div>
          </div>
        </section>
        <!-- copyright section -->
        <footer class="footer-content d-flex justify-content-center">
          <p>The A.R.M.S Project© 2019 Copyright All rights reserved</p>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {}
};
</script>

<style lang="css">
.main {
  height: 100vh;
  background-image: url("~@/assets/img/tech/image5.jpg");
  background-size: cover;
}
h1,
h4,
p {
  color: white;
}
h4 {
  padding: 20px;
}
.main-text {
  font-size: 3.3vw;
  font-weight: 100;
  transform: scale(1, 1.5);
  margin-left: 15vw;
  margin-right: 15vw;
  padding-top: 6vw;
  text-align: center;
}
.overlay {
  position: absolute;
  bottom: 0px;
  top: 0px;
  background-color: rgba(9, 162, 255, 0.7);
  height: auto;
  width: 100%;
}
.footer-content {
  position: fixed;
  bottom: 0px;
  color: white;
  width: 100%;
  background-color: rgb(75, 75, 75);
}

.round {
  border-radius: 25px;
}
.description {
  padding: 4vw;
  text-align: center;
}
.buttons {
  width: 100%;
  text-align: center;
  padding-bottom: 6vw;
}
.btn {
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
  .main-text {
    font-size: 25px;
    font-weight: 100;
    transform: scale(1, 1.5);
    margin-left: 5vw;
    margin-right: 5vw;
    padding-top: 8vw;
    text-align: center;
  }
  .logo {
    font-size: 15px;
  }
  .description {
    padding-top: 15vw;
    font-size: 15px;
    padding-left: 3vw;
    padding-right: 3vw;
    text-align: center;
  }
  .btn {
    width: 120px;
    padding: 2px;
    font-size: 15px;
  }
  .footer-content {
    position: fixed;
    bottom: 0px;
    color: white;
    width: 100%;
    background-color: rgb(75, 75, 75);
    font-size: 15px;
  }
}
</style>
