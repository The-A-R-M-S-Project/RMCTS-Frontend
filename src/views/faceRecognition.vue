<template>
  <div class="camera d-flex align-items-center flex-column">
    <div>
      <video autoplay class="webcam"></video>
    </div>
    <!-- <input type="email"> -->
    <hr style="width: 100vw" />
    <div>
      <button
        class="btn btn-primary"
        style="height: 80px; width: 80px; border-radius: 40px"
      >
        detect
      </button>
    </div>
  </div>
</template>

<style scoped>
.camera {
  width: 100vw;
  height: 100vh;
  margin-top: 2vh;
}
.webcam {
  width: auto;
  height: auto;
  background-color: rgb(26, 25, 25);
  max-width: 700px;
  border-radius: 5px;
}
</style>

<script>
export default {
  name: "face-recognition",
  data() {
    return {};
  },
  methods: {
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
    }
  },
  beforeMount() {
    this.initialise();
  }
};
</script>
