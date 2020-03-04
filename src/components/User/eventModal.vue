<template>
  <div>
    <fieldset>
      <legend>Event Details</legend>
      <b>Title:</b> {{ event.title }} <br />
      <b>start:</b> {{ event.start }} <br />
      <b>End:</b> {{ event.end }} <br />
      <b>ID:</b> {{ event.id }} <br />
    </fieldset>
    <fieldset>
      <legend>Edit Event</legend>
      <input type="text" v-model="title" />
      <input type="date" v-model="start" />
      <input type="date" v-model="end" />
      <button @click="updateEvent">Save changes</button>
    </fieldset>
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

<style scoped></style>style
