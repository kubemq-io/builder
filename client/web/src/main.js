import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCodemirror from "vue-codemirror";
// FILTERS
import "./filters/capitalize";
import "./filters/lowercase";
import "./filters/uppercase";
import "./filters/formatCurrency";
import "./filters/formatDate";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueCodemirror,
  render: h => h(App)
}).$mount("#app");
