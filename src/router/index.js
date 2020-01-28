import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/LandingPage";
import Login from "../views/Login";
import Catalog from "../views/Catalog";
import Register from "../views/Registration";

//user
import User from "../views/user/User";
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
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog
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
