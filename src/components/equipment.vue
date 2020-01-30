<template>
  <div>
    <div class="card this-card">
      <div class="this-image">
        <img
          :src="url"
          class="card-img-top image-fluid p-1"
          style="width: 360px; height: 250px; border-radius: 5px; object-fit: cover;"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          <small class="text-muted">{{ location }}</small>
        </p>
      </div>
      <div class="card-footer buttons-area">
        <div class="butn">
          <router-link to="details">
            <button
              type="button"
              id="btn-color"
              class="btn btn-sm r m-3"
              style="width: 165px"
            >
              Read More !
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.this-card {
  border: solid 2px rgb(136, 136, 136);
  border-radius: 5px;
  min-width: 360px;
}
.this-image {
  display: flex;
  align-content: center;
}
.buttons-area {
  background-color: rgb(218, 218, 218);
}
.butn {
  text-align: center;
}
#btn-color {
  background-color: rgba(24, 221, 24, 0.664);
}
</style>

<script>
export default {
  name: "all-equipment",
  props: {
    title: String,
    location: String,
    url: String
  }
};
</script>
