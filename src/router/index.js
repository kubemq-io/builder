import Vue from "vue";
import VueRouter from "vue-router";
import IntegrationsPage from "@/components/integrations/IntegrationsPage";
import BridgesPage from "@/components/bridges/BridgesPage";

import HomePage from "@/pages/HomePage";
import ClustersPage from "@/pages/clusters/ClustersPage";
import ClustersConfigPage from "@/pages/clusters/ClustersConfigView";
import ClustersListView from "@/pages/clusters/ClustersListView";

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
        component: ClustersConfigPage
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
    name: "KubeMQ Bridges",
    component: BridgesPage
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
