<template>
  <div>
    <main class="login-page">
      <section class="clean-form dark">
        <div class="container mb-4">
          <div class="block-heading">
            <h4 class="text-info text-center">Reservation Details</h4>
            <hr class="solid" />
          </div>
          <div>
            <p class="shrink">
              <strong>Item:</strong>
              <router-link :to="`/institute/details/${event.itemId}`"
                ><a style="text-decoration: underline">
                  {{ " " + itemName }}
                </a></router-link
              >
            </p>
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
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    itemName: "",
    title: "",
    start: {},
    end: {},
  }),
  methods: {},
  props: {
    text: String,
    event: Object,
  },
  created() {
    this.$http
      .get(`https://rmcts-api.herokuapp.com/item/${this.event.itemId}`)
      .then((res) => {
        console.log(res);
        this.itemName = res.data[0].title;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
};
//
</script>

<style scoped>
hr.solid {
  border-top: 2px solid #999;
}
.shrink {
  font-size: 13px;
}
</style>
