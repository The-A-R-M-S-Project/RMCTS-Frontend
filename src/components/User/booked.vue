<template>
  <tr>
    <th scope="row">
      <img class="imageSize" :src="url" alt="Image can,t load" />
    </th>
    <td>{{ title }}</td>
    <td>{{ duration }}</td>
    <td>{{ timeScheduled }}</td>
    <td>{{ dateScheduled }}</td>
    <hr />
  </tr>
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
