<template>
  <div class="m-4">
    <form>
      <h5 class="text-center text-primary">Make reservation</h5>
      <hr style="width: 100%" />
      <div class="form-group">
        <label for="title">Title</label>
        <input id="title" type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label for="title">Description</label>
        <input
          id="title"
          type="text"
          class="form-control"
          v-model="description"
        />
      </div>
      <div class="form-row">
        <div class=" form-group col-md-5">
          <label for="start">Start</label>
          <input
            id="start"
            type="datetime-local"
            class="form-control"
            v-model="start"
          />
        </div>
        <div class=" form-group col-md-5">
          <label for="end">End</label>
          <input
            id="end"
            type="datetime-local"
            class="form-control"
            v-model="end"
          />
        </div>
      </div>
      <div class="text-center">
        <button @click="updateEvent" class="btn btn-success mt-3">
          Add Reservation
        </button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "reservation-form",
  methods: {
      // mutation, addition of reservation
    updateEvent() {
      this.$store.commit("AddReservation", {
        title: this.title,
        start: this.start,
        end: this.end,
        description: this.description,
      });
      console.log({
        title: this.title,
        start: this.start,
        end: this.end,
        description: this.description,
      });
    },
  },
};
</script>

<style scoped>
.btn {
  width: 200px;
}
</style>
