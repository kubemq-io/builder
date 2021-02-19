const targetsState = {
  targetsConfig: {
    name: "kubemq-targets",
    namespace: "kubemq"
  }
};
const getters = {
  configToShowTargets: state => {
    return JSON.stringify(state.targetsConfig, null, "\t");
  }
};
const actions = {};
const mutations = {};

export default {
  state: targetsState,
  getters,
  mutations,
  actions
};
