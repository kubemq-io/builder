import lodashArray from "lodash/array";

const state = {
  bindings: []
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
  addBridgesBinding(state, val) {
    if (val) {
      state.bindings.push(val.binding);
    }
  },
  replaceBridgesBinding(state, val) {
    state.bindings.splice(val.index, 1, val.binding);
  },
  deleteBridgesBinding(state, val) {
    const indexSource = lodashArray.findIndex(state.bindings, function(b) {
      return b.Name === val.Name;
    });
    state.bindings.splice(indexSource, 1);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
