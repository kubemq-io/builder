import { IntegrationsConfig } from "@/components/integrations/integrationsConfig";
import integrationList from "@/store/modules/integrationList";
import lodashArray from "lodash/array";
const state = {
  integrationsMetadata: {},
  targets: [],
  sources: []
};
const getters = {
  getCurrentBindingNames: function() {
    let list = [];
    state.targets.forEach(value => {
      list.push({ name: value.Name });
    });
    state.sources.forEach(value => {
      list.push({
        name: value.Name
      });
    });
    return list;
  }
};
const actions = {
  loadIntegrations: function() {
    this.state.integrationsMetadata = new IntegrationsConfig(integrationList);
  }
};
const mutations = {
  clearIntegrationList(state) {
    state.sources = [];
    state.targets = [];
  },
  addBinding(state, val) {
    if (val) {
      switch (val.binding.Type) {
        case "sources":
          state.sources.push(val.binding);
          break;
        case "targets":
          state.targets.push(val.binding);
          break;
      }
    }
  },
  replaceBinding(state, val) {
    switch (val.binding.Type) {
      case "sources":
        state.sources.splice(val.index, 1, val.binding);

        break;
      case "targets":
        state.targets.splice(val.index, 1, val.binding);
        break;
    }
  },
  deleteBinding(state, val) {
    switch (val.Type) {
      case "sources": {
        const indexSource = lodashArray.findIndex(state.sources, function(b) {
          return b.Name === val.Name;
        });
        state.sources.splice(indexSource, 1);

        break;
      }
      case "targets": {
        const indexTarget = lodashArray.findIndex(state.targets, function(b) {
          return b.Name === val.Name;
        });
        state.targets.splice(indexTarget, 1);
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
