import Vue from "vue";
const codeMirrorState = {
  code: ""
};
const getters = {
  currentCode: state => {
    return state.code;
  }
};
const actions = {};
const mutations = {
  setCodeFromCluster(state, currentModel) {
    state.code = Vue.prototype.$go.parse(currentModel, "cluster");
  }
};

export default {
  state: codeMirrorState,
  getters,
  mutations,
  actions
};
