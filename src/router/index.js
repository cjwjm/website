import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/NewsArticles",
    name: "NewsArticles",
    component: () =>
      import(
        /* webpackChunkName: "news-articles" */ "../views/NewsArticles.vue"
      )
  },
  {
    path: "/GroupIntroduce",
    name: "GroupIntroduce",
    component: () =>
      import(
        /* webpackChunkName: "group-introduce" */ "../views/GroupIntroduce.vue"
      )
  },
  {
    path: "/News",
    name: "News",
    component: () => import(/* webpackChunkName: "news" */ "../views/News.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
