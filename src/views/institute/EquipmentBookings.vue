<template>
  <div>
    <nav>
      <div class="nav nav-tabs bg-secondary" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          <li class="fa fa-calendar pt-2 pb-2"></li>
          Calendar View
        </a>
        <a
          class="nav-item nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          <li class="fa fa-list pt-2 pb-2"></li>
          List View
        </a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="content-area">
          <div class="calendar">
            <MyBookingsCalendar />
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div class="content-area">
          <BookingsList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookingsList from "./BookingsList";
import MyBookingsCalendar from "@/components/Institute/activityCalendar";
export default {
  name: "equipment-reservations",
  components: {
    BookingsList,
    MyBookingsCalendar
  }
};
</script>

<style scoped>
.nav-link.active {
  border-radius: 0px;
}
a {
  color: white;
}
a:hover {
  color: yellow;
  border-radius: 0px;
}
.content-area {
  height: 100%;
  min-height: 85vh;
  margin-top: 10px;
  padding-top: 10px;
  background-color: #F2F3F4;
  border-radius: 5px;
}
.active {
  border-bottom: 0px;
}
.edit-equipment {
  background: rgba(0, 0, 0, 0.479);
  color: #666666;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
  float: left;
  text-align: center;
}
.calendar {
  padding-left: 100px;
  padding-right: 100px;
}
</style>
