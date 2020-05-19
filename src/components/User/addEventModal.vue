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
              <input v-model="title" class="form-control item" type="text" />
            </div>

            <div class="form-group row ml-2">
              <div class="form-row">
                <label for="time">Start:</label>
              </div>
              <div class="col-md-3">
                <input
                  v-model="startHr"
                  class="form-control"
                  id="time"
                  placeholder="Hr"
                />
              </div>
              <div class="col-md-3">
                <input
                  v-model="startMin"
                  class="form-control"
                  id="time"
                  placeholder="Mins"
                />
              </div>

              <div class="col-md-3">
                <select v-model="startPeriod" class="form-control" id="time">
                  <option v-for="i in periods" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="day">Day</label>
                <select v-model="startDay" class="form-control" id="day">
                  <option v-for="i in days" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="month">Month</label>
                <select v-model="startMonth" class="form-control" id="month">
                  <option v-for="i in months" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="year">Year</label>
                <input
                  v-model="startYear"
                  class="form-control"
                  type="text"
                  id="year"
                />
              </div>
            </div>

            <div class="form-group row ml-2">
              <div class="form-row">
                <label for="time">End: </label>
              </div>
              <div class="col-md-3">
                <input
                  v-model="endHr"
                  class="form-control"
                  id="time"
                  placeholder="Hr"
                />
              </div>
              <div class="col-md-3">
                <input
                  v-model="endMin"
                  class="form-control"
                  id="time"
                  placeholder="Mins"
                />
              </div>

              <div class="col-md-3">
                <select v-model="endPeriod" class="form-control" id="time">
                  <option v-for="i in periods" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="day">Day</label>
                <select v-model="endDay" class="form-control" id="day">
                  <option v-for="i in days" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="month">Month</label>
                <select v-model="endMonth" class="form-control" id="month">
                  <option v-for="i in months" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="year">Year</label>
                <input
                  v-model="endYear"
                  class="form-control"
                  type="text"
                  id="year"
                />
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
      periods: ["AM", "PM"],
      startHr: "",
      startMin: "",
      startPeriod: "",
      startDay: "",
      startMonth: "",
      startYear: "",
      endHr: "",
      endMin: "",
      endPeriod: "",
      endDay: "",
      endMonth: "",
      endYear: ""
    };
  }
};
</script>

<style scoped></style>
