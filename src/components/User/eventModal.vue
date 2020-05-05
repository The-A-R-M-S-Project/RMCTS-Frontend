<template>
  <div>
    <div class="container" height="500px">
      <form>
        <div class="form-group">
          <legend>Event Details</legend>
          <b>Title:</b> {{ event.title }} <br />
          <b>start:</b> {{ event.start }} <br />
          <b>End:</b> {{ event.end }} <br />
          <b>ID:</b> {{ event.id }} <br />
        </div>
        <hr class="solid" />
        <div class="form-group">
          <h5>Edit Event</h5>
          <input type="text" class="form-control" v-model="title" />
          <div class="form-row">
            <div class="col">
              <input
                type="datetime-local"
                class="form-control col"
                v-model="start"
              />
            </div>
            <div class="col">
              <input
                type="datetime-local"
                class="form-control col"
                v-model="end"
              />
            </div>
          </div>
          <button @click="updateEvent">Save changes</button>
        </div>
      </form>
    </div>
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
  },
  props: {
    text: String,
    event: Object
  },
  mounted() {
    this.title = this.event.title;
    this.start = this.event.start;
    this.end = this.event.end;
  }
};
</script>

<style scoped>
hr.solid {
  border-top: 2px solid #999;
}
</style>
