import Vue from "vue";
import Vuex from "vuex";
import ClustersModule from "@/store/modules/clusters";
import BridgesModule from "@/store/modules/bridges";
import IntegrationsModule from "@/store/modules/integrations";
import ToastModule from "@/store/modules/toast";
// import Go from "@/wasm_exec";
// /* eslint no-undef: "off"*/
// const go = new Go();
// WebAssembly.instantiateStreaming(fetch("builder.wasm"), go.importObject)
//   // .then(async (result) => {
//   // await go.run(result.instance)
//   .then(result => {
//     go.run(result.instance);
//     // console.log(waAdd(...Array("2", "1")))
//
//     Vue.prototype.$go = {
//       parse: waparse
//     };
//   });
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clusters: ClustersModule,
    integrations: IntegrationsModule,
    bridges: BridgesModule,
    toast: ToastModule
  }
  // App.vue main toast
});
