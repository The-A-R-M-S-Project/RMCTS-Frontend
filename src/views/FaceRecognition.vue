<template>
  <div class="camera d-flex align-items-center flex-column">
    <div>
      <video autoplay id="v" class="webcam"></video>
    </div>
    <div>
      <form class="loginform">
        <input
          placeholder="Email"
          v-validate="'required|email'"
          v-model="email"
          :class="{ input: true, 'is-danger': errors.has('email') }"
          name="email"
          class="form-control item field mt-3"
          type="email"
          id="email"
        />
        <span v-show="errors.has('email')" class="help is-danger" id="msg"
          ><small>{{ errors.first("email") }}</small></span
        >
        <button
          class="btn btn-primary mt-2"
          style="height: 75px; width: 75px; border-radius: 40px; color: yellow; font-size: 18px;"
          @click="validateBeforeLogin"
        >
          Login
        </button>
        <h4 v-if="auth_failed" class="text-danger pt-3">Login failed</h4>
      </form>
    </div>
    <div>
      <canvas class="canvas" width="620" height="500" id="c"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loginform {
  width: 300px;
  justify-content: center;
  text-align: center;
}
@media screen and (min-width: 500px) {
  .camera {
    background-image: linear-gradient(rgb(34, 34, 34), #ffffff);
    padding-top: 10px;
    height: 100vh;
  }
  .webcam {
    width: auto;
    height: auto;
    background-color: rgb(26, 25, 25);
    max-width: 600px;
    border-radius: 5px;
  }
  .canvas {
    z-index: -1;
    position: fixed;
    top: 13px;
  }
}
@media screen and (max-width: 499px) {
  video {
    height: auto;
    width: 100vw;
  }
  .canvas {
    height: 75vw;
    width: 100vw;
    z-index: -1;
    position: fixed;
    top: 20px;
  }
  .camera {
    background-image: linear-gradient(rgb(34, 34, 34), rgb(255, 255, 255));
    padding-top: 20px;
    height: 100vh;
  }
}
</style>

<script>
/* eslint-disable */
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "face-recognition",
  components: {},
  data() {
    return {
      email: "",
      prediction: "",
    };
  },
  computed: {
    ...mapGetters(["auth_failed"]),
  },
  methods: {
    ...mapActions(["faceRecognitionLogin"]),
    initialise() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      }
    },
    async recognizeFace() {
      const canvas = document.getElementById("c");
      const video = document.getElementById("v");
      canvas.getContext("2d").drawImage(video, 0, 0);
      const res = await axios.post("http://localhost:5000/predict", {
        datauri: `${canvas.toDataURL("image/png")}`,
      });
      return res;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$store.commit("auth_request");
      this.recognizeFace()
        .then((res) => {
          console.log("prediction: ", res);
          this.faceRecognitionLogin({
            email: this.email,
            faceCode: res.data.prediction,
          })
            .then(() => {
              if (localStorage.getItem("jwt") != null) {
                this.$emit("loggedIn");
                this.$router.push({ name: "individual-profile" });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
          this.$store.commit("auth_error");
        });
    },
    validateBeforeLogin(e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // es-lint-disable-next-line
          this.handleSubmit(e);
          return;
        }
      });
    },
  },
  created() {},
  beforeMount() {
    this.initialise();
  },
};
</script>
