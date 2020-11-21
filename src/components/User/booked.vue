<template>
  <tr>
    <th scope="row">
      <img class="imageSize" :src="item.imageURL" alt="Image can,t load" />
    </th>
    <td>{{ item.title }}</td>
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
/* eslint-disable */
export default {
  name: "booked",
  data() {
    return {
      item: {}
    };
  },
  created(){
    this.$http
      .get(`https://rmcts-api.herokuapp.com/equipment/item/${this.itemID}`)
      .then((res) => {
        // console.log(res)
        this.item = res.data[0];
      });
    // console.log("Item",this.item)
  },
  props: {
    itemID: String,
    dateScheduled: String,
    timeScheduled: String,
    duration: String
  }
};
</script>
