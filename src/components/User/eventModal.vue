<template>
  <div>
    <main class="login-page">
      <section class="clean-form dark">
        <div class="container">
          <div class="block-heading">
            <h1 class="text-info text-center">Edit Event</h1>
          </div>
          <div>
            <h5>Event Details</h5>
            <p class="shrink"><strong>Title:</strong> {{ event.title }}</p>
            <p class="shrink"><strong>Start:</strong> {{ event.start }}</p>
            <p class="shrink"><strong>End:</strong> {{ event.end }}</p>
            <p class="shrink"><strong>ID:</strong> {{ event.id }}</p>
          </div>
          <hr class="solid" />
          <form>
            <h5>Edit Event</h5>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                type="text"
                class="form-control"
                v-model="title"
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
            <button @click="updateEvent" class="btn btn-success col-sm-3">
              Save changes
            </button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    start: {},
    end: {}
  }),
  methods: {
    updateEvent() {
      this.$store.commit("UpdateEvents", {
        id: this.event.id,
        title: this.event.id,
        start: this.start,
        end: this.end
      });
    }
    // formatDate(date) {
    //   var options = { day: "2-digit", month: "2-digit", year: "numeric" };
    //   let string = date.toLocaleDateString("en-UG", options).replace;
    // }
  },
  props: {
    text: String,
    event: Object
  },
  mounted() {
    this.title = this.event.title;
    this.start = this.event.start;
    this.end = this.event.end;
  },
};
</script>

<style scoped>
hr.solid {
  border-top: 2px solid #999;
}
.shrink {
  font-size: 13px;
}
</style>
