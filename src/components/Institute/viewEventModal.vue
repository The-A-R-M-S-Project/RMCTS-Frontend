<template>
  <div>
    <main class="login-page">
      <section class="clean-form dark">
        <div class="container mb-4">
          <div class="block-heading">
            <h1 class="text-info text-center">Event Details</h1>
          </div>
          <div>
            <p class="shrink"><strong>Customer:</strong> {{ event.user }}</p>
            <p class="shrink"><strong>Title:</strong> {{ event.title }}</p>
            <p class="shrink"><strong>Start:</strong> {{ event.start }}</p>
            <p class="shrink"><strong>End:</strong> {{ event.end }}</p>
            <p class="shrink"><strong>ID:</strong> {{ event.id }}</p>
          </div>
          <hr class="solid" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: "",
    title: "",
    start: {},
    end: {}
  }),
  methods: {},
  props: {
    text: String,
    event: Object
  },
  mounted() {
    this.title = this.event.title;
    this.start = formatDate(this.event.start);
    this.end = formatDate(this.event.end);
  }
};
function formatDate(date) {
  var options = { day: "2-digit", month: "2-digit", year: "numeric" };
  let string = date.toLocaleDateString("ko-KR", options).replace(/\. /g, "-");
  return string.substr(0, string.length - 1);
}
</script>

<style scoped>
hr.solid {
  border-top: 2px solid #999;
}
.shrink {
  font-size: 13px;
}
</style>
