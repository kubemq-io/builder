import lodashLang from "lodash/lang";
import { BridgesBinding } from "@/components/bridges/bridges";

const state = {
  bindings: [],
  configBinding: {
    mode: "add",
    binding: lodashLang.cloneDeep(new BridgesBinding()),
    originateName: "",
    index: -1,
    existedBindingNames: []
  }
};
const getters = {
  getBridgesBindingNames: function() {
    let list = [];
    state.bindings.forEach(value => {
      list.push({ name: value.Name });
    });
    return list;
  }
};
const actions = {};
const mutations = {
  clearBridgesBindingsList(state) {
    state.bindings = [];
  },
  setConfigBinding(state, val) {
    switch (val.mode) {
      case "add": {
        state.configBinding = {
          mode: "add",
          binding: lodashLang.cloneDeep(val.binding),
          originateName: "",
          index: -1,
          existedBindingNames: []
        };
        state.configBinding.binding.Name = `bridge-${state.bindings.length +
          1}`;
        break;
      }
      case "edit": {
        state.configBinding = {
          mode: "edit",
          binding: lodashLang.cloneDeep(val.binding),
          originateName: val.binding.Name,
          index: val.index,
          existedBindingNames: []
        };
        break;
      }
    }

    state.bindings.forEach(value => {
      state.configBinding.existedBindingNames.push({ name: value.Name });
    });
  },
  updateBindings(state, val) {
    switch (val.mode) {
      case "add": {
        const newBinding = lodashLang.cloneDeep(state.configBinding.binding);
        state.bindings.push(newBinding);
        break;
      }
      case "clone": {
        const newBinding = lodashLang.cloneDeep(val.binding);
        state.bindings.push(newBinding);
        break;
      }
      case "edit": {
        const updatedBinding = lodashLang.cloneDeep(
          state.configBinding.binding
        );
        state.bindings.splice(val.index, 1, updatedBinding);
        break;
      }
      case "delete": {
        state.bindings.splice(val.index, 1);
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
