import Vue from "vue";
import VueRouter from "vue-router";
import IntegrationsPage from "@/components/integrations/IntegrationsPage";
import BridgesPage from "@/pages/BridgesPage";

import HomePage from "@/pages/HomePage";
import ClustersPage from "@/pages/ClustersPage";
import ClustersConfigView from "@/components/cluster/views/ClustersConfigView";
import ClustersListView from "@/components/cluster/views/ClustersListView";
import BridgesListView from "@/pages/bridges/BridgesListView";
import BridgesConfigView from "@/pages/bridges/BridgesConfigView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/clusters",
    name: "clusters",
    component: ClustersPage,
    redirect: "clusters/list",
    children: [
      {
        path: "config",
        name: "configCluster",
        component: ClustersConfigView
      },
      {
        path: "",
        name: "clustersList",
        component: ClustersListView
      }
    ]
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
    name: "bridges",
    component: BridgesPage,
    redirect: "bridges/list",
    children: [
      {
        path: "config",
        name: "configBridge",
        component: BridgesConfigView
      },
      {
        path: "",
        name: "bridgesList",
        component: BridgesListView
      }
    ]
  },
  {
    path: "*",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "@/pages/NotFoundPage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
