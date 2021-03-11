import { Integrations } from "@/components/integrations/Integrations";
import integrationList from "@/store/modules/integrationList";
import lodashArray from "lodash/array";
const state = {
  integrationsMetadata: {},
  targets: [],
  sources: []
};
const getters = {
  getIntegrationsBindingNames: state => type => {
    let list = [];

    if (type === "sources") {
      state.sources.forEach(value => {
        list.push({
          name: value.Name
        });
      });
    } else {
      state.targets.forEach(value => {
        list.push({ name: value.Name });
      });
    }
    return list;
  }
};
const actions = {
  loadIntegrations: function() {
    state.integrationsMetadata = new Integrations(integrationList);
  }
};
const mutations = {
  clearIntegrationsList(state) {
    state.sources = [];
    state.targets = [];
  },
  addIntegrationsBinding(state, val) {
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
  replaceIntegrationsBinding(state, val) {
    switch (val.binding.Type) {
      case "sources":
        state.sources.splice(val.index, 1, val.binding);

        break;
      case "targets":
        state.targets.splice(val.index, 1, val.binding);
        break;
    }
  },
  deleteIntegrationsBinding(state, val) {
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
