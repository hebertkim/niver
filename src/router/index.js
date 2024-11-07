import { createRouter, createWebHistory } from "vue-router";
import ConviteView from "../components/ConviteView.vue";
import ConfirmarPresenca from "../components/ConfirmarPresenca.vue";

const routes = [
  { path: "/", component: ConviteView },
  { path: "/confirmar-presenca", component: ConfirmarPresenca },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
