import lodashArray from "lodash/array";

const state = {
  clusters: []
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
  clearClustersList(state) {
    state.clusters = [];
  },
  addCluster(state, val) {
    if (val) {
      state.clusters.push(val.cluster);
    }
  },
  replaceCluster(state, val) {
    state.clusters.splice(val.index, 1, val.cluster);
  },
  deleteCluster(state, val) {
    const indexSource = lodashArray.findIndex(state.clusters, function(b) {
      return b.name === val.name;
    });
    state.clusters.splice(indexSource, 1);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
