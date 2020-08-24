import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/LandingPage";
import Catalog from "../views/Catalog";
import ItemDetails from "../views/Details";
import Reservation from "../views/user/Reserve";
import SignedUp from "../views/SignedUp";
import FaceRecognition from "../views/FaceRecognition";
import TokenSent from "../views/TokenSent";
import SessionExpired from "../views/SessionExpired.vue";

//institute
import Institute from "../views/institute/Institute";
import InstituteEquipment from "../views/institute/Equipment";
import InstituteProfile from "../views/institute/HomePage";
import EquipmentBookings from "../views/institute/EquipmentBookings.vue";
import InstituteAbout from "../views/institute/About";
import InstituteEditProfile from "../views/institute/OrgEditProfile.vue";
import InstituteLogin from "../views/institute/OrgLogin";
import InstituteRegister from "../views/institute/OrgRegister";
import EquipmentReservations from "../views/user/EquipmentReservations";

// individual
import Individual from "../views/individual/Individual";
import IndividualLogin from "../views/individual/IndividualLogin";
import IndividualProfile from "../views/individual/IndividualProfile";
import IndividualCatalog from "../views/individual/IndividualCatalog";
import IndividualEditProfile from "../views/individual/IndividualEditProfile";
import IndividualRegister from "../views/individual/IndividualRegister.vue";

Vue.use(VueRouter);

const routes = [
  // ======= guest routes ==========

  {
    path: "/",
    name: "index",
    component: Index,
    meta: {
      guest: true
    }
  },
  {
    path: "/session-expired",
    name: "session-expired",
    component: SessionExpired,
    meta: {
      requires_auth: true
    }
  },
  {
    path: "/institute-login",
    name: "instituteLogin",
    component: InstituteLogin,
    meta: {
      guest: true
    }
  },
  {
    path: "/individual-login",
    name: "individualLogin",
    component: IndividualLogin,
    meta: {
      guest: true
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
    path: "/institute-register",
    name: "institute-register",
    component: InstituteRegister,
    meta: {
      guest: true
    }
  },
  {
    path: "/individual-register",
    name: "individual-register",
    component: IndividualRegister,
    meta: {
      guest: true
    }
  },
  {
    path: "/token-sent/:email",
    name: "token-sent",
    component: TokenSent,
    meta: {
      guest: true
    }
  },

  // ========= institute routes ===============

  {
    path: "/institute",
    name: "institute",
    component: Institute,
    meta: {
      requiresAuth: true,
      is_institution: true
    },
    children: [
      {
        path: "profile",
        name: "institution-profile",
        component: InstituteProfile,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "equipment",
        name: "institution-equipment",
        component: InstituteEquipment,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "reservations",
        name: "equipment-reservations",
        component: EquipmentReservations,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "catalog",
        name: "catalog-view",
        component: Catalog,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "about",
        name: "about-insitution",
        component: InstituteAbout,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "bookings",
        name: "equipment-bookings",
        component: EquipmentBookings,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "details/:id",
        name: "institution-details",
        component: ItemDetails,
        watch: {
          // eslint-disable-next-line no-unused-vars
          $route(to, from) {
            // react to route changes...
          }
        },
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "make-reservation",
        name: "reservation",
        component: Reservation,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "catalog",
        name: "institution-catalog",
        component: IndividualCatalog,
        meta: {
          requiresAuth: true,
          is_institution: true
        }
      },
      {
        path: "edit-profile",
        name: "institution-edit-profile",
        component: InstituteEditProfile,
        meta: {
          requires_auth: true,
          is_institution: true
        }
      }
    ]
  },

  // ========= individual routes ==============

  {
    path: "/individual",
    name: "individual",
    component: Individual,
    children: [
      {
        path: "profile",
        name: "individual-profile",
        component: IndividualProfile,
        meta: {
          requires_auth: true,
          is_individual: true
        }
      },
      {
        path: "catalog",
        name: "individual-catalog",
        component: IndividualCatalog,
        meta: {
          requires_auth: true,
          is_individual: true
        }
      },
      {
        path: "reservations",
        name: "individual-reservations",
        component: EquipmentReservations,
        meta: {
          requires_auth: true,
          is_individual: true
        }
      },
      {
        path: "edit-profile",
        name: "individual-edit-profile",
        component: IndividualEditProfile,
        meta: {
          requires_auth: true,
          is_individual: true
        }
      },
      {
        path: "details/:id",
        name: "individual-details",
        component: ItemDetails,
        watch: {
          // eslint-disable-next-line no-unused-vars
          $route(to, from) {
            // react to route changes...
          }
        },
        meta: {
          requires_auth: true,
          is_individual: true
        }
      },
      {
        path: "make-reservation",
        name: "reservation",
        component: Reservation,
        meta: {
          requires_auth: true,
          is_individual: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      alert("You're not logged in");
      next({
        name: "index"
      });
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      if (
        to.matched.some(record => record.meta.is_individual) &&
        user.role === "individual"
      ) {
        next();
      } else if (
        to.matched.some(record => record.meta.is_institution) &&
        user.role === "institution"
      ) {
        next();
      } else {
        next();
        return;
      }
    }
    next();
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      const role = JSON.parse(localStorage.getItem("user")).role;
      next({ name: `${role}-profile` });
    }
  } else {
    next();
    return;
  }
});
export default router;
