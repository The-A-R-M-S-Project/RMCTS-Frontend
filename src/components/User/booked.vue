<template>
  <div class="row">
    <!-- picture -->
    <div class="table">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Item Name</th>
          <th scope="col">Duration</th>
          <th scope="col">Time Scheduled</th>
          <th scope="col">Date Scheduled</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <img class="imageSize" :src="url" alt="Image can,t load" />
          </th>
          <td>{{ title }}</td>
          <td>{{ duration }}</td>
          <td>{{ timeScheduled }}</td>
          <td>{{ dateScheduled }}</td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<style scoped>
.imageSize {
  height: 40px;
  width: 40px;
}
</style>

<script>
export default {
  name: "booked",
  data() {
    return {};
  },
  props: {
    title: String,
    url: String,
    dateScheduled: String,
    timeScheduled: String,
    duration: String
  }
};
</script>
