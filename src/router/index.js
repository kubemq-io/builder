import Vue from "vue";
import VueRouter from "vue-router";
import IntegrationsPage from "@/pages/IntegrationsPage";
import BridgesPage from "@/pages/BridgesPage";

import HomePage from "@/pages/HomePage";
import ClustersPage from "@/pages/ClustersPage";
import ClustersConfigView from "@/components/cluster/views/ClustersConfigView";
import ClustersListView from "@/components/cluster/views/ClustersListView";
import BridgesListView from "@/components/bridges/BridgesListView";
import BridgesConfigView from "@/components/bridges/BridgesConfigView";
import IntegrationConfigView from "@/components/integrations/IntegrationConfigView";
import IntgerationsListView from "@/components/integrations/IntgerationsListView";

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
    name: "targets",
    component: IntegrationsPage,
    props: { type: "targets" },
    redirect: "targets/list",
    children: [
      {
        path: "config",
        name: "configTargetIntegration",
        component: IntegrationConfigView,
        props: { type: "targets" }
      },
      {
        path: "",
        name: "targetsList",
        component: IntgerationsListView,
        props: { type: "targets" }
      }
    ]
  },
  {
    path: "/sources",
    name: "sources",
    component: IntegrationsPage,
    props: { type: "sources" },
    redirect: "sources/list",
    children: [
      {
        path: "config",
        name: "configSourceIntegration",
        component: IntegrationConfigView,
        props: { type: "sources" }
      },
      {
        path: "",
        name: "sourcesList",
        component: IntgerationsListView,
        props: { type: "sources" }
      }
    ]
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
