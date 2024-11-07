import ConfirmarPresenca from "@/components/ConfirmarPresenca.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: ConfirmarPresenca },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
