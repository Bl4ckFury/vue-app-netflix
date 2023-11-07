import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/series",
      name: "series",
      component: () => import("../views/Series.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("../views/Movies.vue"),
    },
    {
      path: "/lastese",
      name: "lastese",
      component: () => import("../views/Lastese.vue"),
    },
    {
      path: "/my-list",
      name: "my-list",
      component: () => import("../views/My-list.vue"),
    },
  ],
});

export default router;
