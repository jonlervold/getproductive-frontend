export default {
  state: {
    isLoading: true,
    loadingText: "Checking login status...",
  },

  getters: {
    isLoading: function (state) {
      return state.isLoading;
    },

    loadingText: function (state) {
      return state.loadingText;
    },
  },

  mutations: {
    updateIsLoading: function (state, newStatus) {
      state.isLoading = newStatus;
    },

    updateLoadingText: function (state, newLoadingText) {
      state.loadingText = newLoadingText;
    },
  },

  actions: {
    //
  },
};
