import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import signUp from "../views/Signup.vue";
import Pricing from "../views/Pricing.vue";
import Services from "../views/Services.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signUp",
    component: signUp,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
