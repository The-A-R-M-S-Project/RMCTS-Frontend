<template>
  <div class="container">
    <div class="bg-light" style="width: 57vw; height: 100%;">
      <div class="row" style="background-color:  rgb(205, 216, 226)">
        <div class="col-2">
          <p class="mt-4">Title :</p>
          <p class="mt-4 mb-1">location :</p>
          <p class="mt-4">Image URL :</p>
          <p class="mt-5">Description :</p>
        </div>
        <div class="col-10 text-center">
          <form action="" style="background-color:  rgb(205, 216, 226)">
            <input type="text" class="form-control mt-3" placeholder="title" />
            <input
              type="text"
              class="form-control mt-3"
              placeholder="location"
            />
            <input
              type="text"
              class="form-control mt-3"
              placeholder="Image URL"
            />
            <textarea
              class="form-control mt-4"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
            <button
              type="submit"
              class="btn btn-primary mb-2 mt-3"
              style="width: 100px;"
            >
              add
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  background-color: rgb(205, 216, 226);
}
</style>

<script>
export default {
  name: "add-equipment"
};
</script>
