import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import BlogTypePage from "../pages/BlogTypePage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },

    {
      name: "blog",
      path: "/blog",
      component: BlogPage,
    },

    {
      name: "project-detail",
      path: "/project/:slug",
      component: ProjectPage,
    },
    {
      name: "blog-type",
      path: "/blog/type/:type_id",
      component: BlogTypePage,
    },
  ],
});

export { router };
