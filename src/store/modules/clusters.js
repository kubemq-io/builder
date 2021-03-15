import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";
import lodashLang from "lodash/lang";

const state = {
  clusters: [],
  configCluster: {
    mode: "add",
    cluster: lodashLang.cloneDeep(new ClusterConfig()),
    name: "kubemq-cluster",
    index: -1,
    existedClusterNames: []
  },
  lastLicenseKey: ""
};
const getters = {
  getClustersNames: function() {
    let list = [];
    state.clusters.forEach(value => {
      list.push({ name: value.name });
    });
    return list;
  }
};
const actions = {};
const mutations = {
  setConfigCluster(state, val) {
    switch (val.mode) {
      case "add": {
        state.configCluster = {
          mode: "add",
          cluster: lodashLang.cloneDeep(val.cluster),
          name: "kubemq-cluster",
          index: -1,
          existedClusterNames: []
        };
        state.configCluster.cluster.deployment.licenseKey =
          state.lastLicenseKey;
        break;
      }
      case "edit": {
        state.configCluster = {
          mode: "edit",
          cluster: lodashLang.cloneDeep(val.cluster),
          name: "kubemq-cluster",
          index: val.index,
          existedClusterNames: []
        };
        break;
      }
    }

    state.clusters.forEach(value => {
      state.configCluster.existedClusterNames.push({ name: value.name });
    });
  },

  clearClustersList(state) {
    state.clusters = [];
  },
  updateClusters(state, val) {
    switch (val.mode) {
      case "add": {
        const newCluster = lodashLang.cloneDeep(state.configCluster.cluster);
        state.clusters.push(newCluster);
        state.lastLicenseKey = newCluster.deployment.licenseKey;
        break;
      }
      case "clone": {
        const newCluster = lodashLang.cloneDeep(val.cluster);
        state.clusters.push(newCluster);
        break;
      }
      case "edit": {
        const updatedCluster = lodashLang.cloneDeep(
          state.configCluster.cluster
        );
        state.lastLicenseKey = updatedCluster.deployment.licenseKey;
        state.clusters.splice(val.index, 1, updatedCluster);
        break;
      }
      case "delete": {
        state.clusters.splice(val.index, 1);
        break;
      }
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
