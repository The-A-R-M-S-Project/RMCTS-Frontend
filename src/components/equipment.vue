<template>
  <div class="container">
    <div class="bg-light this-card" style="max-width: 60vw; height: 100%;">
      <div>
        <div class="this-image">
          <img
            :src="url"
            class="image-fluid p-1"
            style="width: 350px; height: 250px; border-radius: 5px; object-fit: cover;"
          />
        </div>
        <div class>
          <div class>
            <h5 class="card-title">{{ title }}</h5>
            <p class>
              <small class="text-muted">{{ location }}</small>
            </p>
          </div>
        </div>
      </div>
      <div class="buttons-area">
        <button
          type="button"
          class="btn btn-success r m-3"
          style="width: 200px"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.this-card {
  border: solid 1px rgb(136, 136, 136);
  border-radius: 5px;
  min-width: 350px;
}
.this-image {
  display: flex;
  align-content: center;
}
.buttons-area {
  display: flex;
  justify-content: center;
  background-color: rgb(205, 216, 226);
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
