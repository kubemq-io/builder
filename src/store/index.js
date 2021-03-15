import Vue from "vue";
import Vuex from "vuex";
import ClustersModule from "@/store/modules/clusters";
import BridgesModule from "@/store/modules/bridges";
import IntegrationsModule from "@/store/modules/integrations";
import ToastModule from "@/store/modules/toast";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clusters: ClustersModule,
    integrations: IntegrationsModule,
    bridges: BridgesModule,
    toast: ToastModule
  }
});
