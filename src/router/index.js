import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/public/Home/Home.vue"),
  },
  {
    path: "/results",
    name: "Results",
    component: () => import("../pages/public/Results/Results.vue"),
  },

  {
    path: "/404",
    name: "not-found",
    component: () => import("../pages/public/404.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "not-found",
    component: () => import("@/pages/public/404.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
