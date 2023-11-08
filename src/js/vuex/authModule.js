export default {
  state: {
    isLoggedIn: false,
    email: "",
  },

  getters: {
    isLoggedIn: function (state) {
      return state.isLoggedIn;
    },

    email: function (state) {
      return state.email;
    },
  },

  mutations: {
    updateIsLoggedIn: function (state, newStatus) {
      state.isLoggedIn = newStatus;
    },

    updateEmail: function (state, newEmail) {
      state.email = newEmail;
    },
  },

  actions: {
    //
  },
};
