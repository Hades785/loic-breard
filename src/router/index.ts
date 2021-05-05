import {
  createRouter,
  createWebHistory,
  RouteMeta,
  RouteRecordRaw,
} from "vue-router";
import Home from "@/pages/Home.vue";
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
    component: Home,
    meta: {
      title: "Loïc Bréard",
      metaTags: [
        {
          name: "description",
          content: "Software and game developer.",
        },
        {
          name: "og:description",
          content: "Software and game developer.",
        },
      ],
    },
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
          title: "About | Loïc Bréard",
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
          title: "Skills | Loïc Bréard",
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
          title: "Education | Loïc Bréard",
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
          title: "Experience | Loïc Bréard",
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
          title: "Projects | Loïc Bréard",
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
          title: "Interests | Loïc Bréard",
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
  title?: string;
  metaTags?: Array<RouteMetaTag>;
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Meta guard
router.beforeEach((to, from, next) => {
  const titleRoute = to.matched
    .slice()
    .reverse()
    .find((r) => r?.meta?.title);
  const metaRoute = to.matched
    .slice()
    .reverse()
    .find((r) => r?.meta?.metaTags);

  // Update title
  document.title =
    (titleRoute?.meta as RouteMetaC).title ?? process.env.VUE_APP_TITLE;

  // Update canonical url
  document
    .querySelector(`link[rel="canonical"]`)
    ?.setAttribute("href", `${process.env.VUE_APP_CANONICAL}${to.path}`);

  // Clear route meta
  Array.from(document.querySelectorAll("[route-meta]")).map((node) =>
    node.remove()
  );

  // Update meta
  (metaRoute?.meta as RouteMetaC).metaTags
    ?.map((tag) => {
      let node = document.querySelector(`meta[name="${tag.name}"]`);

      // If meta node not found, create route specific meta node.
      if (node === null) {
        node = document.createElement("meta");
        node.setAttribute("route-meta", "");
      }

      node.setAttribute("name", tag.name);
      node.setAttribute("content", tag.content);

      return node;
    })
    .forEach((node) => {
      if (node.getAttribute("route-meta") !== null)
        document.head.appendChild(node);
    });

  next();
});

export default router;
