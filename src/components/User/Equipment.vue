<template>
  <div class="containr mt-5">
    <div class="bg-light this-card" style="max-width: 95%; height: 100%;">
      <div class="row">
        <div class="col-5 this-image">
          <img
            :src="url"
            class="image-fluid"
            style="width: 100%; height: 40vh; border-top-left-radius: 20px;  object-fit: cover;"
          />
        </div>
        <div class="col-7">
          <div class="">
            <h5 class="card-title">{{ title }}</h5>
            <p class="text-justify pr-3 mytext">
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
.containr {
  display: flex;
  justify-content: center;
}
.this-card {
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.this-image {
  display: flex;
  align-content: center;
}
.buttons-area {
  display: flex;
  justify-content: center;
  background-color: rgb(205, 216, 226);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.mytext {
  overflow-wrap: break-word;
  word-wrap: break-word;
}
</style>

<script>
export default {
  name: "all-equipment",
  props: {
    title: String,
    description: String,
    location: String,
    url: String,
    _id: String
  }
};
</script>
