import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import Jobs from "../views/job/Jobs.vue";
import Details from "../views/job/Details.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  //Lazy Loading
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  //redirecting
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //catchAll 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
