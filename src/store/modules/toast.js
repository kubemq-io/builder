const state = {
  show: false,
  color: "black",
  message: "",
  timeout: 3000
};

const actions = {
  showToast: function({ state, commit }, message) {
    if (state.show) commit("hideToast");

    setTimeout(() => {
      commit("showToast", {
        color: "black",
        message,
        timeout: 3000
      });
    });
  },
  showError: function({ state, commit }, { message = "Failed!", error }) {
    if (state.show) commit("hideToast");

    setTimeout(() => {
      commit("showToast", {
        color: "error",
        message: message + " " + error.message,
        timeout: 10000
      });
    });
  },
  showSuccess: function({ state, commit }, message) {
    if (state.show) commit("hideToast");

    setTimeout(() => {
      commit("showToast", {
        color: "secondary",
        message,
        timeout: 3000
      });
    });
  }
};

const mutations = {
  showToast: (state, toast) => {
    state.message = toast.message;
    state.color = toast.color;
    state.timeout = toast.timeout;
    state.show = true;
  },
  hideToast: state => {
    state.show = false;
  },
  resetToast: state => {
    state.message = "";
    state.color = "black";
    state.timeout = 3000;
    state.show = false;
  }
};
export default {
  state,
  mutations,
  actions
};
