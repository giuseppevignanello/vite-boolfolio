import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContacts from "./pages/AppContacts.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: AppContacts,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export { router };
