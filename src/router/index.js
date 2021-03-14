import Vue from "vue";
import VueRouter from "vue-router";
import IntegrationsPage from "@/components/integrations/IntegrationsPage";
import BridgesPage from "@/components/bridges/BridgesPage";
import ClusterPageNew from "@/components/cluster/ClusterPage";
import HomePage from "@/pages/HomePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/clusters",
    name: "KubeMQ Clusters",
    component: ClusterPageNew
  },
  {
    path: "/targets",
    name: "KubeMQ Targets",
    component: IntegrationsPage,
    props: { type: "targets" }
  },
  {
    path: "/sources",
    name: "KubeMQ Sources",
    component: IntegrationsPage,
    props: { type: "sources" }
  },
  {
    path: "/bridges",
    name: "KubeMQ Bridges",
    component: BridgesPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
