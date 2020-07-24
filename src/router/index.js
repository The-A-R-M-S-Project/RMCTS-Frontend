import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/LandingPage";
import Catalog from "../views/Catalog";
import Register from "../views/Registration";
import ItemDetails from "../views/Details";
import Reservation from "../views/user/reserve";
import SignedUp from "../views/SignedUp";
import FaceRecognition from "../views/faceRecognition";
//user
import Login from "../views/Login";
import User from "../views/user/User";
import UserProfile from "../views/user/profile";
import UserBookings from "../views/user/bookings";

//institute
import Institute from "../views/institute/institute";
import InstituteEquipment from "../views/institute/equipment";
import InstituteProfile from "../views/institute/homepage";
import EquipmentResevations from "../views/institute/bookings";
import OrgLogin from "../views/institute/orgLogin";
import OrgForm1 from "../views/institute/orgReg1";
import OrgForm2 from "../views/institute/orgReg2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: {
      guest: true
    }
  },
  {
    path: "/individual-login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/institute-login",
    name: "orglogin",
    component: OrgLogin,
    meta: {
      guest: true
    }
  },
  {
    path: "/institute-register/first-step",
    name: "first-step",
    component: OrgForm1,
    meta: {
      guest: true
    }
  },
  {
    path: "/institute-register/last-step",
    name: "last-step",
    component: OrgForm2,
    meta: {
      guest: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signed-up",
    name: "signed-up",
    component: SignedUp,
    meta: {
      guest: true
    }
  },
  {
    path: "/face-auth",
    name: "face-recognition",
    component: FaceRecognition,
    meta: {
      guest: true
    }
  },
  {
    path: "/user",
    name: "user",
    component: User,
    meta: {
      requiresAuth: true
    },

    children: [
      {
        path: "profile",
        name: "user-profile",
        component: UserProfile,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "bookings",
        name: "user-bookings",
        component: UserBookings,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: "/institute",
    name: "institute",
    component: Institute,
    meta: {
      requiresAuth: true
      // guest: true
    },
    children: [
      {
        path: "profile",
        name: "institute-profile",
        component: InstituteProfile,
        meta: {
          requiresAuth: true
          // guest: true
        }
      },
      {
        path: "equipment",
        name: "institute-equipment",
        component: InstituteEquipment,
        meta: {
          requiresAuth: true
          // guest: true
        }
      },
      {
        path: "reservations",
        name: "equipment-reservations",
        component: EquipmentResevations,
        meta: {
          requiresAuth: true
          // guest: true
        }
      }
    ]
  },
  {
    path: "/details/:id",
    name: "details",
    component: ItemDetails,
    watch: {
      // eslint-disable-next-line no-unused-vars
      $route(to, from) {
        // react to route changes...
      }
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/make-reservation",
    name: "reservation",
    component: Reservation,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      alert("Signup/login");
      next({
        name: "register"
      });
    } else {
      next();
    }
    next();
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "institute-profile" });
    }
    next();
  } else {
    next();
  }
});
export default router;
