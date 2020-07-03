/*eslint-disable*/
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/LandingPage";
import Catalog from "../views/Catalog";
import Register from "../views/Registration";
import ItemDetails from "../views/Details";
import Reservation from "../views/user/reserve";
import SignedUp from "../views/SignedUp"
import FaceRecognition from "../views/faceRecognition"
//user
import Login from "../views/Login";
import User from "../views/user/User";
import UserProfile from "../views/user/profile";
import UserBookings from "../views/user/bookings";
import UserEquipment from "../views/user/equipment";

//institute
import OrgLogin from "../views/institute/orgLogin";
import OrgForm1 from "../views/institute/orgReg1";

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
    path: "/institute-register/1",
    name: "orgreg",
    component: OrgForm1,
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
      },
      {
        path: "equipment",
        name: "user-equipment",
        component: UserEquipment,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: "/details/:id",
    name: "details",
    component: ItemDetails,
    watch: {
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
      next()
    }
    next();
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "user-profile" });
    }
    next();
  } else {
    next();
  }
});
export default router;
