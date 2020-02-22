<template>
  <div>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col-1">id</th>
          <th scope="col-7">Title</th>
          <th scope="col-4">Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Equipment 1</td>
          <td>00:00 - 00:00</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Equipment 2</td>
          <td>00:00 - 00:00</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Equipment 3</td>
          <td>00:00 - 00:00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-hover {
  color: rgb(165, 165, 165);
}
.my-table {
}
</style>

<script>
export default {
  name: "activity-table"
};
</script>
