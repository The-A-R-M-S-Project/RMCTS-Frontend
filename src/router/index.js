import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/LandingPage";
import Login from "../views/Login";
import Catalog from "../views/Catalog";
import Register from "../views/Registration";
import ItemDetails from "../views/Details";
import Reservation from "../views/user/reserve";

//user
import User from "../views/user/User";
import UserProfile from "../views/user/profile";
import UserBookings from "../views/user/bookings";
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
        path: "bookings",
        name: "user-bookings",
        component: UserBookings
      },
      {
        path: "equipment",
        name: "user-equipment",
        component: UserEquipment
      }
    ]
  },
  {
    path: "/details/:id",
    name: "details",
    component: ItemDetails
  },
  {
    path: "/make-reservation",
    name: "reservation",
    component: Reservation
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
