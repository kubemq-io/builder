import { IntegrationsConfig } from "@/components/integrations/integrationsConfig";
import integrationList from "@/store/modules/integrationList";
import lodashArray from "lodash/array";
const state = {
  integrationsMetadata: {},
  currentBindingList: []
};
const getters = {
  getCurrentBindingNames: function() {
    let list = [];
    state.currentBindingList.forEach(value => {
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
    state.currentBindingList = [];
  },
  addBinding(state, val) {
    if (val) {
      state.currentBindingList.push(val.binding);
    }
  },
  replaceBinding(state, val) {
    state.currentBindingList.splice(val.index, 1, val.binding);
  },
  deleteBinding(state, val) {
    const index = lodashArray.findIndex(state.currentBindingList, function(b) {
      return b.Name === val.Name;
    });
    state.currentBindingList.splice(index, 1);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
