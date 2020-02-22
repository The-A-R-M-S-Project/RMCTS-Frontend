<template>
  <div>
    <div class="card this-card m-2">
      <div class="this-image">
        <img
          :src="url"
          class="card-img-top image-fluid"
          style="width: 340px; height: 250px; border-top-left-radius: 20px; border-top-right-radius: 20px;  object-fit: cover;"
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
          <router-link :to="{ name: 'details', params: { id: _id } }">
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
  border-radius: 20px;
  min-width: 340px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.this-image {
  display: flex;
  align-content: center;
}
.buttons-area {
  background-color: rgb(218, 218, 218);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
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
    url: String,
    _id: Number
  }
};
</script>
