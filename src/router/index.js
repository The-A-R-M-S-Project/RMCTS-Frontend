/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/LandingPage";
import Catalog from "../views/Catalog";
import ItemDetails from "../views/Details";
import Reservation from "../views/user/Reserve";
import SignedUp from "../views/SignedUp";
import FaceRecognition from "../views/FaceRecognition";
import TokenSent from "../views/TokenSent";


//institute
import Institute from "../views/institute/Institute";
import InstituteEquipment from "../views/institute/Equipment";
import InstituteProfile from "../views/institute/HomePage";
import EquipmentBookings from "../views/institute/EquipmentBookings.vue";
import OrgLogin from "../views/institute/OrgLogin";
import OrgForm1 from "../views/institute/OrgReg1";
import OrgForm2 from "../views/institute/OrgReg2";
import EquipmentReservations from "../views/user/EquipmentReservations";

// individual
import Individual from "../views/individual/Individual";
import IndividualLogin from "../views/individual/IndividualLogin";
import IndividualProfile from "../views/individual/IndividualProfile";
import IndividualCatalog from "../views/individual/IndividualCatalog";
import IndividualEditProfile from "../views/individual/IndividualEditProfile";

Vue.use(VueRouter);

const routes = [
    // ======= guest routes ==========

    {
        path: "/",
        name: "index",
        component: Index,
        meta: {
            guest: true,
        },
    },
    {
        path: "/institute-login",
        name: "orglogin",
        component: OrgLogin,
        meta: {
            guest: true,
        },
    },
    {
        path: "/individual-login",
        name: "individualLogin",
        component: IndividualLogin,
        meta: {
            guest: true,
        },
    },
    {
        path: "/signed-up",
        name: "signed-up",
        component: SignedUp,
        meta: {
            guest: true,
        },
    },

    {
        path: "/face-auth",
        name: "face-recognition",
        component: FaceRecognition,
        meta: {
            guest: true,
        },
    },
    {
        path: "/institute-register/first-step",
        name: "first-step",
        component: OrgForm1,
        meta: {
            guest: true,
        },
    },
    {
        path: "/institute-register/last-step",
        name: "last-step",
        component: OrgForm2,
        meta: {
            guest: true,
        },
    },
    {
        path: "/token-sent",
        name: "token-sent",
        component: TokenSent,
        meta: {
            guest: true,
        },
    },

    // ========= institute routes ===============

    {
        path: "/institute",
        name: "institute",
        component: Institute,
        meta: {
            requiresAuth: true,
            // guest: true
        },
        children: [{
                path: "profile",
                name: "institute-profile",
                component: InstituteProfile,
                meta: {
                    requiresAuth: true,
                    // guest: true
                },
            },
            {
                path: "equipment",
                name: "institute-equipment",
                component: InstituteEquipment,
                meta: {
                    requiresAuth: true,
                    // guest: true
                },
            },
            {
                path: "reservations",
                name: "equipment-reservations",
                component: EquipmentReservations,
                meta: {
                    requiresAuth: true,
                    // guest: true
                },
            },
            {
                path: "catalog",
                name: "catalog-view",
                component: Catalog,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "bookings",
                name: "equipment-bookings",
                component: EquipmentBookings,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "details/:id",
                name: "details",
                component: ItemDetails,
                watch: {
                    // eslint-disable-next-line no-unused-vars
                    $route(to, from) {
                        // react to route changes...
                    },
                },
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "make-reservation",
                name: "reservation",
                component: Reservation,
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "catalog",
                name: "individual-catalog",
                component: IndividualCatalog,
                meta: {},
            },
        ],
    },

    // ========= individual routes ==============

    {
        path: "/individual",
        name: "individual",
        component: Individual,
        children: [{
                path: "profile",
                name: "individual-profile",
                component: IndividualProfile,
                meta: {
                    guest: true
                },
            },
            {
                path: "catalog",
                name: "individual-catalog",
                component: IndividualCatalog,
                meta: {
                    guest: true
                }
            },
            {
                path: "reservations",
                name: "individual-reservations",
                component: EquipmentReservations,
                meta: {
                    guest: true
                }
            },
            {
                path: "edit-profile",
                name: "individual-edit-profile",
                component: IndividualEditProfile,
                meta: {
                    guest: true
                }
            },
            {
                path: "details/:id",
                name: "details",
                component: ItemDetails,
                watch: {
                    // eslint-disable-next-line no-unused-vars
                    $route(to, from) {
                        // react to route changes...
                    },
                },
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "make-reservation",
                name: "reservation",
                component: Reservation,
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") == null) {
            alert("Signup/login");
            next({
                name: "register",
            });
        } else {
            next();
        }
        next();
    } else if (to.matched.some((record) => record.meta.guest)) {
        if (localStorage.getItem("jwt") == null) {
            next();
        } else {
            next();
        }
    }
});
export default router;