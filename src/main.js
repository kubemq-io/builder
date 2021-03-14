//import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCodemirror from "vue-codemirror";
import colors from "vuetify/lib/util/colors";
// FILTERS
import "./filters/capitalize";
import "./filters/lowercase";
import "./filters/uppercase";
import "./filters/formatCurrency";
import "./filters/formatDate";
Vue.config.productionTip = false;

new Vue({
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
      }
    }
  },
  icons: {
    iconfont: "fa"
  },
  router,
  store,
  vuetify,
  VueCodemirror,
  render: h => h(App)
}).$mount("#app");
