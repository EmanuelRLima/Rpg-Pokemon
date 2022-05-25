import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMask from "v-mask";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

Vue.use(VueMask);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
  if (to.matched.some(record => record.meta.secretaria)) {
    if (!store.getters.secretaria) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
  if (to.matched.some(record => record.meta.vereador)) {
    if (!store.getters.vereador) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
  if (to.matched.some(record => record.meta.deputado)) {
    if (!store.getters.deputado) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
  next();
});

store.dispatch("localAuth");

new Vue({
  router,
  store,
  vuetify,

  render: function(h) {
    return h(App);
  }
}).$mount("#app")


