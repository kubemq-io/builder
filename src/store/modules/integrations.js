import {
  Integrations,
  IntegrationsBinding
} from "@/components/integrations/Integrations";
import integrationList from "@/store/modules/integrationList";
import lodashLang from "lodash/lang";

const state = {
  integrationsMetadata: {
    connectors: []
  },
  targets: [],
  sources: [],
  configTargetsBinding: {
    type: "targets",
    mode: "add",
    binding: lodashLang.cloneDeep(new IntegrationsBinding()),
    originateName: "",
    index: -1,
    existedBindingNames: []
  },
  configSourcesBinding: {
    type: "sources",
    mode: "add",
    binding: lodashLang.cloneDeep(new IntegrationsBinding()),
    originateName: "",
    index: -1,
    existedBindingNames: []
  }
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
  setConfigIntegrationBinding(state, val) {
    if (val.type === "targets") {
      switch (val.mode) {
        case "add": {
          state.configTargetsBinding = {
            type: "targets",
            mode: "add",
            binding: lodashLang.cloneDeep(val.binding),
            originateName: "",
            index: -1,
            existedBindingNames: []
          };
          state.configTargetsBinding.binding.Name = `target-${state.targets.length}`;
          break;
        }
        case "edit": {
          state.configTargetsBinding = {
            type: "targets",
            mode: "edit",
            binding: lodashLang.cloneDeep(val.binding),
            originateName: val.binding.Name,
            index: val.index,
            existedBindingNames: []
          };
          break;
        }
      }
      state.targets.forEach(value => {
        state.configTargetsBinding.existedBindingNames.push({
          name: value.Name
        });
      });
    }
    if (val.type === "sources") {
      switch (val.mode) {
        case "add": {
          state.configSourcesBinding = {
            type: "sources",
            mode: "add",
            binding: lodashLang.cloneDeep(val.binding),
            originateName: "",
            index: -1,
            existedBindingNames: []
          };
          state.configSourcesBinding.binding.Name = `source-${state.sources.length}`;
          break;
        }
        case "edit": {
          state.configSourcesBinding = {
            type: "sources",
            mode: "edit",
            binding: lodashLang.cloneDeep(val.binding),
            originateName: val.binding.Name,
            index: val.index,
            existedBindingNames: []
          };
          break;
        }
      }
      state.sources.forEach(value => {
        state.configSourcesBinding.existedBindingNames.push({
          name: value.Name
        });
      });
    }
  },
  updateIntegrationBinding(state, val) {
    if (val.type === "targets") {
      switch (val.mode) {
        case "add": {
          const newBinding = lodashLang.cloneDeep(
            state.configTargetsBinding.binding
          );
          state.targets.push(newBinding);
          break;
        }
        case "clone": {
          const newBinding = lodashLang.cloneDeep(val.binding);
          state.targets.push(newBinding);
          break;
        }
        case "edit": {
          const updatedBinding = lodashLang.cloneDeep(
            state.configTargetsBinding.binding
          );
          state.targets.splice(val.index, 1, updatedBinding);
          break;
        }
        case "delete": {
          state.targets.splice(val.index, 1);
          break;
        }
      }
    }

    if (val.type === "sources") {
      switch (val.mode) {
        case "add": {
          const newBinding = lodashLang.cloneDeep(
            state.configSourcesBinding.binding
          );
          state.sources.push(newBinding);
          break;
        }
        case "clone": {
          const newBinding = lodashLang.cloneDeep(val.binding);
          state.sources.push(newBinding);
          break;
        }
        case "edit": {
          const updatedBinding = lodashLang.cloneDeep(
            state.configSourcesBinding.binding
          );
          state.sources.splice(val.index, 1, updatedBinding);
          break;
        }
        case "delete": {
          state.sources.splice(val.index, 1);
          break;
        }
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
