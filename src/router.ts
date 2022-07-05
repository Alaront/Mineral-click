import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Game from "@/components/Game.vue";

const router: Array<RouteRecordRaw> = [
  {
    path: "/game",
    component: Game,
    alias: "/",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: router,
});
