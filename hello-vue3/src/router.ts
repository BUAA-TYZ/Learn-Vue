import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import AboutView from "./pages/AboutView.vue";
import News from "./components/News.vue";

const routes = [
  {
    path: "/home",
    component: HomeView,
    children: [
      {
        meta: {
          isAuth: true,
        },
        path: "news",
        component: News,
      },
    ],
  },
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置路由, 初始化时执行, 每次路由切换前执行
router.beforeEach((to, from) => {
  console.log(to, from);
  if (to.meta.isAuth) {
    if (localStorage.getItem("school") !== "atguigu") return false;
  }
});

// 同样还有全局后置守卫, 初始化时执行, 每次路由切换后执行
// 可以确定的是, 执行到这的时候一定已经确定了路由是必跳转的

export default router;
