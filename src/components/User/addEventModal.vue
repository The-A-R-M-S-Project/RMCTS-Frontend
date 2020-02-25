<template>
  <div>
    <main class="login-page">
      <section class="clean-form dark">
        <div class="container">
          <div class="block-heading">
            <h1 class="text-info text-center">Add Event</h1>
          </div>
          <form>
            <div class="form-group">
              <label for="email">Event Name</label>
              <input class="form-control item" type="text" />
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="day">Day</label>
                <select class="form-control" id="day">
                  <option v-for="i in days" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="month">Month</label>
                <select class="form-control" id="month">
                  <option v-for="i in months" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="year">Year</label>
                <input class="form-control" type="text" id="year" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-2">
                <label for="hour">Hour</label>
                <input class="form-control" id="hour" />
              </div>
              <div class="form-group col-md-2">
                <label for="password">Minutes</label>
                <input class="form-control" type="password" id="password" />
              </div>
              <div class="form-group col-md-3">
                <label for="periods"></label>
                <select class="form-control" id="periods">
                  <option v-for="i in periods" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="eventDetails">Add Details:</label>
              <textarea
                class="form-control"
                id="eventDetails"
                rows="2"
              ></textarea>
            </div>
            <router-link to="/make-reservation">
              <button
                class="btn btn-primary btn-block col-sm-3"
                type="submit"
                data-dismiss="modal"
              >
                Add
              </button>
            </router-link>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "addEventsModal",
  data() {
    return {
      days: ["Mon", "Tue", "Wed", "Thur", "Fri"],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      periods: ["AM", "PM"]
    };
  }
};
</script>

<style scoped></style>
