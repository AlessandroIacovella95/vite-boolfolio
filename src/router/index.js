import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },

    {
      name: "blog ",
      path: "/blog",
      component: BlogPage,
    },
  ],
});

export { router };
