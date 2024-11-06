import { createRouter, createWebHistory } from "vue-router";
import ConviteView from "../components/ConviteView.vue";
import ConfirmarPresenca from "../components/ConfirmarPresenca.vue";
import SugestoesPresente from "../components/SugestoesPresente.vue";

const routes = [
  { path: "/", component: ConviteView },
  { path: "/confirmar-presenca", component: ConfirmarPresenca },
  { path: "/sugestoes-presente", component: SugestoesPresente }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
