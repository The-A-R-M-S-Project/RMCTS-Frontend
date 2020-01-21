<template>
  <div class="container">
    <div class="bg-light this-card" style="max-width: 60vw; height: 100%;">
      <div class="row">
        <div class="col-md-5 this-image">
          <img
            :src="url"
            class="image-fluid p-3"
            style="max-width: 25vw; border-radius: 5px;"
          />
        </div>
        <div class="col-md-7">
          <div class="">
            <h5 class="card-title">{{ title }}</h5>
            <p class="text-justify pr-3">
              {{ description }}
            </p>
            <p class="">
              <small class="text-muted">{{ location }}</small>
            </p>
          </div>
        </div>
      </div>
      <div class="buttons-area">
        <button type="button" class="btn btn-danger m-3" style="width: 100px">
          Delete
        </button>
        <button type="button" class="btn btn-primary m-3" style="width: 100px">
          Edit
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
    description: String,
    location: String,
    url: String
  }
};
</script>
