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
            <hr class="solid1" />
            <div class="form-group row ml-2">
              <div class="form-row">
                <label for="time">Start:</label>
              </div>
              <div class="col-md-3">
                <input
                  v-model="startHr"
                  class="form-control"
                  placeholder="Hr"
                />
              </div>
              <div class="col-md-3">
                <input
                  v-model="startMin"
                  class="form-control"
                  placeholder="Mins"
                />
              </div>

              <div class="col-md-3">
                <select v-model="startPeriod" class="form-control">
                  <option value="" disabled selected hidden>AM</option>
                  <option v-for="i in periods" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <input
                  v-model="startDay"
                  class="form-control"
                  placeholder="Day"
                />
              </div>
              <div class="form-group col-md-4">
                <select v-model="startMonth" class="form-control" id="month">
                  <option value="" disabled selected hidden>Month</option>
                  <option v-for="i in months" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <input
                  v-model="startYear"
                  class="form-control"
                  type="text"
                  placeholder="Year"
                />
              </div>
            </div>
            <hr class="solid" />
            <div class="form-group row ml-2">
              <div class="form-row">
                <label for="time">End: </label>
              </div>
              <div class="col-md-3">
                <input v-model="endHr" class="form-control" placeholder="Hr" />
              </div>
              <div class="col-md-3">
                <input
                  v-model="endMin"
                  class="form-control"
                  placeholder="Mins"
                />
              </div>

              <div class="col-md-3">
                <select v-model="endPeriod" class="form-control">
                  <option value="" disabled selected hidden>AM</option>
                  <option v-for="i in periods" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <input v-model="endDay" class="form-control" placeholder="Hr" />
              </div>
              <div class="form-group col-md-4">
                <select v-model="endMonth" class="form-control" id="month">
                  <option value="" disabled selected hidden>Month</option>
                  <option v-for="i in months" :key="i">{{ i }}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <input
                  v-model="endYear"
                  class="form-control"
                  type="text"
                  placeholder="Year"
                />
              </div>
            </div>
            <hr class="solid1" />
            <div class="form-group">
              <label for="eventDetails">Add Details:</label>
              <textarea
                class="form-control"
                v-model="details"
                id="eventDetails"
                rows="2"
              ></textarea>
            </div>
            <router-link to="/make-reservation">
              <button
                class="btn btn-primary btn-block col-sm-3"
                type="submit"
                data-dismiss="modal"
                @click="saveEvent()"
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
      title: "",
      details: "",
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
  },
  methods: {
    saveEvent() {
      this.$store.dispatch("createEvent", {
        title: this.title,
        start:
          this.startYear +
          "-" +
          String(this.months.indexOf(this.startMonth) + 1) +
          "-" +
          this.startDay,
        end:
          this.endYear +
          "-" +
          String(this.months.indexOf(this.endMonth) + 1) +
          "-" +
          this.endDay,
        begin: this.startHr + ":" + this.startMin + " " + this.startPeriod,
        stop: this.endHr + ":" + this.endMin + " " + this.endPeriod,
        details: this.details
      });
    }
  }
};
</script>

<style scoped>
hr.solid {
  border-top: 2px solid #999;
}
hr.solid1 {
  border-top: 0.3px solid #999;
}
</style>
