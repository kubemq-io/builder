import Vue from "vue";
import Vuex from "vuex";
import cluster from "@/store/modules/cluster";
import bridges from "@/store/modules/bridges";
import integrations from "@/store/modules/integrations";
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
    cluster,
    integrations,
    bridges
  }
});
