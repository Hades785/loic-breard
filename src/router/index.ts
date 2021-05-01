import {
  createRouter,
  createWebHashHistory,
  RouteMeta,
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
        meta: {
          title: "Loïc Bréard - About",
          metaTags: [
            {
              name: "description",
              content: "About me",
            },
            {
              name: "og:description",
              content: "About me",
            },
          ],
        },
      },
      {
        path: "skills",
        name: "Skills",
        component: Skills,
        meta: {
          title: "Loïc Bréard - Skills",
          metaTags: [
            {
              name: "description",
              content: "My skills",
            },
            {
              name: "og:description",
              content: "My skills",
            },
          ],
        },
      },
      {
        path: "education",
        name: "Education",
        component: Education,
        meta: {
          title: "Loïc Bréard - Education",
          metaTags: [
            {
              name: "description",
              content: "My education",
            },
            {
              name: "og:description",
              content: "My education",
            },
          ],
        },
      },
      {
        path: "experience",
        name: "Experience",
        component: Experience,
        meta: {
          title: "Loïc Bréard - Experience",
          metaTags: [
            {
              name: "description",
              content: "My experience",
            },
            {
              name: "og:description",
              content: "My experience",
            },
          ],
        },
      },
      {
        path: "projects",
        name: "Projects",
        component: Projects,
        meta: {
          title: "Loïc Bréard - Projects",
          metaTags: [
            {
              name: "description",
              content: "My projects",
            },
            {
              name: "og:description",
              content: "My projects",
            },
          ],
        },
      },
      {
        path: "interests",
        name: "Interests",
        component: Interests,
        meta: {
          title: "Loïc Bréard - Interests",
          metaTags: [
            {
              name: "description",
              content: "My interests",
            },
            {
              name: "og:description",
              content: "My interests",
            },
          ],
        },
      },
    ],
  },
];

interface RouteMetaTag {
  name: string;
  content: string;
}

// Custom RouteMeta
interface RouteMetaC extends RouteMeta {
  title: string;
  metaTags: Array<RouteMetaTag>;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Meta guard
router.beforeEach((to, from, next) => {
  const title = document.title;
  const titleRoute = to.matched
    .slice()
    .reverse()
    .find((r) => r?.meta?.title);
  const metaRoute = to.matched
    .slice()
    .reverse()
    .find((r) => r?.meta?.metaTags);

  document.title = (titleRoute?.meta as RouteMetaC).title ?? title;

  // Clear route meta
  Array.from(document.querySelectorAll("[route-meta]")).map((node) =>
    node.remove()
  );

  (metaRoute?.meta as RouteMetaC).metaTags
    ?.map((tag) => {
      const node = document.createElement("meta");
      node.setAttribute("route-meta", "");
      node.setAttribute("name", tag.name);
      node.setAttribute("content", tag.content);
      return node;
    })
    .forEach((node) => document.head.appendChild(node));

  next();
});

export default router;
