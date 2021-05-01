import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import CV from "@/pages/CV.vue";
import About from "@/pages/cv/About.vue";
import Skills from "@/pages/cv/Skills.vue";
import Education from "@/pages/cv/Education.vue";
import Experience from "@/pages/cv/Experience.vue";
import Projects from "@/pages/cv/Projects.vue";
import Interests from "@/pages/cv/Interests.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: About,
  },
  {
    path: "/cv",
    component: CV,
    redirect: "/cv/about",
    children: [
      {
        path: "about",
    name: "About",
    component: About,
      },
      {
        path: "skills",
        name: "Skills",
        component: Skills,
      },
      {
        path: "education",
        name: "Education",
        component: Education,
      },
      {
        path: "experience",
        name: "Experience",
        component: Experience,
      },
      {
        path: "projects",
        name: "Projects",
        component: Projects,
      },
      {
        path: "interests",
        name: "Interests",
        component: Interests,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
