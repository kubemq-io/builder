const sourcesState = {
  sourcesConfig: {
    name: "kubemq-sources",
    namespace: "kubemq"
  }
};
const getters = {
  configToShowSources: state => {
    return JSON.stringify(state.sourcesConfig, null, "\t");
  }
};
const actions = {};
const mutations = {};

export default {
  state: sourcesState,
  getters,
  mutations,
  actions
};
