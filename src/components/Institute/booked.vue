<template>
  <tr>
    <th scope="row">
      <img class="imageSize" :src="url" alt="Image can,t load" />
    </th>
    <td>{{ title }}</td>
    <td>{{ duration }}</td>
    <td>{{ timeScheduled }}</td>
    <td>{{ dateScheduled }}</td>
    <td>{{ customer.username }}</td>
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
/*eslint-disable*/
export default {
  name: "booked",
  data() {
    return {
      customer: {}
    };
  },
  props: {
    title: String,
    url: String,
    dateScheduled: String,
    timeScheduled: String,
    duration: String,
    reservation: Object
  },
  methods: {
    customerDetails(reservation){
      this.$http.get(`https://rmcts-api.herokuapp.com/users/profile/${reservation.reserverId}`).then(res => {
        this.customer = res.data
      })
      return this.customer
    }
  }
  ,
  created(){
    // console.log("customer", this.customer)
    this.customer = this.customerDetails(this.reservation)
  }
};
</script>
