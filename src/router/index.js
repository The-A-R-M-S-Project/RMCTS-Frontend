import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import User from "../views/user/User.vue";
import UserProfile from "../views/user/profile";
import UserActivity from "../views/user/activity";
import UserEquipment from "../views/user/equipment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/user",
    name: "user",
    component: User,

    children: [
      {
        path: "profile",
        name: "user-profile",
        component: UserProfile
      },
      {
        path: "activity",
        name: "user-activity",
        component: UserActivity
      },
      {
        path: "equipment",
        name: "user-equipment",
        component: UserEquipment
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
