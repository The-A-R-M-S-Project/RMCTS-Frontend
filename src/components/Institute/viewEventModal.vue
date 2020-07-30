<template>
  <div>
    <main class="login-page">
      <section class="clean-form dark">
        <div class="container mb-4">
          <div class="block-heading">
            <h3 class="text-info text-center pt-4 pb-2">Booking Details</h3>
            <hr />
          </div>
          <div>
            <p class="shrink"><strong>Customer:</strong> {{ event.user }}</p>
            <p class="shrink"><strong>Title:</strong> {{ event.title }}</p>
            <p class="shrink">
              <strong>Start:</strong>
              {{
                event.start.split("T")[0] +
                  ", " +
                  event.start.split("T")[1] +
                  "hrs EAT"
              }}
            </p>
            <p class="shrink">
              <strong>End:</strong>
              {{
                event.end.split("T")[0] +
                  ", " +
                  event.end.split("T")[1] +
                  "hrs EAT"
              }}
            </p>
            <p class="shrink">
              <strong>Description:</strong> {{ event.description }}
            </p>
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
  mounted() {}
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
