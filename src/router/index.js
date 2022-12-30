import { createRouter, createWebHistory } from "vue-router";

import pokedex from "../components/Pokedex.vue"



const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pokedex"
  },
  {
    path: "/pokedex",
    name: "pokedex",
    component: pokedex
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
