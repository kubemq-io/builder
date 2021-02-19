const stagesState = {
  stageStep: 1,
  selectedConfig: ""
};

const getters = {
  currentSelectedConfig: state => {
    return state.selectedConfig;
  }
};
const actions = {};
const mutations = {
  setSelectedConfig: function(state, selected) {
    console.log(selected);
    state.selectedConfig = selected;
    state.stageStep = 2;
  },
  setStage: function(state, value) {
    state.stageStep = value;
  }
};

export default {
  state: stagesState,
  getters,
  mutations,
  actions
};
