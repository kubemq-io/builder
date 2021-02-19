const bridgesState = {
  bridgesConfig: {
    name: "kubemq-bridges",
    namespace: "kubemq"
  }
};
const getters = {
  configToShowBridges: state => {
    return JSON.stringify(state.bridgesConfig, null, "\t");
  }
};
const actions = {};
const mutations = {};

export default {
  state: bridgesState,
  getters,
  mutations,
  actions
};
