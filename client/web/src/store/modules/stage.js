const stagesState = {
  stageStep: 1,
  selectedConfig: {
    type: "",
    subType: "",
    metadata: {}
  },
  configModel: {}
};

const getters = {
  currentSelectedConfig: state => {
    return state.selectedConfig;
  }
};
const actions = {};
const mutations = {
  setSelectedConfig: function(state, selected) {
    state.selectedConfig = selected;
  },
  setStage: function(state, value) {
    state.stageStep = value;
  },
  setConfigModel: function(state, model) {
    state.configModel = JSON.stringify(model, null, "\t");
    console.log(state.configModel);
  }
};

export default {
  state: stagesState,
  getters,
  mutations,
  actions
};
