<template>
  <div class="camera d-flex align-items-center flex-column">
    <div
      v-if="detection"
      style="color: white; text-align: center; font-weight: light"
    >
      <h2>Detecting...</h2>
      <Loader />
    </div>
    <div>
      <video autoplay id="v" class="webcam"></video>
    </div>
    <!-- <input type="email"> -->
    <div v-if="detectionComplete">
      <p style="color: white">Your are {{ getUser }}</p>
    </div>
    <div>
      <button
        class="btn btn-primary"
        style="height: 75px; width: 75px; border-radius: 40px"
        @click="recognizeFace"
      >
        detect
      </button>
    </div>
    <div>
      <canvas class="canvas" width="620" height="500" id="c"></canvas>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 500px) {
  .camera {
    background-image: linear-gradient(black, grey);
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
    background-image: linear-gradient(black, grey);
    padding-top: 20px;
    height: 100vh;
  }
}
</style>

<script>
/* eslint-disable */
import axios from "axios";
import { mapActions, mapGetters } from 'vuex';
import Loader from "../components/loader";

export default {
  name: "face-recognition",
  components: {
    Loader
  },
  data() {
    return {
    };
  },
  computed: mapGetters(['detectionComplete', 'getUser', 'detection']),
  methods: {
    ...mapActions(['detectFace']),
    initialise() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      }
    },
    recognizeFace() {
      const canvas = document.getElementById("c");
      const video = document.getElementById("v");
      canvas.getContext("2d").drawImage(video, 0, 0);
      this.detectFace({datauri: `${canvas.toDataURL("image/png")}`})
    }
  },
  beforeMount() {
    this.initialise();
  }
};
</script>
